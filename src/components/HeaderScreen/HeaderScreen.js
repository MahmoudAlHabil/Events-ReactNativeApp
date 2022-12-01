import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const HeaderScreen = ({ actionNavigation, actionText }) => {
    return (
        <TouchableOpacity style={styles.action} onPress={actionNavigation} >
            <Text style={styles.arrow}>›</Text>
            <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
    )
}

export default HeaderScreen