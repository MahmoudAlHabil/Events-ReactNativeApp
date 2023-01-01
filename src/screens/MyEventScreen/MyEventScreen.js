import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import { useInterestsContext } from '../../context'
import { colors, shadow, typography } from '../../utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { convertDayToArabic, convertTypeEventToArabic, convetTimeToArabic, imageTypeEvent } from '../../utils/helperFunctions'
import moment from 'moment'
import axios from 'axios'

const MyEventScreen = () => {
    const { item } = useRoute().params
    const { name, type, owner, day, date, time, address, interestedUsers, maxParticipants, description,
        isPublic, status = 'accepted', image, items, organizer, eventPackage } = item
    const publicEvents = item
    const { interests, setInterests } = useInterestsContext()
    const isInterested = interests.includes(publicEvents)
    const statusName = status === 'accepted' ? 'تم قبول هذه المناسبة من قبل المنظم' : status === 'waiting' ? 'بانتظار الموافقة على هذه المناسبة من قبل المنظم' : 'تم رفض هذه المناسبة من قبل المنظم'
    const statusColor = status === 'accepted' ? colors.success.main : status === 'waiting' ? colors.warning.main : colors.danger.main
    const style = styles(isInterested)
    const [organizerName, setOrganizerName] = useState('')

    const IconWithText = ({ iconName, text }) => {
        return (
            <View style={style.horizontalView}>
                <Ionicons name={iconName} size={16} />
                <Text style={style.text}>{text}</Text>
            </View>
        )
    }

    useEffect(() => {
        axios.get(`/api/users/${eventPackage?.organizer}`).then((res) => res.data?.name).then((name) => setOrganizerName(name))
            .catch((err) => console.log(err))
    }, [organizerName])

    return (
        <ScrollView style={style.outerContainer}>
            <View style={style.container}>
                <View style={style.imageWrapper}>
                    <Image source={image !== 'imageSrc' ? { uri: image } : imageTypeEvent(type || 'other')} style={style.image} />
                </View>
                <Text style={style.name}>{name}</Text>
                <View style={[style.status, { backgroundColor: statusColor }]}>
                    <Text style={style.statusTitle}>{statusName || 'بانتظار الموافقة من قبل المنظم'}</Text>
                </View>

                <IconWithText iconName={'calendar'} text={`${convertDayToArabic(moment(date).format('dddd'))}،${convetTimeToArabic(moment(date).subtract(2, 'h').format(' YYYY-MM-DD الساعة hh:mm A'))}`} />
                <IconWithText iconName={'location'} text={address} />
                <IconWithText iconName={'grid'} text={convertTypeEventToArabic(type)} />
                <IconWithText iconName={'business'} text={'منظم الحفل: ' + (organizer?.name || organizerName)} />
                <IconWithText iconName={'earth'} text={isPublic ? 'مناسبة عامة' : 'مناسبة خاصة'} />
                {isPublic && <IconWithText iconName={'ios-checkbox'} text={`أشخاص مهتمون: ${interestedUsers.length}`} />}
                <Text style={style.descriptionText}>الوصف</Text>
                <Text style={style.description}>{description}</Text>
                {items.length > 0 && <View>
                    <Text style={style.itemsText}>العناصر التي قمت باختيارها:</Text>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <View style={style.item}>
                                <Image
                                    source={{ uri: item.item.image }}
                                    style={style.itemImage}
                                />
                                <View style={style.textItemWrapper}>
                                    <Text style={style.itemTitle}>{item.item.name}</Text>
                                    <Text style={style.itemDescription}>{item.item.description}</Text>
                                    <Text style={style.itemPrice}>{item.item.price} شيكل</Text>
                                </View>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id.toString()}
                    />
                </View>}
            </View>
        </ScrollView>
    )
}

export default MyEventScreen

const styles = (isInterested) => StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: colors.common.white,
    },
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
    status: {
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
        marginTop: 5,
        marginBottom: 10,
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
    itemsText: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginTop: 16,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.common.white,
        width: '100%',
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'cover',
    },
    textItemWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    itemTitle: {
        ...typography.M.medium,
        color: colors.primary.main,
    },
    itemDescription: {
        ...typography.S.regular,
        color: colors.common.black,
    },
    itemPrice: {
        ...typography.S.regular,
        color: colors.primary.main,
    },
})