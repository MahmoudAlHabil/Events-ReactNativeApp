import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Header, PasswordInput } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { Button, InputField, MessageInformation } from '../../../components'
import * as Yup from 'yup'
import { icons } from '../../../utils'
import { usePasswordValidation } from '../../../hooks'

const schema = Yup.object().shape({
  verificationCode: Yup.string().required('Verification code is required')
    .min(7, 'رمز التحقق غير صحيح').max(7, 'رمز التحقق غير صحيح')
})

const NewPassword = () => {
  const { navigate, goBack } = useNavigation()
  const [password, setPassword] = useState('')
  const { isValid } = usePasswordValidation(password)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="تعيين كلمة مرور جديدة"
          subTitle="تم إرسال الرمز إلى"
          highlightText=' 64*****059 '
          subTitle2='أدخل رمز الاسترداد وكلمة المرور الجديدة.'
          actionText='رجوع'
          actionNavigation={() => goBack()} />
        <Formik
          initialValues={{ verificationCode: '' }}
          onSubmit={(values, { ...rest }) => {
            if (isValid) {
              navigate('Login')
              rest.resetForm()
              setPassword('')
            }
          }}
          validationSchema={schema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <InputField
                onChangeText={handleChange('verificationCode')}
                value={values.verificationCode}
                label="رمز التحقق"
                placeholder="0 0 0 0 0 0 0"
                keyboardType='number-pad'
              />
              {errors.verificationCode && touched.verificationCode && (
                <MessageInformation message={errors.verificationCode} icon={icons.message.error} />
              )}
              <View style={styles.question}>
                <TouchableOpacity><Text style={styles.resendCode}>ألم تحصل على الرمز؟ </Text></TouchableOpacity>
                <Text style={styles.timer}>30 ثانية</Text>
              </View>
              <PasswordInput
                onChangeText={setPassword}
                value={password}
                label="كلمة المرور الجديدة"
                validationPassword
              />
              <Button onPress={handleSubmit} title="إعادة تعيين كلمة المرور+" buttonStyle={styles.button} />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewPassword