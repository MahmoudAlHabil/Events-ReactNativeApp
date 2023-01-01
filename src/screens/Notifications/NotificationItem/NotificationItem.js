import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../../utils'
import { useNotificationsContext } from '../../../context'
import Modal from "react-native-modal"
import { Button } from '../../../components'
import moment from 'moment/moment'
import axios from 'axios'

const NotificationItem = ({ item }) => {
    const { title, createdAt, isTouched } = item
    const style = styles(isTouched)
    const [modalVisible, setModalVisible] = useState(false)
    const { dispatchNotifications } = useNotificationsContext()

    const handleNotification = () => {
        if (!isTouched) {
            dispatchNotifications({ type: "READ_NOTIFICATION", payload: { _id: item._id } })
            axios
                .put(`/api/notifications/${item._id}/touch`)
                .then(res => {})
                .catch(err => console.log(err))
        }
        setModalVisible(true)
    }

    return (
        <TouchableOpacity style={style.container}
            onPress={handleNotification} activeOpacity={0.8}>
            <Icon name='notifications-circle' size={40} color={colors.primary.main} />
            <Text style={style.title}>{title && title.length > 22 ? title.slice(0, 22) + '...' : title}</Text>
            <Text style={style.time}>{moment(createdAt).format('DD/MM/YYYY')}</Text>
            <Modal isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={["left", "right", "down", "up"]}
                backdropOpacity={0.5}
                style={style.modal}
            >
                <View style={style.contentModal}>
                    <Entypo name='emoji-flirt' size={40} color={colors.primary.main} />
                    <Text style={style.modalText}>{title}</Text>
                    <Button title="حسناً" onPress={() => setModalVisible(false)} buttonStyle={style.modalButton} />
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

export default NotificationItem