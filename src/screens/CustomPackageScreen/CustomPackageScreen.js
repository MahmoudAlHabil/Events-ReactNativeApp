import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'
import axios from 'axios'

const CustomPackageScreen = () => {
    const { navigate } = useNavigation()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedItems, setSelectedItem] = useState([])
    const { type } = useRoute().params

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/api/items?keyword=${type}`)
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
        if (!selectedItems.includes({ item: item._id, qty: 1 })) {
            setSelectedItem([...selectedItems, { item: item._id, qty: 1 }])
        } else {
            setSelectedItem(selectedItems.filter((i) => i._id !== item._id))
        }
    }
    
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
                            <TouchableOpacity style={[styles.item, item.selected && { backgroundColor: colors.primary.BG }]}
                                onPress={() => itemHandler(item)} >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.itemImage}
                                />
                                <View style={styles.textItemWrapper}>
                                    <Text style={styles.itemTitle}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>{item.price} شيكل</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id.toString()}
                    />
                </View>}
            <Button title='اعتماد الحزمة' onPress={() => navigate('OrganizersScreen', { type, items: selectedItems })}
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
    itemPrice: {
        ...typography.S.regular,
        color: colors.primary.main,
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