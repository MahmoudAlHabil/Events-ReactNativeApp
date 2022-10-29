import { View, Text, BackHandler, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '../../sharedComponents'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Swiper from 'react-native-swiper'
import { colors, icons } from '../../utils'
import { SvgXml } from 'react-native-svg'

const Home = () => {
  const { replace } = useNavigation()
  const [accessToken, setAccessToken] = React.useState(null)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((value) => {
      setAccessToken(value)
    })
  }, [])

  return (
    <View style={styles.container} >
    <SvgXml xml={icons.logo} style={styles.logo}/>
      <Text style={styles.welcomeText}>مرحبا بك، <Text style={styles.name}>محمود ماهر الهبيل</Text></Text>
      <View style={styles.wrapper}>
        <Swiper style={styles.swiper}
          activeDotColor={colors.primary.main}
          dotColor={colors.primary.light}
          showsPagination={false}
          // showsButtons={true} 
          // nextButton={<Text style={{color: colors.primary.main, fontSize: 50}}>‹</Text>} 
          // prevButton={<Text style={{color: colors.primary.main, fontSize: 50}}>›</Text>}
          autoplay={true}>
          <Image source={require('../../../assets/images/slide.png')} style={styles.slide} />
          <Image source={require('../../../assets/images/slide2.png')} style={styles.slide} />
          <Image source={require('../../../assets/images/slide3.png')} style={styles.slide} />
          <Image source={require('../../../assets/images/slide4.png')} style={styles.slide} />
          <Image source={require('../../../assets/images/slide5.png')} style={styles.slide} />
        </Swiper>
      </View>
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