import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, shadow, typography } from '../../utils'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'

const OrganizersScreen = () => {
    const { navigate } = useNavigation()
    const [organizers, setOrganizers] = useState([])
    const [loading, setLoading] = useState(false)
    const { eventData, items } = useRoute().params
    const selectedOrganizer = organizers.filter(item => item.selected == true)

    useEffect(() => {
        setLoading(true)
        axios
            .get('/api/users')
            .then(res => {
                setOrganizers(res.data.users.filter((user) => {
                    return user.isOrganizer === true
                }).map((organizer) => {
                    return { ...organizer, selected: false }
                }))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    console.log(selectedOrganizer[0]?._id)

    const organizerHandler = (item) => {
        setOrganizers(organizers.map((organizer) => {
            if (organizer._id === item._id) {
                return {
                    ...organizer,
                    selected: true,
                }
            }
            return {
                ...organizer,
                selected: false,
            }
        }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>اختر منظم مناسبتك</Text>
                <Text style={styles.headerText2}>يمكنك الإطلاع على تفاصيل المنظم من خلال النقر عليه لعرض ملفه الشخصي واعتماده للإنتقال للخطوة الأخيرة.</Text>
            </View>
            {loading ? <View style={styles.loading}>
                <ActivityIndicator size="large" color={colors.primary.main} />
            </View> :
                <FlatList
                    data={organizers}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.package, item.selected && { backgroundColor: colors.primary.BG }]}
                            onPress={() => organizerHandler(item)}>
                            <Image source={require('../../../assets/images/slide.png')} style={styles.image} />
                            <Text style={styles.text}>{item.name}</Text>
                            <TouchableOpacity style={styles.icon}
                                onPress={() => { }}>
                                <Icon name='chevron-back' size={22} color={colors.gray[500]} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                />}
            <Button title='اعتماد المنظم'
                onPress={() => navigate('SubmitEventScreen', { eventData, items, organizer: selectedOrganizer[0]?._id })}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
        </View>
    )
}

export default OrganizersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        padding: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginLeft: 5,
        marginBottom: 5,
    },
    headerText2: {
        ...typography.XS.semibold,
        color: colors.gray[500],
        marginLeft: 5,
        marginBottom: 5,
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: -10,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    package: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: colors.gray[300],
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        backgroundColor: colors.common.white,
        width: '100%',
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        ...shadow,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.assist,
    },
    text: {
        ...typography.M.regular,
        color: colors.gray[500],
        flex: 1,
        textAlign: 'left',
        marginLeft: 16,
        lineHeight: 30,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 20,
        ...shadow,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
})