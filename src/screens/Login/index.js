import React, { useState } from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputField } from "../../components";
import styles from "./styles";
import { SvgXml } from "react-native-svg";
import { Icons } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const loginSchema = Yup.object().shape({
    number: Yup.string().min(10, "رقم الهاتف غير صحيح").max(10, "رقم الهاتف غير صحيح").required("رقم الهاتف مطلوب"),
    password: Yup.string()
        .required("كلمة المرور مطلوبة")
        .matches(
            /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
            "كلمة المرور يجب ان تحتوي على حرف صغير واحد على الاقل"
            //'كلمة المرور يجب ان تحتوي على 8 احرف على الاقل - كلمة المرور يجب ان تحتوي على رقم واحد على الاقل - كلمة المرور يجب ان تحتوي على حرف خاص واحد على الاقل - كلمة المرور يجب ان تحتوي على حرف كبير واحد على الاقل - '
        ),
});

const Login = () => {
    const {navigate} = useNavigation()
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const showPasswordHandler = () => {
        setIsPasswordShown((currentState) => !currentState);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View>
                    <View style={styles.welcomeText}>
                        <Text style={styles.title}>مرحبا بك في تطبيق ايفينت</Text>
                        <SvgXml xml={Icons.hello} />
                    </View>
                    <Text style={styles.loginText}>قم بتسجيل الدخول</Text>
                </View>
                <Formik
                    initialValues={{ number: "", password: "" }}
                    onSubmit={(values, { ...rest }) => {
                        setTimeout(() => {
                            rest.setSubmitting(false);
                        }, 2000);
                        rest.resetForm({ number: "", password: "" });
                    }}
                    validationSchema={loginSchema}
                >
                    {({
                        errors,
                        values,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        touched,
                        isSubmitting,
                    }) => (
                        <>
                            <InputField
                                placeholder='ادخل رقم الهاتف'
                                onChangeText={handleChange("number")}
                                onBlur={handleBlur("number")}
                                value={values.number}
                                keyboardType='numeric'
                                containerStyle={styles.input}
                            />
                            {errors.number && touched.number && (
                                <Text style={styles.errorMessage}>{errors.number}</Text>
                            )}
                            <InputField
                                placeholder="كلمة المرور "
                                secureTextEntry={isPasswordShown}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                containerStyle={styles.passwordInput}
                                rightIcon={
                                    isPasswordShown ? (
                                        <Entypo
                                            name="eye-with-line"
                                            size={24}
                                            color="#999999"
                                            onPress={showPasswordHandler}
                                        />
                                    ) : (
                                        <Entypo
                                            name="eye"
                                            size={24}
                                            color="#999999"
                                            onPress={showPasswordHandler}
                                        />
                                    )
                                }
                            />
                            {errors.password && touched.password && (
                                <Text style={styles.errorMessage}>{errors.password}</Text>
                            )}
                            <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                                <Text style={styles.forgotPassword}>نسيت كلمة المرور؟</Text>
                            </TouchableOpacity>
                            <Button
                                title="تسجيل الدخول"
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                                buttonStyle={styles.button}
                                titleStyle={styles.buttonText}
                            />
                            {isSubmitting && <ActivityIndicator size={"large"} />}
                        </>
                    )}
                </Formik>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>ليس لديك حساب؟  </Text>
                    <TouchableOpacity onPress={() => navigate('Signup')}>
                        <Text style={styles.footerLink}>انشاء حساب</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;