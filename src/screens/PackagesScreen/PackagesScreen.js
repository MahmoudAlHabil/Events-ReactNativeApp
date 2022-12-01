import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, shadow, typography } from '../../utils'
import { useBackHandler } from '@react-native-community/hooks'
import { useAppSettingsContext } from '../../context'

const PackagesScreen = () => {
    const { goBack, canGoBack, navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()

    const goBackHandler = () => {
        goBack()
        appSettings.setVisibleTabBottom(false, 'createEvent')
    }

    useBackHandler(() => {
        if (canGoBack()) {
            goBackHandler()
            return true
        }
        return false
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>اختر الحزمة المناسبة أو قم بتخصيص حزمة تناسبك</Text>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.package}
                        onPress={() => navigate('PackageDetalisScreen')}>
                        <Text style={styles.packageTitle}>باقة البداية</Text>
                        <Text style={styles.packageDescription}>باقة البداية تحتوي على 10 مناسبات</Text>
                        <Text style={styles.packagePrice}>100 ريال</Text>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.toString()}
                numColumns={2}
            />
            <Button title='تخصيص حزمة' onPress={() => navigate('CustomPackageScreen')}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
        </View>
    )
}

export default PackagesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    headerText: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginLeft: 5,
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
        width: '47.7%',
        height: 200,
        margin: 5,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    packageTitle: {
        ...typography.M.medium,
        color: colors.primary.main,
        textAlign: 'center',
    },
})