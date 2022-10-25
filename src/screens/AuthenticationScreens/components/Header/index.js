import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, subTitle, actionText, actionNavigation, highlightText, subTitle2 }) => {
    return (
        <View>
            {actionText &&
                <TouchableOpacity style={styles.action} onPress={actionNavigation} >
                    <Icon name='chevron-forward' size={22} style={{padding: 0}}/>
                    <Text style={styles.actionText}>{actionText}</Text>
                </TouchableOpacity>}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}
            {highlightText && <Text style={styles.highlightText}>{highlightText}</Text>}
            {subTitle2 && <Text style={styles.subTitle}>{subTitle2}</Text>}
            </Text>
        </View>
    )
}

export default Header