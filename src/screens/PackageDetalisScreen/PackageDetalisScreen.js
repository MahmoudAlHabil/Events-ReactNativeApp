import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'

const PackageDetalisScreen = () => {
    const { navigate, goBack } = useNavigation()
    const packageData = useRoute().params.item

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, {...typography.M.semibold}]}>{packageData.name}</Text>
                <Text style={styles.headerText}>{packageData.description}</Text>
                <Text style={styles.headerText}>المنظم: {packageData.organizer.name}</Text>
                <Text style={styles.headerText}>سعر الحزمة: {packageData.price} شيكل</Text>
                <Text style={styles.headerText}>محتوى الحزمة التي قمت بإخيارها</Text>
            </View>
            <FlatList
                data={packageData.items}
                renderItem={({ item }) => (
                    <View style={styles.package}>
                        <Text style={styles.packageTitle}>{item.item.name}</Text>
                        <Text style={styles.packageDescription}>{item.item.description}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item._id.toString()}
            />
            <Button title='اعتماد الحزمة' onPress={() => navigate('SubmitEventScreen')}
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
    headerText: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginLeft: 5,
        marginBottom: 4,
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