import { View, Text, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import ButtonProfile from './components/ButtonProfile/ButtonProfile'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAccessToken } from '../../API/axiosConfig'

const Profile = () => {
  const { navigate, replace } = useNavigation()

  const logoutHandler = () => {
    replace('AuthStack')
    axios({
      method: 'POST',
      url: 'logout',
    })
      .then((response) => {
        console.log(response.data)
        AsyncStorage.removeItem('accessToken')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../../assets/images/Photograph.jpg')} />
        <Text style={styles.name}>محمود ماهر الهبيل</Text>
        <Text style={styles.phone}>0592773664</Text>
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