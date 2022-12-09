import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, DropDown, HeaderScreen, InputField } from '../../components'
import { useAppSettingsContext } from '../../context/AppSettingsContext'
import { useBackHandler } from '@react-native-community/hooks'
import { useFormik } from 'formik'

const dropDownEventType = [
  { label: "عيد ميلاد", value: 'birthday' },
  { label: 'حفل زفاف', value: 'wedding' },
  { label: "حفلة تخرج", value: 'graduation' },
  { label: "افتتاح محل", value: 'shopOpening' },
]

const CreateEvent = () => {
  const { goBack, canGoBack, navigate } = useNavigation()
  const { appSettings } = useAppSettingsContext()
  const formik = useFormik({
    initialValues: {
      type: '',
      maxParticipants: 0,
    },
    onSubmit: values => navigate('PackagesScreen'),
  })

  const goBackHandler = () => {
    goBack()
    formik.resetForm()
    appSettings.setVisibleTabBottom(true, 'createEvent')
  }

  useBackHandler(() => {
    if (canGoBack()) {
      goBackHandler()
      return true
    }
    return false
  })

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView>
          <HeaderScreen actionText="رجوع" actionNavigation={goBackHandler} />
          <View style={styles.form}>
            <Text style={styles.headerText}>إنشاء مناسبة</Text>
            <DropDown
              placeholder='اختر نوع المناسبة'
              items={dropDownEventType}
              value={formik.values.type}
              style={styles.input} />
            <InputField
              placeholder="عدد المشاركين المتوقع"
              containerStyle={styles.input}
              value={formik.values.maxParticipants}
              keyboardType='number-pad'
              onChangeText={formik.handleChange('maxParticipants')} />
            <View style={styles.buttons}>
              <Button title="إلغاء" onPress={goBackHandler}
                buttonStyle={styles.cancelButton}
                titleStyle={styles.cancelButtonText} />
              <Button title="التالي" onPress={formik.handleSubmit}
                titleStyle={styles.nextButtonText}
                buttonStyle={styles.nextButton} />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CreateEvent