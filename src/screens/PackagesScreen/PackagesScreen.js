import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'
import { useBackHandler } from '@react-native-community/hooks'
import { useAppSettingsContext } from '../../context'
import axios from 'axios'

const PackagesScreen = () => {
    const { goBack, canGoBack, navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()
    const [loading, setLoading] = useState(false)
    const [packages, setPackages] = useState([])
    const { eventData, category } = useRoute().params

    console.log('eventData', eventData)

    const goBackHandler = () => {
        goBack()
        appSettings.setVisibleTabBottom(true, 'createEvent')
    }

    useBackHandler(() => {
        if (canGoBack()) {
            goBackHandler()
            return true
        }
        return false
    })

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/api/packages?category=${category}`)
            .then(res => {
                setPackages(res.data.packages)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>اختر الحزمة المناسبة أو قم بتخصيص حزمة تناسبك</Text>
            </View>
            {loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={colors.primary.main} />
                </View> :
                <FlatList
                    data={packages}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.package}
                            onPress={() => navigate('PackageDetalisScreen', { eventData, item })}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.packageImage}
                            />
                            <Text style={styles.packageTitle}>{item.name}</Text>
                            <Text style={styles.packageDescription}>{item.description.slice(0, 60)}...</Text>
                            <Text style={styles.packagePrice}>{item.price} شيكل</Text>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id.toString()}
                    numColumns={2}
                />}
            <Button title='تخصيص حزمة' onPress={() => navigate('CustomPackageScreen', { eventData })}
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
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 270,
        margin: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    packageImage: {
        height: 120,
        marginHorizontal: -11,
        marginTop: -11,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
    },
    packageTitle: {
        ...typography.M.medium,
        color: colors.primary.main,
    },
    packageDescription: {
        ...typography.XS.regular,
        color: colors.common.black,
        marginTop: 4,
    },
    packagePrice: {
        ...typography.M.medium,
        color: colors.primary.main,
        marginTop: 10,
    },
})