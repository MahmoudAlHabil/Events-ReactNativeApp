import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { PublicEventItem } from '../../components'
import { colors, typography } from '../../utils'
import { useInterestsContext } from '../../context'
import { eventData } from '../Home/Home'

const PublicEventsScreen = () => {

    return (
        <View style={styles.container}>
            {eventData.length > 0 ?
                <FlatList
                    data={eventData}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item }) => <PublicEventItem item={item} />}
                    contentContainerStyle={styles.flatList}
                    showsVerticalScrollIndicator={false} />
                : <View style={styles.noInterestsContainer}>
                    <Text style={styles.noInterestsText}>لا توجد مناسبات عامة لعرضها</Text>
                </View>
            }
        </View>
    )
}

export default PublicEventsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    noInterestsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInterestsText: {
        ...typography.M.regular,
        color: colors.gray[500],
    },
    flatList: {
        marginTop: 20,
        paddingBottom: 75,
    },
})