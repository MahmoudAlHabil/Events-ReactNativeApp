import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, DropDown, InputField } from '../../components'
import { colors, typography } from '../../utils'
import { useBackHandler } from '@react-native-community/hooks'
import { useAppSettingsContext } from '../../context'
import { useFormik } from 'formik'
import DateTimePicker from '../CreateEvent/components/DateTimePicker'
import CheckBox from '@react-native-community/checkbox';

const SubmitEventScreen = () => {
    const { goBack, canGoBack, navigate } = useNavigation()
    const { appSettings } = useAppSettingsContext()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useBackHandler(() => {
        if (canGoBack()) {
            return true
        }
        return false
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            type: '',
            date: '',
            time: '',
            location: '',
            maxParticipants: 0,
            privacy: '',
            isPublic: false,
        },
        onSubmit: values => {
            navigate('HomeStack')
            appSettings.setVisibleTabBottom(true, 'createEvent')
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>أدخل باقي التفاصيل لإتمام إنشاء المناسبة</Text>
            <InputField
                placeholder="اسم المناسبة"
                containerStyle={styles.input}
                value={formik.values.name}
                onChangeText={formik.handleChange('name')} />
            <InputField
                placeholder="أضف وصفاً"
                containerStyle={styles.input}
                value={formik.values.description}
                multiline={true}
                onChangeText={formik.handleChange('description')} />
            <InputField
                placeholder="المكان"
                containerStyle={styles.input}
                value={formik.values.location}
                onChangeText={formik.handleChange('location')} />
            <DateTimePicker type='date'
                style={styles.input}
                value={formik.values.date}
                onChangeText={formik.handleChange('date')} />
            <DateTimePicker type='time'
                style={styles.input}
                value={formik.values.time}
                onChangeText={formik.handleChange('time')} />
            <View style={styles.horizontalFlex}>
                <CheckBox
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkBoxText}>مناسبة عامة</Text>
            </View>
            <Button title="تأكيد المناسبة" onPress={formik.handleSubmit}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
        </View>
    )
}

export default SubmitEventScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        marginBottom: 10,
    },
    horizontalFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '100%',
        height: 40,
        marginTop: 32,
        marginBottom: -10,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    checkBoxText: {
        ...typography.S.medium,
        color: colors.common.black,
        lineHeight: 32,
    },
    title: {
        ...typography.S.semibold,
        color: colors.common.black,
        marginBottom: 10,
    },
})