import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, shadow, typography } from '../../utils'
import Icon from 'react-native-vector-icons/Ionicons';

const OrganizersScreen = () => {
    const { navigate, goBack } = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>اختر منظم مناسبتك</Text>
                <Text style={styles.headerText2}>يمكنك الإطلاع على تفاصيل المنظم من خلال النقر عليه لعرض ملفه الشخصي واعتماده للإنتقال للخطوة الأخيرة.</Text>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.package}
                        onPress={() => navigate('OrganizerProfileScreen')}>
                        <Image source={require('../../../assets/images/slide.png')} style={styles.image} />
                        <Text style={styles.text}>العالمية للمناسبات</Text>
                        <Icon name='chevron-back' size={22} color={colors.gray[500]} />
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
    headerText: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginLeft: 5,
        marginBottom: 5,
    },
    headerText2: {
        ...typography.XS.semibold,
        color: colors.gray[500],
        marginLeft: 5,
        marginBottom: 5,
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
    packagee: {
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
    package: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: colors.gray[300],
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        backgroundColor: colors.common.white,
        width: '100%',
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary.assist,
        elevation: 2
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        ...shadow,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
    text: {
        ...typography.M.regular,
        color: colors.gray[500],
        flex: 1,
        textAlign: 'left',
        marginLeft: 16,
        lineHeight: 35
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 20,
        ...shadow,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
})