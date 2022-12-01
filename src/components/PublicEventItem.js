import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, typography } from '../utils'
import { Button } from '.'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useInterestsContext } from '../context'
import { useNavigation } from '@react-navigation/native'

const PublicEventItem = ({ item, horizontal }) => {
    const { name, type, owner, day, date, time, location, interestedPeople, maxParticipants,
        public: isPublic, status, image } = item
    const { navigate } = useNavigation()
    const publicEvents = item
    const { interests, setInterests } = useInterestsContext()
    const isInterested = interests.includes(publicEvents)
    const style = styles(isInterested, horizontal)

    const interestHandler = () => {
        if (!isInterested) {
            setInterests([...interests, item]);
        }
        else {
            const newInterests = interests.filter(item => item.id !== publicEvents.id);
            setInterests(newInterests);
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.9} style={style.container}
            onPress={() => {
                navigate('PublicEventScreen', { item })
            }}>
            <Image source={require('../../assets/images/uni.jpg')} style={style.image} />
            <View style={style.infoContainer}>
                <Text style={style.date}>{day}، {date} الساعة {time} ص</Text>
                <Text style={style.name}>{name}</Text>
                <Text style={style.owner}>{owner}</Text>
                <Text style={style.interestedPeople}>أشخاص مهتمون: {interestedPeople}</Text>
                <View style={style.buttonContainer}>
                    <Button
                        title="مهتم"
                        buttonStyle={style.button}
                        titleStyle={style.buttonText}
                        onPress={interestHandler}
                        icon={<AntDesign name="star" size={16}
                            color={isInterested ? colors.primary.main : colors.common.black} />}
                    />
                    <Button
                        buttonStyle={[style.button, style.shareButton]}
                        icon={<Entypo name="share" size={16} color={colors.common.black} />}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PublicEventItem

const styles = (isInterested, horizontal) => StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 12,
        backgroundColor: colors.common.white,
        overflow: 'visible',
        marginEnd: 12,
        marginBottom: 12,
        width: horizontal ? 300 : '100%',
    },
    image: {
        width: '100.5%',
        height: horizontal ? 100 : 150,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: -1,
        marginLeft: -1,
    },
    infoContainer: {
        padding: 10,
    },
    date: {
        ...typography.XS.regular,
        color: colors.gray[700],
        lineHeight: 24,
        marginBottom: horizontal ? -12 : -8,
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
    interestedPeople: {
        ...typography.XS.regular,
        color: colors.gray[500],
        lineHeight: 24,
        marginBottom: -8,
        marginTop: horizontal ? -6 : -2,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: horizontal ? 30 : 35,
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
})