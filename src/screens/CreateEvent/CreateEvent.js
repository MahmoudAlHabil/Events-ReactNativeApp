import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, DropDown, HeaderScreen, InputField } from '../../sharedComponents'
import { useAppSettingsContext } from '../../context/AppSettingsContext'
import { useBackHandler } from '@react-native-community/hooks'
import { useFormik } from 'formik'
import { icons } from '../../utils'
import DateTimePicker from './components/DateTimePicker'

const dropDownData = [
  { label: "عيد ميلاد", value: 'family' },
  { label: 'حفل زفاف', value: 'work' },
  { label: "افتتاح محل", value: 'entertainment' },
  { label: "حفلة تخرج", value: 'entertainmentr' },
]

const CreateEvent = () => {
  const { goBack, canGoBack } = useNavigation()
  const { appSettings } = useAppSettingsContext()
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      date: '',
      time: '',
      location: '',
      maxParticipants: 0,
      public: false,
    },
    onSubmit: values => {
      // console.log(values)
    },
  })

  const goBackHandler = () => {
    goBack()
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
        <HeaderScreen actionText="رجوع" actionNavigation={goBackHandler} />
        <View style={styles.form}>
          <Text style={styles.headerText}>إنشاء مناسبة</Text>
          <InputField label="اسم المناسبة"
            placeholder="أدخل اسم المناسبة"
            labelIcon={icons.eventName}
            containerStyle={styles.input}
            value={formik.values.name}
            onChangeText={formik.handleChange('name')} />
          <DropDown
            label='نوع المناسبة'
            placeholder='اختر نوع المناسبة'
            labelIcon={icons.eventType}
            items={dropDownData}
            style={styles.input} />
          <DateTimePicker type='date'
            label='التاريخ'
            icon={icons.eventDate}
            style={styles.input}
            value={formik.values.date}
            onChangeText={formik.handleChange('date')} />
          <DateTimePicker type='time'
            label='الوقت'
            icon={icons.eventTime}
            style={styles.input}
            value={formik.values.time}
            onChangeText={formik.handleChange('time')} />
          <InputField label="المكان"
            placeholder="أدخل مكان المناسبة"
            labelIcon={icons.eye}
            containerStyle={styles.input}
            value={formik.values.location}
            onChangeText={formik.handleChange('location')} />
          <InputField label="عدد المشاركين"
            placeholder="أدخل عدد المشاركين المتوقع"
            labelIcon={icons.eventPerson}
            containerStyle={styles.input}
            value={formik.values.maxParticipants}
            keyboardType='number-pad'
            onChangeText={formik.handleChange('maxParticipants')} />
          <View style={styles.buttons}>
            <Button title="إلغاء" onPress={goBackHandler}
              buttonStyle={styles.cancelButton}
              titleStyle={styles.cancelButtonText} />
            <Button title="التالي" onPress={formik.handleSubmit}
              buttonStyle={styles.nextButton} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CreateEvent