import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'
import axios from 'axios'

const CustomPackageScreen = () => {
    const { navigate } = useNavigation()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedItems, setSelectedItem] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get('/api/items')
            .then(res => {
                setItems(res.data.items.map((item) => {
                    return { ...item, selected: false }
                }))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const itemHandler = (item) => {
        item.selected = !item.selected
        if (!selectedItems.includes(item)) {
            setSelectedItem([...selectedItems, item])
        } else {
            setSelectedItem(selectedItems.filter((i) => i._id !== item._id))
        }
    }
console.log({selectedItems})
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>اختر العناصر الملائمة لمناسبتك من خلال النقر عليها</Text>
            {loading ? <View style={styles.loading}>
                <ActivityIndicator size="large" color={colors.primary.main} />
            </View> :
                <View style={styles.mainSection}>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.package, item.selected && { backgroundColor: colors.primary.BG }]}
                                onPress={() => itemHandler(item)} >
                                <Text style={styles.packageTitle}>{item.name}</Text>
                                <Text style={styles.packageDescription}>{item.description}</Text>
                                <Text style={styles.packagePrice}>{item.price} شيكل</Text>
                            </TouchableOpacity>
                        )}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id.toString()}
                    />
                </View>}
            <Button title='اعتماد الحزمة' onPress={() => navigate('OrganizersScreen')}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
        </View>
    )
}

export default CustomPackageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    mainSection: {
        flex: 1,
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
    packageDescription: {
        ...typography.S.regular,
        color: colors.common.black,
    },
    packagePrice: {
        ...typography.S.regular,
        color: colors.primary.main,
        marginBottom: -5,
    },
})