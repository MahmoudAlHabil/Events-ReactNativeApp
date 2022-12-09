import { View, Text, Image, FlatList, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'
import { colors, icons } from '../../utils'
import { PublicEventItem } from '../../components'
import MainSectionItem from './components/MainSectionItem'
import { useAllEventsContext } from '../../context'
import axios from 'axios'

export const eventData = [
  {
    id: 1,
    name: 'حفل تكريم الطلاب الخريجين للعام الدراسي 2021-2022',
    owner: 'كلية الهندسة - جامعة فلسطين',
    type: 'مناسبة عامة',
    day: 'السبت',
    date: '05/11/2022',
    time: '10:00',
    location: 'القرية السياحية',
    maxParticipants: 100,
    interestedPeople: 52,
    public: true,
    status: 'accepted',
    image: '',
    isInterested: true,
  },
  {
    id: 2,
    name: 'حفل تكريم الطلاب الخريجين للعام الدراسي 2021-2022',
    owner: 'كلية الهندسة - جامعة فلسطين',
    type: 'مناسبة عامة',
    day: 'السبت',
    date: '05/11/2022',
    time: '10:00',
    location: 'القرية السياحية',
    maxParticipants: 100,
    interestedPeople: 52,
    public: true,
    status: 'accepted',
    image: '',
    isInterested: true,
  },
  {
    id: 3,
    name: 'حفل تكريم الطلاب الخريجين للعام الدراسي 2021-2022',
    owner: 'كلية الهندسة - جامعة فلسطين',
    type: 'مناسبة عامة',
    day: 'السبت',
    date: '05/11/2022',
    time: '10:00',
    location: 'القرية السياحية',
    maxParticipants: 100,
    interestedPeople: 52,
    public: true,
    status: 'accepted',
    image: '',
    isInterested: true,
  },
  {
    id: 4,
    name: 'حفل تكريم الطلاب الخريجين للعام الدراسي 2021-2022',
    owner: 'كلية الهندسة - جامعة فلسطين',
    type: 'مناسبة عامة',
    day: 'السبت',
    date: '05/11/2022',
    time: '10:00',
    location: 'القرية السياحية',
    maxParticipants: 100,
    interestedPeople: 52,
    public: true,
    status: 'accepted',
    image: '',
    isInterested: true,
  },
  {
    id: 5,
    name: 'حفل تكريم الطلاب الخريجين للعام الدراسي 2021-2022',
    owner: 'كلية الهندسة - جامعة فلسطين',
    type: 'مناسبة عامة',
    day: 'السبت',
    date: '05/11/2022',
    time: '10:00',
    location: 'القرية السياحية',
    maxParticipants: 100,
    interestedPeople: 52,
    public: true,
    status: 'accepted',
    image: '',
    isInterested: true,
  },
]

const Home = () => {
  const { navigate } = useNavigation()
  const { allEvents, setAllEvents } = useAllEventsContext()
  const [loading, setLoading] = useState()
  const headerList = (<FlatList
    data={eventData}
    ListHeaderComponent={headerList}
    renderItem={({ item }) => <PublicEventItem item={item} />}
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
  />)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/events')
      .then((res) => {
        setAllEvents(res.data.events)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container} >
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
            <Image source={require('../../../assets/images/slide.png')} style={styles.slide} />
            <Image source={require('../../../assets/images/slide2.png')} style={styles.slide} />
            <Image source={require('../../../assets/images/slide3.png')} style={styles.slide} />
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