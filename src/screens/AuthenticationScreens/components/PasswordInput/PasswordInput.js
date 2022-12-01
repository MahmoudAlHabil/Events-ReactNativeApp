import React, { useState, memo } from 'react'
import { View, Text } from 'react-native'
import { colors, icons } from '../../../../utils'
import Icon from "react-native-vector-icons/Feather"
import { InputField } from '../../../../components';
import { usePasswordValidation } from '../../../../hooks';
import { SvgXml } from 'react-native-svg';
import styles from './styles';

const Check = ({ title, isCheck }) => {
    return (
        <View style={styles.checkmark}>
            <SvgXml xml={isCheck ? icons.greenTrue : icons.grayTrue} />
            <Text style={[styles.checkmarkText, isCheck && styles.checkmarkTextTrue]}>{title}</Text>
        </View>
    )
}

const PasswordInput = ({ onChangeText, onBlur, value, containerStyle, validationPassword, label, ...rest }) => {

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const showPasswordHandler = () => {
        setIsPasswordShown((prevState) => !prevState);
    }
    
    if(validationPassword) {
        var { atLeastEight, lowercase, uppercase, specialCharacter } = usePasswordValidation(value)
    }
    
    return (
        <>
            <InputField
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                label={label || 'كلمة المرور'}
                placeholder='* * * * * * *'
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={containerStyle}
                secureTextEntry={isPasswordShown}
                rightIcon={isPasswordShown == true ?
                    (<Icon name="eye" size={17} color={colors.gray[500]} onPress={showPasswordHandler} />)
                    : (<Icon name="eye-off" size={17} color={colors.gray[500]} onPress={showPasswordHandler} />)}
                {...rest}
            />
            {validationPassword &&
                <View>
                    <Text style={styles.title}>متطلبات كلمة المرور</Text>
                    <Check title='8 أحرف على الأقل' isCheck={atLeastEight} />
                    <Check title='استخدم الأحرف الصغيرة' isCheck={lowercase} />
                    <Check title='استخدم الأحرف الكبيرة' isCheck={uppercase} />
                    <Check title='استخدم حرفاً خاصاً، على سبيل المثال @ $ #' isCheck={specialCharacter} />
                </View>}
        </>
    )
}

export default memo(PasswordInput)