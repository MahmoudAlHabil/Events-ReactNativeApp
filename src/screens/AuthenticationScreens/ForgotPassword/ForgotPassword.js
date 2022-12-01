import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Header } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, InputField, MessageInformation } from '../../../components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { icons } from '../../../utils'

const schema = Yup.object().shape({
  phone: Yup.string().required('رقم الهاتف مطلوب').min(10, 'رقم الهاتف غير صحيح').max(10, 'رقم الهاتف غير صحيح'),
})

const ForgotPassword = () => {
  const { navigate } = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="إستعادة كلمة المرور"
          subTitle="سنرسل لك رمزًا لإعادة تعيين كلمة المرور الخاصة بك."
          actionText='رجوع'
          actionNavigation={() => navigate('Login')} />
        <Formik
          initialValues={{ phone: '' }}
          onSubmit={(values, { ...rest }) => {
            navigate('NewPassword')
          }}
          validationSchema={schema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <InputField
                onChangeText={handleChange('phone')}
                value={values.phone}
                label='رقم الهاتف'
                placeholder="ادخل رقم الهاتف"
                keyboardType='number-pad'
                autoCapitalize="none"
                autoCorrect={false}
              />
              {errors.phone && touched.phone &&
                <MessageInformation message={errors.phone} icon={icons.message.error} />}
              <Button onPress={handleSubmit} title="احصل على رمز الاسترداد" buttonStyle={styles.button} />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ForgotPassword