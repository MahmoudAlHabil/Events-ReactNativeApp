import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button, DropDown, InputField } from '../../components'
import { colors, typography } from '../../utils'
import { useBackHandler } from '@react-native-community/hooks'
import { useAppSettingsContext, useUserInfoContext } from '../../context'
import { useFormik } from 'formik'
import DateTimePicker from '../CreateEvent/components/DateTimePicker'
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal"

const SubmitEventScreen = () => {
    const { goBack, canGoBack, navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()
    const { userInfo } = useUserInfoContext()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const { eventData, items, organizer } = useRoute().params
    const [modalVisible, setModalVisible] = useState(false)

    // console.log('eventData', eventData)

    useBackHandler(() => {
        if (canGoBack()) {
            return true
        }
        return false
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            type: '',
            date: '',
            time: '',
            location: '',
            maxParticipants: 0,
            privacy: '',
            isPublic: false,
        },
        onSubmit: values => {
            axios
                .post('/api/events', {
                    user: userInfo._id,
                    organizer: organizer || null,
                    name: values.name,
                    address: values.location,
                    type: eventData.type,
                    isPublic: toggleCheckBox,
                    description: values.description,
                    image: "imageSrc",
                    items: items || [],
                    eventPackage: eventData.eventPackage,
                    date: values.date
                })
                .then(res => {
                    console.log(res)
                    setModalVisible(true)
                })
                .catch(err => {
                    console.log(err)
                }).finally(() => {
                    formik.setSubmitting(false);
                    formik.resetForm();
                })
        },
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>أدخل باقي التفاصيل لإتمام إنشاء المناسبة</Text>
                <InputField
                    placeholder="اسم المناسبة"
                    containerStyle={styles.input}
                    value={formik.values.name}
                    onChangeText={formik.handleChange('name')} />
                <InputField
                    placeholder="أضف وصفاً"
                    containerStyle={styles.input}
                    value={formik.values.description}
                    multiline={true}
                    onChangeText={formik.handleChange('description')} />
                <InputField
                    placeholder="المكان"
                    containerStyle={styles.input}
                    value={formik.values.location}
                    onChangeText={formik.handleChange('location')} />
                <DateTimePicker type='date'
                    style={styles.input}
                    value={formik.values.date}
                    onChangeText={formik.handleChange('date')} />
                <DateTimePicker type='time'
                    style={styles.input}
                    value={formik.values.time}
                    onChangeText={formik.handleChange('time')} />
                <View style={styles.horizontalFlex}>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.checkBoxText}>عرض للجمهور</Text>
                </View>
                <Button title="تأكيد المناسبة" onPress={formik.handleSubmit}
                    titleStyle={styles.nextButtonText}
                    disabled={formik.isSubmitting}
                    buttonStyle={styles.nextButton} />
                <Modal isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={["left", "right", "down", "up"]}
                    backdropOpacity={0.5}
                    style={styles.modal}
                >
                    <View style={styles.contentModal}>
                        <Icon name='checkmark-done-circle' size={40} color={colors.primary.main} />
                        <Text style={styles.modalText}>تم إنشاء مناسبتك بنجاح</Text>
                        <Button title="حسناً" onPress={() => {
                            setModalVisible(false)
                            navigate('HomeStack', { screen: 'Home' })
                            appSettings.setVisibleTabBottom(true, 'createEvent')
                        }} buttonStyle={styles.modalButton} />
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SubmitEventScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        marginBottom: 10,
    },
    horizontalFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '100%',
        height: 40,
        marginTop: 32,
        marginBottom: -10,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    checkBoxText: {
        ...typography.S.medium,
        color: colors.common.black,
        lineHeight: 32,
    },
    title: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginBottom: 10,
    },
    modal: {
        alignItems: 'center',
    },
    contentModal: {
        backgroundColor: colors.common.white,
        width: '80%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
        ...typography.M.regular,
        color: colors.gray[500],
        textAlign: 'center',
        // lineHeight: 24,
        marginVertical: 20,
    },
    modalButton: {
        backgroundColor: colors.primary.main,
        borderRadius: 10,
        marginTop: 10,
    }
})