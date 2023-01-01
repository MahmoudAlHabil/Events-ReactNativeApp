import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import EventItem from './components/EventItem'
import { colors } from '../../utils'
import NumberEvents from './components/NumberEvents'
import axios from 'axios'
import { useUserInfoContext } from '../../context'

const MyEventsData = [
  {
    id: 1,
    name: 'عيد ميلاد أحمد',
    type: 'نوع 1',
    date: '28/10/2022',
    time: '15:30',
    location: 'غزة - شارع الثورة - عمارة الامراء - الطابق الرابع',
    maxParticipants: 10,
    public: true,
    status: 'pending',
  },
  {
    id: 2,
    name: 'مناسبة 2',
    type: 'نوع 2',
    date: '28/10/2022',
    time: '15:30',
    location: 'مكان 2',
    maxParticipants: 10,
    public: false,
    status: 'accepted',
  },
  {
    id: 3,
    name: 'مناسبة 3',
    type: 'نوع 3',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 3',
    maxParticipants: 10,
    public: false,
    status: 'rejected',
  },
  {
    id: 4,
    name: 'مناسبة 4',
    type: 'نوع 4',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 4',
    maxParticipants: 10,
    public: true,
    status: 'pending',
  },
  {
    id: 5,
    name: 'مناسبة 5',
    type: 'نوع 5',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 5',
    maxParticipants: 10,
    public: false,
    status: 'accepted',
  },
  {
    id: 6,
    name: 'مناسبة 6',
    type: 'نوع 6',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 6',
    maxParticipants: 10,
    public: false,
    status: 'rejected',
  },
  {
    id: 7,
    name: 'مناسبة 7',
    type: 'نوع 7',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 7',
    maxParticipants: 10,
    public: true,
    status: 'pending',
  },
  {
    id: 8,
    name: 'مناسبة 8',
    type: 'نوع 8',
    date: '28/10/2022',
    time: '12:00',
    location: 'مكان 8',
    maxParticipants: 10,
    public: false,
    status: 'accepted',
  },
]

const MyEvents = () => {
  const { userInfo } = useUserInfoContext()
  const [events, setEvents] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    axios.get(`/api/events/user/${userInfo.id}`)
      .then(res => {
        setEvents(res.data.events) //.reverse()
      })
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      {!loading ?
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>إجمالي المناسبات:
              <Text style={styles.totalNumber}> {events.length} </Text>
            </Text>
            <View style={styles.numberEvents}>
              <NumberEvents data={events} status='rejected' />
              <NumberEvents data={events} status='waiting' />
              <NumberEvents data={events} status='accepted' />
            </View>
          </View>
          <FlatList data={events}
            renderItem={({ item }) => <EventItem item={item} />}
            keyExtractor={(item) => item._id.toString()}
            showsVerticalScrollIndicator={false} />
        </View>
        : <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary.main} />
        </View>}
    </View>
  )
}

export default MyEvents