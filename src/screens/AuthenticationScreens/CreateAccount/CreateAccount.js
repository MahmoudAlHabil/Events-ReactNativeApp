import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Footer, Header } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { Button, InputField, MessageInformation } from '../../../components';
import * as Yup from 'yup'
import { icons } from '../../../utils'

const schema = Yup.object().shape({
  name: Yup.string().required('الاسم مطلوب'),
  email: Yup.string().email('البريد الالكتروني غير صحيح').required('البريد الالكتروني مطلوب'),
  phoneNumber: Yup.string().required('رقم الهاتف مطلوب'),
})

const CreateAccount = () => {
  const { navigate } = useNavigation()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: schema,
    onSubmit: (values) => navigate('CreateAccountPassword', { values })
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="انشاء حساب" subTitle="مرحبا بكم في ايفينت! أدخل بياناتك للبدء." />
        <View style={styles.formikContainer}>
          <InputField
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            label='الاسم كامل'
            placeholder="ادخل الاسم كاملا"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {formik.errors.name && formik.touched.name && (
            <MessageInformation message={formik.errors.name} icon={icons.message.error} />
          )}
          <InputField
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            label="البريد الالكتروني"
            placeholder="example@email.com"
            keyboardType='email-address'
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.input}
          />
          {formik.errors.email && formik.touched.email && (
            <MessageInformation message={formik.errors.email} icon={icons.message.error} />
          )}
          <InputField
            onChangeText={formik.handleChange('phoneNumber')}
            value={formik.values.phoneNumber}
            label='رقم الهاتف'
            placeholder="05xxxxxxxx"
            // keyboardType='number-pad'
            containerStyle={styles.input}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <MessageInformation message={formik.errors.phoneNumber} icon={icons.message.error} />
          )}
          <Button onPress={formik.handleSubmit} title="التالي" buttonStyle={{ marginTop: 35 }} />
        </View>
        <Footer questionText='لديك حساب بالفعل؟' actionText='تسجيل الدخول'
          navigation={() => navigate('Login')} footerStyle={styles.footerStyle} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CreateAccount


// const dropDownData = [
//   { label: 'غزة', value: 'gaza' },
//   { label: 'رفح', value: 'Rafah' },
//   { label: 'خانيونس', value: 'Khan Younes' },
//   { label: 'دير البلح', value: 'Dair Al Balah' },
//   { label: 'الزهرة', value: 'Alzahra' },
//   { label: 'الزوايدة', value: 'Zawaida' },
//   { label: 'بيت لاهيا', value: 'Beit Lahia' },
//   { label: 'جباليا', value: 'Jabalia' },
//   { label: 'بيت حانون', value: 'Beit Hanoun' },
// ]

/**
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
 */