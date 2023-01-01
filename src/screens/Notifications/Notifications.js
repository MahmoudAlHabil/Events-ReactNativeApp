import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import NotificationItem from './NotificationItem/NotificationItem'
import { useNotificationsContext } from '../../context'


const Notifications = () => {
  const { notifications } = useNotificationsContext()

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false} />
    </View>
  )
}

export default Notifications