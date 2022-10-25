import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { Fragment, useState } from 'react'
import { Footer, Header, PasswordInput } from '../components'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
import { Button, DropDown, InputField, MessageInformation } from '../../../sharedComponents';
import * as Yup from 'yup'
import { icons } from '../../../utils'
import { usePasswordValidation } from '../../../hooks'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAccessToken } from '../../../API/axiosConfig'

const CreateAccountPassword = () => {
    const { navigate, replace } = useNavigation()
    const { values } = useRoute().params
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { isValid } = usePasswordValidation(password)

    const createAccountHandler = () => {console.log(values)
        axios({
            method: 'post',
            url: 'register',
            params: {
                name: values.name,
                email: values.email,
                password: password,
                phone: values.phone,
            },
        })
            .then(response => {
                console.log(response.data);
                alert(response.data.message)
                if (response.data.status) {
                    setAccessToken(response.data?.data?.token)
                    AsyncStorage.setItem("accessToken", response.data?.data?.token);
                    replace('Home')
                    rest.resetForm()
                    setPassword('')
                }
                // alert('تم انشاء الحساب بنجاح')
            }).catch(error => {
                console.log({ error });
                // alert('حدث خطأ ما')
            });
        }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Header title="انشاء حساب" subTitle='قم بتعيين كلمة المرور الخاصة بك لاستخدامها عند تسجيل الدخول إلى حسابك' />
                    <Formik
                        initialValues={{ name: '', phone: '', email: '', dropDown: '', address: '' }}
                        onSubmit={(values, { ...rest }) => {
                            createAccountHandler()
                        }}
                    // validationSchema={schema}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <Fragment>
                                <View style={styles.formikContainer}>
                                    <PasswordInput
                                        onChangeText={setPassword}
                                        value={password}
                                        validationPassword
                                    />
                                    <PasswordInput
                                        onChangeText={setConfirmPassword}
                                        value={confirmPassword}
                                        containerStyle={[styles.passwordInput, styles.input]}
                                        label="تأكيد كلمة المرور"
                                    />
                                    {errors.email && touched.email && (
                                        <MessageInformation message={errors.email} icon={icons.message.error} />
                                    )}
                                    <View style={styles.policyTermContainer}>
                                        <Text style={styles.originalText}>إنشاء حساب يعني أنك توافق على
                                            <Text style={styles.highlightText} onPress={() => { }}> سياسة الخصوصية</Text> و
                                            <Text style={styles.highlightText} onPress={() => { }}> شروط الاستخدام</Text>
                                        </Text>
                                    </View>
                                    <Button onPress={handleSubmit} title="انشاء الحساب" />
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

export default CreateAccountPassword