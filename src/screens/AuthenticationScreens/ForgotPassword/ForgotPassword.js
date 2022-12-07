import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Header } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, InputField, MessageInformation } from '../../../components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { icons } from '../../../utils'

const schema = Yup.object().shape({
  email: Yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صحيح'),
})

const ForgotPassword = () => {
  const { navigate } = useNavigation()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      navigate('NewPassword')
    }
  })

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="إستعادة كلمة المرور"
          subTitle="سنرسل لك رمزًا لإعادة تعيين كلمة المرور الخاصة بك."
          actionText='رجوع'
          actionNavigation={() => navigate('Login')} />
        <InputField
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          label='البريد الإلكتروني'
          placeholder='ادخل البريد الإلكتروني'
          keyboardType='email-address'
          autoCapitalize="none"
          autoCorrect={false}
        />
        {formik.errors.email && formik.touched.email &&
          <MessageInformation message={formik.errors.email} icon={icons.message.error} />}
        <Button onPress={formik.handleSubmit} title="احصل على رمز الاسترداد" buttonStyle={styles.button} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ForgotPassword