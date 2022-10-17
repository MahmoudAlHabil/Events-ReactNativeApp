import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Button, InputField } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const {goBack} = useNavigation()
    const [email, setEmail] = React.useState('')

    const handleSubmit = () => {
        console.log(email)
    }

    return (
        <View style={styles.container}>
            <Icon name="arrow-forward" size={26} color="black" style={styles.icon} onPress={goBack}/>
            <Text style={styles.title} >نسيت كلمة المرور</Text>
            <InputField
                placeholder='ادخل البريد الاكتروني'
                onChangeText={setEmail}
                value={email}
                keyboardType='email-address'
                containerStyle={styles.input}
            />
            <Button
                title="ارسال"
                onPress={handleSubmit}
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
            />
        </View>
    )
}

export default ForgotPassword