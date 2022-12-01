import { View, Text } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import styles from './styles'

const MessageInformation = ({icon, message}) => {
    return (
        <View style={styles.container}>
            {icon && <SvgXml xml={icon} />}
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

export default MessageInformation