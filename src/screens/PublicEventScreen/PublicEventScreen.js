import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Button, PublicEventItem } from '../../components'
import { useInterestsContext } from '../../context'
import { colors, shadow, typography } from '../../utils'
import { eventData } from '../Home/Home'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PublicEventScreen = () => {
    const { navigate } = useNavigation()
    const { item } = useRoute().params
    const { name, type, owner, day, date, time, location, interestedPeople, maxParticipants,
        public: isPublic, status, image } = item
    const publicEvents = item
    const { interests, setInterests } = useInterestsContext()
    const isInterested = interests.includes(publicEvents)
    const style = styles(isInterested)

    const IconWithText = ({ iconName, text }) => {
        return (
            <View style={style.horizontalView}>
                <Ionicons name={iconName} size={16} />
                <Text style={style.text}>{text}</Text>
            </View>
        )
    }

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
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <View style={style.imageWrapper}>
                    <Image source={require('../../../assets/images/slide.png')} style={styles.image} />
                </View>

                <View>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.owner}>مناسبة عامة بواسطة {owner}</Text>
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
                    <IconWithText iconName={'calendar'} text={`${day}، ${date} الساعة ${time} ص`} />
                    <IconWithText iconName={'location'} text={location} />
                    <IconWithText iconName={'ios-checkbox'} text={`أشخاص مهتمون: ${interestedPeople}`} />
                    
                    <Text style={style.descriptionText}>الوصف</Text>
                    <Text style={style.description}>ناسبة عامة بواسط ناسبة عامة بواسط ناسبة عامة بواسط ناسبة عامة بواسط ناسبة عامة بواسط</Text>
                    
                    <View style={styles.horizontalLine} />
                </View>
                <View style={style.publicEventTextWrapper}>
                    <Text style={style.publicEventText}>المناسبات المقترحة</Text>
                    <TouchableOpacity onPress={() => navigate('PublicEventsScreen')}>
                        <Text style={style.seeAllText}>عرض الكل</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={eventData}
                    renderItem={({ item }) => <PublicEventItem item={item} horizontal />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}

export default PublicEventScreen

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