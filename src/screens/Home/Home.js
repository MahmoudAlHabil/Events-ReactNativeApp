import { View, Text, Image, FlatList, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useAppSettingsContext, useInterestsContext, useNotificationsContext, useUserInfoContext } from "../../context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'
import { colors, icons } from '../../utils'
import { PublicEventItem } from '../../components'
import MainSectionItem from './components/MainSectionItem'
import { useAllEventsContext } from '../../context'
import axios from 'axios'
import { SvgXml } from 'react-native-svg'

const Home = () => {
  const { navigate } = useNavigation()
  const { allEvents, setAllEvents } = useAllEventsContext()
  const [loading, setLoading] = useState()
  const [offers, setOffers] = useState([
    { "image": "https://b.top4top.io/p_2534s8syi1.png" },
    { "image": "https://k.top4top.io/p_2550lrywe1.png" },
    { "image": "https://i.top4top.io/p_25415s9kk1.png" }])
  const { notifications, dispatchNotifications } = useNotificationsContext()
  const { userInfo } = useUserInfoContext()
  const { appSettings } = useAppSettingsContext()
  const { setInterests } = useInterestsContext()
  const numberUnreadNotifications = notifications.filter(notification => notification?.isTouched === false).length

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/events?filter=public')
      .then((res) => {
        setAllEvents(res.data.events) //.reverse()
        axios
          .get(`/api/notifications/user/${userInfo._id}`)
          .then((res) => {
            dispatchNotifications({ type: "SET_NOTIFICATIONS", payload: res.data.notifications }) //.reverse()
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
    axios
      .get(`/api/events/user/${userInfo._id}/Interested`)
      .then((res) => {
        setInterests(res.data.events)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(userInfo._id)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/packages?category=offers')
      .then((res) => {
        setOffers(res.data.packages)
      })
      .catch((err) => {
        setOffers([])
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  // console.log(offers[2])

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <View style={styles.headerRight} >
          <SvgXml xml={icons.logo} />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.headerLeft} onPress={() => navigate('Notifications')}>
          <Ionicons name={'notifications-outline'} size={25}
            color={colors.primary.main}
          />
          {numberUnreadNotifications > 0 && <View style={styles.badge} >
            <Text style={styles.badgeText} >{numberUnreadNotifications}</Text>
          </View>}
        </TouchableOpacity>

      </View>
      <View style={styles.horizontalLine}>
      </View>

      <StatusBar backgroundColor={colors.common.white} barStyle="dark-content" />
      <View>
        <Text style={styles.welcomeText}>مرحبا بك، <Text style={styles.name}>محمود ماهر الهبيل</Text></Text>
        <View style={styles.wrapper}>
          <Swiper style={styles.swiper}
            activeDotColor={colors.primary.main}
            dotColor={colors.primary.light}
            showsPagination={true}
            paginationStyle={styles.dot}
            autoplay={true}>
            <TouchableOpacity onPress={() => {
              appSettings.setVisibleTabBottom(false, 'createEvent')
              navigate('PackageDetalisScreen', { item: offers[0] })
            }}>
              <Image source={offers[0]["image"] != undefined ? { uri: offers[0]["image"] } : require('../../../assets/images/slide2.png')} style={styles.slide} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              appSettings.setVisibleTabBottom(false, 'createEvent')
              navigate('PackageDetalisScreen', { item: offers[1] })
            }}>
              <Image source={offers[1]["image"] != undefined ? { uri: offers[1]["image"] } : require('../../../assets/images/slide.png')} style={styles.slide} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              appSettings.setVisibleTabBottom(false, 'createEvent')
              navigate('PackageDetalisScreen', { item: offers[2] })
            }}>
              <Image source={offers[2]["image"] != undefined ? { uri: offers[2]["image"] } : require('../../../assets/images/slide3.png')} style={styles.slide} />
            </TouchableOpacity>
          </Swiper>
        </View>
        <View style={styles.horizontalLine} />
        <Text style={styles.publicEventText}>أنشئ المناسبة الخاصة بك الآن</Text>
        <MainSectionItem />
        <View style={styles.horizontalLine} />
        <View style={styles.publicEventTextWrapper}>
          <Text style={styles.publicEventText}>المناسبات القادمة</Text>
          <TouchableOpacity onPress={() => navigate('PublicEventsScreen')}>
            <Text style={styles.seeAllText}>عرض الكل</Text>
          </TouchableOpacity>
        </View>
        {!loading ?
          <FlatList
            data={allEvents.slice(0, 3)}
            renderItem={({ item }) => <PublicEventItem item={item} horizontal />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          :
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.primary.main} />
          </View>
        }
      </View>
    </View>
  )
}

export default Home

// <Image source={require('../../../assets/images/slide2.png')} style={styles.slide} />
// <Image source={require('../../../assets/images/slide.png')} style={styles.slide} />
// <Image source={require('../../../assets/images/slide3.png')} style={styles.slide} />