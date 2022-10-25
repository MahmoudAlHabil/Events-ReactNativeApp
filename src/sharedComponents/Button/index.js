import React from 'react';
import { Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const {
        onPress,
        title,
        icon,
        buttonStyle,
        titleStyle,
        iconStyle,
        disabled,
        ...rest
    } = props

    const { width } = useWindowDimensions()

    const style = styles(width)

    return (
        <TouchableOpacity
            disabled={disabled}
            {...rest}
            onPress={onPress}
            style={[style.button, buttonStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[style.title, titleStyle]}>{title}</Text>
                {icon && (
                    <View style={[style.iconStyle, iconStyle]}>
                        {icon}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Button