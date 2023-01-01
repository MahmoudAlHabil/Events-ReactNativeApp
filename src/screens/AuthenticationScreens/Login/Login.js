import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Footer, Header, PasswordInput } from '../components'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik';
import { Button, InputField, MessageInformation } from '../../../components';
import { icons } from '../../../utils';
import * as Yup from 'yup'
import { setAccessToken } from '../../../API/axiosConfig'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserInfoContext } from '../../../context'

const schema = Yup.object().shape({
    email: Yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صحيح'),
    password: Yup.string().required('كلمة المرور مطلوبة').min(6, 'كلمة المرور يجب أن تكون أكثر من 6 أحرف'),
})

const Login = () => {
    const { navigate, replace } = useNavigation()
    const { setUserInfo } = useUserInfoContext()

    const formik = useFormik({
        initialValues: {
            email: 'user@test.com',
            password: 'user123456',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            axios
                .post("/api/users/login", {
                    email: values.email,
                    password: values.password,
                })
                .then((res) => {
                    setAccessToken(res.data?.token)
                    setUserInfo(res.data)
                    AsyncStorage.setItem("accessToken", res.data?._id);
                    AsyncStorage.setItem("userId", res.data?._id);
                    replace('Home')
                })
                .catch((error) => {
                    console.log({ error });
                }).finally(() => {
                    formik.setSubmitting(false);
                    formik.resetForm();
                })
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header title="مرحبًا بعودتك!" subTitle="أنشئ مناسباتك من مكان واحد" />
                <View style={styles.formikContainer}>
                    <InputField
                        label='البريد الإلكتروني'
                        placeholder='ادخل البريد الإلكتروني'
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={formik.handleChange("email")}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <MessageInformation message={formik.errors.email} icon={icons.message.error} />
                    )}
                    <PasswordInput
                        onChangeText={formik.handleChange("password")}
                        value={formik.values.password}
                        containerStyle={styles.input}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <MessageInformation message={formik.errors.password} icon={icons.message.error} />
                    )}
                    <TouchableOpacity style={styles.forgotPassword} onPress={() => {
                        navigate('ForgotPassword')
                        setTimeout(() => {
                            formik.handleReset()
                        }, 400);
                    }}>
                        <Text>نسيت كلمة المرور؟</Text>
                    </TouchableOpacity>
                    <Button
                        title='تسجيل الدخول'
                        onPress={formik.handleSubmit}
                        disabled={formik.isSubmitting}
                    />
                </View>
                <Footer headerText='Login using' questionText='ليس لديك حساب؟' actionText='أنشئ حسابًا' navigation={() => {
                    navigate('CreateAccount')
                    setTimeout(() => {
                        formik.handleReset()
                    }, 300);
                }} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login