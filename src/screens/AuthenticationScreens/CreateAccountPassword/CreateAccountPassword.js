import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Footer, Header, PasswordInput } from '../components'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Formik, useFormik } from 'formik'
import { Button, MessageInformation } from '../../../components';
import * as Yup from 'yup'
import { icons } from '../../../utils'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAccessToken } from '../../../API/axiosConfig'
import { useUserInfoContext } from '../../../context'

const schema = Yup.object().shape({
    password: Yup.string().required('كلمة المرور مطلوبة').min(6, 'كلمة المرور يجب أن تكون أكثر من 6 أحرف'),
    confirmPassword: Yup.string().required('تأكيد كلمة المرور مطلوبة').oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة'),
})

const CreateAccountPassword = () => {
    const { navigate, replace } = useNavigation()
    const { setUserInfo } = useUserInfoContext()
    const userInfo = useRoute().params.values

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            axios.post('/api/users/', {
                name: userInfo.name,
                email: userInfo.email,
                phoneNumber: userInfo.phoneNumber,
                password: values.password,
            }).then((res) => {
                setAccessToken(res.data?.token)
                setUserInfo(res.data)
                AsyncStorage.setItem("accessToken", res.data?._id);
                AsyncStorage.setItem("userId", res.data?._id);
                replace('Home')
            }).catch((err) => {
                console.log({ err })
            }).finally(() => {
                formik.setSubmitting(false);
            })
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header title="انشاء حساب" subTitle='قم بتعيين كلمة المرور الخاصة بك لاستخدامها عند تسجيل الدخول إلى حسابك' />
                <View style={styles.formikContainer}>
                    <PasswordInput
                        onChangeText={formik.handleChange('password')}
                        value={formik.values.password}
                        validationPassword
                    />
                    {formik.errors.password && formik.touched.password && (
                        <MessageInformation message={formik.errors.password} icon={icons.message.error} />
                    )}
                    <PasswordInput
                        onChangeText={formik.handleChange('confirmPassword')}
                        value={formik.values.confirmPassword}
                        containerStyle={[styles.passwordInput, styles.input]}
                        label="تأكيد كلمة المرور"
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <MessageInformation message={formik.errors.confirmPassword} icon={icons.message.error} />
                    )}
                    <View style={styles.policyTermContainer}>
                        <Text style={styles.originalText}>إنشاء حساب يعني أنك توافق على
                            <Text style={styles.highlightText} onPress={() => { }}> سياسة الخصوصية</Text> و
                            <Text style={styles.highlightText} onPress={() => { }}> شروط الاستخدام</Text>
                        </Text>
                    </View>
                    <Button onPress={formik.handleSubmit} title="انشاء الحساب" disabled={formik.isSubmitting} />
                </View>
                <Footer questionText='لديك حساب بالفعل؟' actionText='تسجيل الدخول'
                    navigation={() => navigate('Login')} footerStyle={styles.footerStyle} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CreateAccountPassword