import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import styles from './styles'
import { Footer, Header, PasswordInput } from '../components'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import { Button, InputField, MessageInformation } from '../../../sharedComponents';
import { icons } from '../../../utils';
import * as Yup from 'yup'
import { setAccessToken } from '../../../API/axiosConfig'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const schema = Yup.object().shape({
    email: Yup.string().required('رقم الهاتف مطلوب'),
    // .email('رقم الهاتف غير صحيح'),
    password: Yup.string().required('كلمة المرور مطلوبة'),
})

const Login = () => {
    const { navigate, replace } = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header title="مرحبًا بعودتك!" subTitle="أنشئ مناسباتك من مكان واحد" />
                <Formik
                    initialValues={{ email: "lkaslkas01@gmail.com", password: "123456" }}
                    onSubmit={(values, { ...rest }) => {
                        replace('Home')
                        axios
                            .post("login", {
                                email: values.email,
                                password: values.password,
                            })
                            .then((response) => {
                                if (response.data.status) {
                                    setAccessToken(response.data?.data?.token)
                                    AsyncStorage.setItem("accessToken", response.data?.data?.token);
                                    // replace('Home')
                                    rest.setSubmitting(false);
                                    rest.resetForm();
                                } else {
                                    alert(response.data.message)
                                }
                            })
                            .catch((error) => {
                                console.log({ error });
                            });
                    }}
                validationSchema={schema}
                >
                    {({ errors, values, handleChange, handleSubmit, touched, isSubmitting, handleReset }) => (
                        <Fragment>
                            <View style={styles.formikContainer}>
                                <InputField
                                    label='رقم الهاتف'
                                    placeholder='ادخل رقم الهاتف'
                                    keyboardType='email-address'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={handleChange("email")}
                                    value={values.email}
                                />
                                {errors.email && touched.email && (
                                    <MessageInformation message={errors.email} icon={icons.message.error} />
                                )}
                                <PasswordInput
                                    onChangeText={handleChange("password")}
                                    value={values.password}
                                    containerStyle={styles.input}
                                />
                                {errors.password && touched.password && (
                                    <MessageInformation message={errors.password} icon={icons.message.error} />
                                )}
                                <TouchableOpacity style={styles.forgotPassword} onPress={() => {
                                    navigate('ForgotPassword')
                                    setTimeout(() => {
                                        handleReset()
                                    }, 400);
                                }}>
                                    <Text>نسيت كلمة المرور؟</Text>
                                </TouchableOpacity>
                                <Button
                                    title='تسجيل الدخول'
                                    onPress={handleSubmit}
                                    // disabled={isSubmitting}
                                />
                            </View>
                            <Footer headerText='Login using' questionText='ليس لديك حساب؟' actionText='أنشئ حسابًا' navigation={() => {
                                navigate('CreateAccount')
                                setTimeout(() => {
                                    handleReset()
                                }, 300);
                            }} />
                        </Fragment>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login