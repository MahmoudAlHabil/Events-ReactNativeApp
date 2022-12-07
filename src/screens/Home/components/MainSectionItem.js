import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { colors, icons, typography } from '../../../utils'
import { useNavigation } from '@react-navigation/native'
import { useAppSettingsContext } from '../../../context'

const MainSectionItem = () => {
    const { navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()

    return (
        <View>
            <View style={styles.itemsWrapper}>
                <TouchableOpacity style={[styles.container, { backgroundColor: 'rgba(255, 109, 40, 0.15)' }]} onPress={() => {
                    navigate('CreateEventStack')
                    appSettings.setVisibleTabBottom(false, 'createEvent')
                }}>
                    <SvgXml xml={icons.customEvent} />
                    <Text style={styles.name}>{'مناسبة مخصصة'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, { backgroundColor: 'rgba(120, 28, 104, 0.15)' }]} onPress={() => {
                    navigate('CreateEventStack')
                    appSettings.setVisibleTabBottom(false, 'createEvent')
                }}>
                    <SvgXml xml={icons.wedding} />
                    <Text style={styles.name}>{'حفل زفاف'}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.itemsWrapper, { marginBottom: 0 }]}>
                <TouchableOpacity style={[styles.container, { backgroundColor: 'rgba(252, 231, 0, 0.15)' }]} onPress={() => {
                    navigate('CreateEventStack')
                    appSettings.setVisibleTabBottom(false, 'createEvent')
                }}>
                    <SvgXml xml={icons.birthday} />
                    <Text style={styles.name}>{'حفل عيد ميلاد'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, { backgroundColor: 'rgba(0, 245, 255, 0.15)' }]} onPress={() => {
                    navigate('CreateEventStack')
                    appSettings.setVisibleTabBottom(false, 'createEvent')
                }}>
                    <SvgXml xml={icons.graduationCap} />
                    <Text style={styles.name}>{'حفل تخرج'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainSectionItem

const styles = StyleSheet.create({
    itemsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        width: '49%',
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        ...typography.XS.semibold,
        color: colors.common.black,
        lineHeight: 22,
        marginStart: 10,
    },
})