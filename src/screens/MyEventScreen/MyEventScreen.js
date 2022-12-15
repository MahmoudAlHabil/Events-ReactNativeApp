import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useInterestsContext } from '../../context'
import { colors, shadow, typography } from '../../utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyEventScreen = () => {
    const { navigate } = useNavigation()
    const { item } = useRoute().params
    const { name, type, owner, day, date, time, address, interestedPeople, maxParticipants, description,
        public: isPublic, status = 'accepted', image } = item
    const publicEvents = item
    const { interests, setInterests } = useInterestsContext()
    const isInterested = interests.includes(publicEvents)
    const statusName = status === 'accepted' ? 'مقبول' : status === 'pending' ? 'قيد الانتظار' : 'مرفوض'
    const statusColor = status === 'accepted' ? colors.success.main : status === 'pending' ? colors.warning.main : colors.danger.main
    const style = styles(isInterested)

    const IconWithText = ({ iconName, text }) => {
        return (
            <View style={style.horizontalView}>
                <Ionicons name={iconName} size={16} />
                <Text style={style.text}>{text}</Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <View style={style.imageWrapper}>
                <Image source={image !== 'imageSrc' ? { uri: image } : require('../../../assets/images/placeholder.png')} style={style.image} />
            </View>
            <View>
                {status == 'pending' && <TouchableOpacity activeOpacity={0.7} style={style.edit}>
                    <MaterialCommunityIcons name="square-edit-outline" size={22} color={colors.primary.main} />
                    <Text style={style.editText}>تعديل</Text>
                </TouchableOpacity>}
                <Text style={style.name}>{name}</Text>
                <View style={[style.status, { backgroundColor: statusColor }]}>
                    <Text style={style.statusTitle}>{statusName || 'بانتظار الموافقة'}</Text>
                </View>

                <IconWithText iconName={'calendar'} text={`${day}، ${date} الساعة ${time} ص`} />
                <IconWithText iconName={'location'} text={address} />
                <IconWithText iconName={'grid'} text={type} />
                <IconWithText iconName={'earth'} text={isPublic ? 'مناسبة عامة' : 'مناسبة خاصة'} />
                {isPublic && <IconWithText iconName={'ios-checkbox'} text={`أشخاص مهتمون: ${interestedPeople}`} />}

                <Text style={style.descriptionText}>الوصف</Text>
                <Text style={style.description}>{description}</Text>

                <View style={styles.horizontalLine} />
            </View>
        </View>
    )
}

export default MyEventScreen

const styles = (isInterested) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingBottom: 60,
    },
    imageWrapper: {
        height: 170,
        backgroundColor: colors.common.white,
        overflow: "hidden",
        ...shadow,
        elevation: 2,
        marginHorizontal: -20,
        marginTop: -20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    edit: {
        position: 'absolute',
        top: 10,
        right: 0,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 109, 40, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 6,
        width: 100,
    },
    editText: {
        ...typography.S.medium,
        color: colors.gray[900],
        lineHeight: 30,
        marginLeft: 6,
    },
    status: {
        width: 80,
        height: 25,
        backgroundColor: colors.warning.main,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    statusTitle: {
        ...typography.XS.regular,
        color: colors.common.white,
        lineHeight: 21,
    },
    horizontalView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        ...typography.XS.regular,
        color: colors.gray[700],
        lineHeight: 21,
        marginLeft: 8,
        marginBottom: -8,
    },
    horizontalLine: {
        borderBottomColor: colors.gray[300],
        borderBottomWidth: 0.5,
        marginHorizontal: -20,
        marginTop: 15,
        marginBottom: -10,
    },
    publicEventText: {
        ...typography.S.semibold,
        color: colors.gray[700],
        marginTop: 26,
        marginBottom: 8,
    },
    publicEventTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    seeAllText: {
        ...typography.XS.regular,
        color: '#ff7e42',
        marginTop: 14,
    },
    name: {
        ...typography.S.semibold,
        color: colors.gray[900],
        lineHeight: 24,
        marginTop: 10,
    },
    owner: {
        ...typography.S.regular,
        color: colors.gray[500],
        lineHeight: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    button: {
        flex: 1,
        height: 35,
        backgroundColor: isInterested ? colors.primary.light : colors.gray[200],
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        ...typography.XS.regular,
        color: isInterested ? colors.primary.main : colors.common.black,
        lineHeight: 24,
        marginTop: -2,
        marginLeft: 6,
    },
    shareButton: {
        flex: 0.2,
        marginLeft: 10,
        backgroundColor: colors.gray[200],
    },
    descriptionText: {
        ...typography.S.semibold,
        color: colors.gray[900],
        lineHeight: 24,
        marginTop: 14,
    },
    description: {
        ...typography.XS.regular,
        color: colors.gray[700],
        lineHeight: 21,
    },
})