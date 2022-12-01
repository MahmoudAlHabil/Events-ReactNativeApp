import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'

const OrganizersScreen = () => {
    const { navigate, goBack } = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.package}
                    onPress={() => navigate('OrganizerProfileScreen')}>
                        <Text style={styles.packageTitle}>باقة البداية</Text>
                        <Text style={styles.packageDescription}>باقة البداية تحتوي على 10 مناسبات</Text>
                        <Text style={styles.packagePrice}>100 ريال</Text>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.toString()}
            />
        </View>
    )
}

export default OrganizersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        padding: 20,
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: -10,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    package: {
        backgroundColor: colors.common.white,
        width: '100%',
        height: 75,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    packageTitle: {
        ...typography.M.medium,
        color: colors.primary.main,
    },
})