import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const EventItem = ({ item }) => {
    const { navigate } = useNavigation()
    const { name, type, date, time, location, maxParticipants, public: isPublic, status } = item
    const statusName = status === 'accepted' ? 'مقبول' : status === 'pending' ? 'قيد الانتظار' : 'مرفوض'
    const statusColor = status === 'accepted' ? colors.success.main : status === 'pending' ? colors.warning.main : colors.danger.main

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
            onPress={() => navigate('MyEventScreen', {item})}>
            <View style={[styles.status, { backgroundColor: statusColor }]}>
                <Text style={styles.title}>{statusName || 'بانتظار الموافقة'}</Text>
            </View>
            {status == 'pending' && <TouchableOpacity activeOpacity={0.7} style={styles.edit}>
                <MaterialCommunityIcons name="square-edit-outline" size={30} color={colors.primary.main} />
            </TouchableOpacity>}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
            <View style={styles.footer}>
                <Text style={styles.type}>{isPublic ? 'مناسبة عامة' : 'مناسبة خاصة'}</Text>
                <Text style={styles.date}>{date}     {time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EventItem

const styles = StyleSheet.create({
    container: {
        height: 110,
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 12,
        backgroundColor: colors.common.white,
        padding: 10,
        marginBottom: 10,
        overflow: 'visible',
    },
    status: {
        width: 100,
        height: 25,
        marginLeft: -11,
        marginTop: -11,
        backgroundColor: colors.warning.main,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 12,
    },
    title: {
        ...typography.XS.regular,
        color: colors.common.white,
        lineHeight: 21,
    },
    edit: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    name: {
        ...typography.S.semibold,
        color: colors.gray[500],
        lineHeight: 24,
        marginTop: 10,
    },
    location: {
        ...typography.S.regular,
        color: colors.gray[500],
        lineHeight: 24,
    },
    date: {
        ...typography.XS.regular,
        color: colors.gray[500],
        lineHeight: 24,
    },
    type: {
        ...typography.XS.semibold,
        color: colors.gray[500],
        lineHeight: 24,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})