import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils'

const NumberEvents = ({ status, data }) => {
    const style = styles(status)

    return (
        <View style={style.container}>
            <Text style={style.number}>{data.filter(item => item.status === status).length}</Text>
        </View>
    )
}

export default NumberEvents

const styles = (status) => StyleSheet.create({
    container: {
        backgroundColor: status === 'accepted' ? colors.success.main : status === 'pending' ? colors.warning.main : colors.danger.main,
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    number: {
        ...typography.S.semibold,
        color: colors.common.white,
        lineHeight: 28,
    },
})