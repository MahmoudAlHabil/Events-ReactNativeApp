import { Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../../../utils';

const SocialLogin = ({ socialImage }) => {
  return (
    <TouchableOpacity style={styles.social}>
      <SvgXml xml={socialImage} />
    </TouchableOpacity>
  )
}

const Footer = ({ headerText, questionText, actionText, navigation, footerStyle }) => {
  return (
    <View style={[styles.footer, footerStyle]}>
      {/** 
    <View style={styles.headerText}>
        <View style={styles.smallLine} />
        <Text style={styles.loginText}>{headerText}</Text>
        <View style={styles.smallLine} />
      </View>
      <View style={styles.socialLogin}>
        <SocialLogin socialImage={icons.social.apple} />
        <SocialLogin socialImage={icons.social.google} />
        <SocialLogin socialImage={icons.social.facebook} />
      </View>
    */}
      <View style={styles.footerText} >
        <Text style={styles.questionText}>{questionText} </Text>
        <TouchableOpacity onPress={navigation}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer