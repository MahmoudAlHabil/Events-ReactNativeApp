import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { HeaderScreen } from '../../../../sharedComponents';

const Header = ({ title, subTitle, actionText, actionNavigation, highlightText, subTitle2 }) => {
    return (
        <View>
            {actionText && <HeaderScreen actionNavigation={actionNavigation} actionText={actionText}/>}
            <Text style={[styles.title, actionText && styles.titleWithAction]}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}
            {highlightText && <Text style={styles.highlightText}>{highlightText}</Text>}
            {subTitle2 && <Text style={styles.subTitle}>{subTitle2}</Text>}
            </Text>
        </View>
    )
}

export default Header