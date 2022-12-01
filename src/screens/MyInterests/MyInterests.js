import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { useInterestsContext } from '../../context'
import { PublicEventItem } from '../../components'

const MyInterests = () => {
    const { interests } = useInterestsContext()

    return (
        <View style={styles.container}>
            {interests.length > 0 ?
                <FlatList
                    data={interests}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item }) => <PublicEventItem item={item} />}
                    contentContainerStyle={styles.flatList}
                    showsVerticalScrollIndicator={false} />
                : <View style={styles.noInterestsContainer}>
                    <Text style={styles.noInterestsText}>لا توجد مناسبات تهمك لعرضها</Text>
                </View>
            }
        </View>
    )
}

export default MyInterests