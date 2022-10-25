import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '../../sharedComponents'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Home = () => {
  const { navigate, replace } = useNavigation()
  const [accessToken, setAccessToken] = React.useState(null)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((value) => {
      setAccessToken(value)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{accessToken}</Text>
      <Button
        title="تسجيل الخروج"
        onPress={() => {
          axios({
            method: 'POST',
            url: 'logout',
          })
            .then((response) => {
              console.log(response.data)
              AsyncStorage.removeItem('accessToken')
              setAccessToken(null)
              replace('AuthStack')
            })
            .catch((error) => {
              console.log(error)
            })
        }}
      />
    </View>
  )
}

export default Home