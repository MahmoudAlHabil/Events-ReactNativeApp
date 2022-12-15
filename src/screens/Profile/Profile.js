import { View, Text, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import ButtonProfile from './components/ButtonProfile/ButtonProfile'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAccessToken } from '../../API/axiosConfig'
import { useUserInfoContext } from '../../context'

const Profile = () => {
  const { navigate, replace } = useNavigation()
  const { userInfo } = useUserInfoContext()

  const logoutHandler = () => {
    AsyncStorage.removeItem('accessToken')
    replace('AuthStack')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../../assets/images/person.png')} />
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.phone}>{userInfo.email}</Text>
      </View>
      <ButtonProfile title='تعديل الملف الشخصي' iconName='person-outline'
        action={() => navigate('UpdateProfileScreen')} style={styles.headerList} isNavigateIcon />
      <ButtonProfile title='تقييم التطبيق' iconName='star-outline'
        action={() => { }} style={styles.item} isNavigateIcon />
      <ButtonProfile title='الدعم والمساعدة' iconName='alert-circle-outline'
        action={() => Linking.openURL('mailto:eng.mahmoudalhabil@gmail.com')} style={styles.footerList} isNavigateIcon />
      <ButtonProfile title='تسجيل الخروج' iconName='ios-log-out-outline'
        action={logoutHandler} style={styles.logout} />
    </View>
  )
}

export default Profile