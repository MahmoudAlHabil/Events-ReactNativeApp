import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useInterestsContext, useUserInfoContext } from '../../context'
import { PublicEventItem } from '../../components'
import axios from 'axios'
import { colors } from '../../utils'

const MyInterests = () => {
    const { interests, setInterests } = useInterestsContext()
    const [loading, setLoading] = useState()
    const { userInfo } = useUserInfoContext()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/api/events/user/${userInfo._id}/Interested`)
            .then((res) => {
                setInterests(res.data.events)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            {!loading ?
                interests.length > 0 ?
                    <FlatList
                        data={interests}
                        keyExtractor={(item, index) => (index.toString())}
                        renderItem={({ item }) => <PublicEventItem item={item} />}
                        contentContainerStyle={styles.flatList}
                        showsVerticalScrollIndicator={false} />
                    : <View style={styles.noInterestsContainer}>
                        <Text style={styles.noInterestsText}>لا توجد مناسبات تهمك لعرضها</Text>
                    </View>
                :
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={colors.primary.main} />
                </View>
            }
        </View>
    )
}

export default MyInterests