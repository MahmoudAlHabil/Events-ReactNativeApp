import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Header } from '../components'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { Button, InputField, MessageInformation } from '../../../sharedComponents'
import { icons } from '../../../utils'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  verificationCode: Yup.string().required('Verification code is required')
  .min(7, 'Verification code is incorrect').max(7, 'Verification code is incorrect')
})

const VerificationCode = () => {
  const { navigate, goBack } = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="Account verification"
          subTitle="Fill the verification code that has been sent to"
          highlightText=' +1-613-555-0110'
          actionText='Back'
          actionNavigation={() => goBack()} />
        <Formik
          initialValues={{ verificationCode: '' }}
          onSubmit={(values, { ...rest }) => {
            navigate('VerificationCode')
            rest.resetForm()
          }}
          validationSchema={schema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <InputField
                onChangeText={handleChange('verificationCode')}
                value={values.verificationCode}
                label="Confirmation code"
                placeholder="0 0 0 0 0 0 0"
                keyboardType='number-pad'
              />
              {errors.verificationCode && touched.verificationCode && (
                <MessageInformation message={errors.verificationCode} icon={icons.message.error} />
              )}
              <View style={styles.question}>
                <Text style={styles.resendCode}>Didn’t get the code? </Text>
                <Text style={styles.timer}>30 Sec</Text>
              </View>
              <Button onPress={handleSubmit} title="Confirm" />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default VerificationCode