import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styles from './styles';

const InputField = (props) => {
    const {
        label,
        labelIcon,
        leftIcon,
        rightIcon,
        containerStyle,
        inputStyle,
        ...rest
    } = props;

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.labelContainer}>
                {labelIcon && <View style={styles.labelIcon}>
                    <SvgXml xml={labelIcon} />
                </View>}
                {label && <Text style={styles.label}>{label}</Text>}
            </View>
            <View style={styles.inputContainer}>
                {leftIcon}
                <TextInput
                    style={[styles.input, !leftIcon && { marginLeft: -11 }, inputStyle]}
                    selectionColor="black"
                    {...rest}
                />
                {rightIcon}
            </View>
        </View>
    )
}

export default InputField;

