import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../../utils';

const ButtonProfile = ({ iconName = 'apps-outline', title, action, style, isNavigateIcon }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={action} activeOpacity={0.7}>
      <View style={styles.icon}>
        <Icon name={iconName} size={22} color={colors.primary.main}/>
      </View>
      <Text style={styles.text}>{title || 'ButtonProfile'}</Text>
      {isNavigateIcon && <Icon name='chevron-back' size={22} color={colors.gray[500]}/>}
    </TouchableOpacity>
  )
}

export default ButtonProfile