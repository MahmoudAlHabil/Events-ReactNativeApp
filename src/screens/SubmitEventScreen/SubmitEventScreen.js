import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import { colors, typography } from '../../utils'
import { useBackHandler } from '@react-native-community/hooks'
import { useAppSettingsContext } from '../../context'

const SubmitEventScreen = () => {
    const { goBack, canGoBack, navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()

    // const goBackHandler = () => {
    //     goBack()
    //     formik.resetForm()
    //     appSettings.setVisibleTabBottom(true, 'createEvent')
    // }

    useBackHandler(() => {
        if (canGoBack()) {
            // goBackHandler()
            return true
        }
        return false
    })

    return (
        <View>
            <View style={styles.buttons}>
                <Button title="إلغاء" onPress={goBack}
                    buttonStyle={styles.cancelButton}
                    titleStyle={styles.cancelButtonText} />
                <Button title="التالي" onPress={() => {
                    navigate('HomeStack')
                    appSettings.setVisibleTabBottom(true, 'createEvent')
                }}
                    titleStyle={styles.nextButtonText}
                    buttonStyle={styles.nextButton} />
            </View>
        </View>
    )
}

export default SubmitEventScreen

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '47%',
        height: 40,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    cancelButton: {
        marginEnd: 10,
        width: '47%',
        height: 40,
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
    cancelButtonText: {
        color: colors.primary.main,
        ...typography.M.medium,
        lineHeight: 28,
    },
})