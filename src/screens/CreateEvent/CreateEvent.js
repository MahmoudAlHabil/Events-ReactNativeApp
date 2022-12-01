import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, DropDown, HeaderScreen, InputField } from '../../components'
import { useAppSettingsContext } from '../../context/AppSettingsContext'
import { useBackHandler } from '@react-native-community/hooks'
import { useFormik } from 'formik'
import { icons } from '../../utils'
import DateTimePicker from './components/DateTimePicker'

const dropDownTypeEvent = [
  { label: "عيد ميلاد", value: 'family' },
  { label: 'حفل زفاف', value: 'work' },
  { label: "افتتاح محل", value: 'entertainment' },
  { label: "حفلة تخرج", value: 'entertainmentr' },
]

const dropDownPrivacyEvent = [
  { label: "عام", value: 'public' },
  { label: 'خاص', value: 'private' },
]



const CreateEvent = () => {
  const { goBack, canGoBack, navigate } = useNavigation()
  const { appSettings } = useAppSettingsContext()
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
      public: false,
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
            <DropDown
              placeholder='اختر نوع المناسبة'
              items={dropDownTypeEvent}
              value={formik.values.type}
              style={styles.input} />
            <DateTimePicker type='date'
              style={styles.input}
              value={formik.values.date}
              onChangeText={formik.handleChange('date')} />
            <DateTimePicker type='time'
              style={styles.input}
              value={formik.values.time}
              onChangeText={formik.handleChange('time')} />
            <InputField
              placeholder="المكان"
              containerStyle={styles.input}
              value={formik.values.location}
              onChangeText={formik.handleChange('location')} />
            <InputField
              placeholder="عدد المشاركين المتوقع"
              containerStyle={styles.input}
              value={formik.values.maxParticipants}
              keyboardType='number-pad'
              onChangeText={formik.handleChange('maxParticipants')} />
            <DropDown
              placeholder='اختر الخصوصية'
              items={dropDownPrivacyEvent}
              value={formik.values.privacy}
              style={styles.input} />
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