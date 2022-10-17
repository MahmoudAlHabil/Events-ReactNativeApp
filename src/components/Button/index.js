import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const {
        onPress,
        title,
        icon,
        buttonStyle,
        titleStyle,
        iconStyle,
        ...rest
    } = props;
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            style={[styles.button, buttonStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, titleStyle]}>{title || 'Title'}</Text>
                {icon && (
                    <View style={[styles.iconStyle, iconStyle]}>
                        {icon()}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Button