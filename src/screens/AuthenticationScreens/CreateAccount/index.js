import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { Fragment, useState } from 'react'
import { Footer, Header, PasswordInput } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { Button, DropDown, InputField, MessageInformation } from '../../../sharedComponents';
import * as Yup from 'yup'
import { icons } from '../../../utils'
import { usePasswordValidation } from '../../../hooks'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAccessToken } from '../../../API/axiosConfig'

// const schema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
// })
const dropDownData = [
  { label: 'غزة', value: 'gaza' },
  { label: 'رفح', value: 'Rafah' },
  { label: 'خانيونس', value: 'Khan Younes' },
  { label: 'دير البلح', value: 'Dair Al Balah' },
  { label: 'الزهرة', value: 'Alzahra' },
  { label: 'الزوايدة', value: 'Zawaida' },
  { label: 'بيت لاهيا', value: 'Beit Lahia' },
  { label: 'جباليا', value: 'Jabalia' },
  { label: 'بيت حانون', value: 'Beit Hanoun' },
]

const CreateAccount = () => {
  const { navigate, replace } = useNavigation()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { isValid } = usePasswordValidation(password)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
        <View style={styles.container}>
          <Header title="انشاء حساب" subTitle="مرحبا بكم في ايفينت! أدخل بياناتك للبدء." />
          <Formik
            initialValues={{ name: '', phone: '', email: '', dropDown: '', address: '' }}
            onSubmit={(values, { ...rest }) => {
              // if (isValid) {}
              // alert(JSON.stringify(values))
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("email", values.email);
              formData.append("phone", values.phone);
              formData.append("address", values.address);
              formData.append("city", values.dropDown);
              navigate('CreateAccountPassword', { values })
            }}
          // validationSchema={schema}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <Fragment>
                <View style={styles.formikContainer}>
                  <InputField
                    onChangeText={handleChange('name')}
                    value={values.name}
                    label='الاسم كامل'
                    placeholder="ادخل الاسم كاملا"
                  />
                  {errors.name && touched.name && (
                    <MessageInformation message={errors.name} icon={icons.message.error} />
                  )}
                  <InputField
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    label='رقم الهاتف'
                    placeholder="05xxxxxxxx"
                    keyboardType='number-pad'
                    containerStyle={styles.input}
                  />
                  {errors.phone && touched.phone && (
                    <MessageInformation message={errors.phone} icon={icons.message.error} />
                  )}
                  <InputField
                    onChangeText={handleChange('email')}
                    value={values.email}
                    label="البريد الالكتروني"
                    placeholder="example@email.com"
                    keyboardType='email-address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.input}
                  />
                  {errors.email && touched.email && (
                    <MessageInformation message={errors.email} icon={icons.message.error} />
                  )}
                  <DropDown
                    label='المدينة'
                    placeholder='اختر المدينة'
                    items={dropDownData}
                    style={styles.dropDown} />
                  <DropDown
                    label='المنطقة'
                    placeholder='اختر المنطقة'
                    items={dropDownData}
                    style={styles.dropDown} />
                  {errors.email && touched.email && (
                    <MessageInformation message={errors.email} icon={icons.message.error} />
                  )}
                  <InputField
                    onChangeText={handleChange('address')}
                    value={values.address}
                    label='العنوان'
                    placeholder="محطة بهلول"
                    containerStyle={styles.input}
                  />
                  {errors.address && touched.address && (
                    <MessageInformation message={errors.address} icon={icons.message.error} />
                  )}
                  <Button onPress={handleSubmit} title="التالي" buttonStyle={{ marginTop: 35 }} />
                </View>
                <Footer questionText='لديك حساب بالفعل؟' actionText='تسجيل الدخول'
                  navigation={() => navigate('Login')} footerStyle={styles.footerStyle} />
              </Fragment>
            )}
          </Formik>
        </View>
      
    </TouchableWithoutFeedback>
  )
}

export default CreateAccount