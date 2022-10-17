import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const InputField = (props) => {
    const {
        label,
        leftIcon,
        rightIcon,
        containerStyle,
        inputStyle,
        ...rest
    } = props;

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                {leftIcon}
                <TextInput
                    style={[styles.input, !leftIcon && {marginLeft: -11}, inputStyle]}
                    selectionColor="black"
                    {...rest}
                />
                {rightIcon}
            </View>
        </View>
    )
}

export default InputField;

