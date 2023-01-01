import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, DropDown, HeaderScreen, InputField, MessageInformation } from '../../components'
import { useAppSettingsContext } from '../../context/AppSettingsContext'
import { useBackHandler } from '@react-native-community/hooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { icons } from '../../utils'

const dropDownEventType = [
  { label: "عيد ميلاد", value: 'birthday' },
  { label: 'حفل زفاف', value: 'wedding' },
  { label: "حفلة تخرج", value: 'graduation' },
  { label: "افتتاح محل", value: 'shopOpening' },
]

const schema = Yup.object().shape({
  // type: Yup.string().required('نوع الحدث مطلوب'),
  maxParticipants: Yup.number().required('عدد المشاركين المتوقع مطلوب')
})

const CreateEvent = () => {
  const { goBack, canGoBack, navigate } = useNavigation()
  const { appSettings } = useAppSettingsContext()
  const [eventData, setEventData] = useState({})
  const [dropDownValue, setDropDownValue] = useState('');

  const formik = useFormik({
    initialValues: {
      type: '',
      maxParticipants: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      setEventData({ ...values, type: dropDownValue })
      navigate('PackagesScreen', { eventData, category: dropDownValue })
    },
  })

  // console.log('eventData', eventData)

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
              value={dropDownValue}
              setValue={setDropDownValue}
              style={styles.input} />
            {formik.errors.type && formik.touched.type && (
              <MessageInformation message={formik.errors.type} icon={icons.message.error} />
            )}
            <InputField
              placeholder="عدد المشاركين المتوقع"
              containerStyle={styles.input}
              value={formik.values.maxParticipants}
              keyboardType='number-pad'
              onChangeText={formik.handleChange('maxParticipants')} />
            {formik.errors.maxParticipants && formik.touched.maxParticipants && (
              <MessageInformation message={formik.errors.maxParticipants} icon={icons.message.error} />
            )}
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