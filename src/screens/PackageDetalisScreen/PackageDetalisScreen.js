import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'
import { useAppSettingsContext } from '../../context'
import { useBackHandler } from '@react-native-community/hooks'

const PackageDetalisScreen = () => {
    const { navigate, goBack, canGoBack } = useNavigation()
    const { item: packageData, type } = useRoute().params
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
                <Text style={[styles.packageName, { ...typography.M.semibold }]}>{packageData.name}</Text>
                <Text style={styles.packageDescription}>{packageData.description}</Text>
                <Text style={styles.packageOragnizerName}>المنظم: {packageData.organizer.name}</Text>
                <Text style={styles.packagePrice}>سعر الحزمة: {packageData.price} شيكل</Text>
                <Text style={styles.packageTextContent}>محتوى الحزمة التي قمت بإختيارها:</Text>
            </View>
            <FlatList
                data={packageData.items}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image
                            source={{ uri: item.item.image }}
                            style={styles.itemImage}
                        />
                        <View style={styles.textItemWrapper}>
                            <Text style={styles.itemTitle}>{item.item.name}</Text>
                            <Text style={styles.itemDescription}>{item.item.description}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item._id.toString()}
            />
            <Button title='اعتماد الحزمة' onPress={() => navigate('SubmitEventScreen', { type: type || packageData.category, eventPackage: packageData._id })}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
        </View>
    )
}

export default PackageDetalisScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        padding: 20,
    },
    header: {
    },
    packageName: {
        color: colors.primary.main,
    },
    packageDescription: {
        ...typography.S.regular,
        marginTop: 6,
    },
    packageOragnizerName: {
        ...typography.S.regular,
        color: colors.primary.main,
        marginTop: 6,
    },
    packagePrice: {
        ...typography.S.regular,
        color: colors.primary.main,
        marginTop: 6,
    },
    packageTextContent: {
        ...typography.S.regular,
        color: colors.common.black,
        marginTop: 10,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.common.white,
        width: '100%',
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'cover',
    },
    textItemWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    itemTitle: {
        ...typography.M.medium,
        color: colors.primary.main,
    },
    itemDescription: {
        ...typography.S.regular,
        color: colors.common.black,
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
})