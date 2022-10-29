import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { InputField } from "../../../sharedComponents";

const DateTimePicker = ({ type, label, icon, style, onChangeText }) => {
    const [dateOrTime, setDateOrTime] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        Keyboard.dismiss();
    };

    const handleConfirm = (date) => {
        if (type === "date") {
            setDateOrTime(date.toLocaleDateString());
        } else {    // type === "time"  
            setDateOrTime(date.toLocaleTimeString('ar-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
        }
        hideDatePicker();
    };

    return (
        <View>
            <InputField
                label={label}
                placeholder={type === "date" ? "أدخل تاريخ المناسبة" : "أدخل وقت المناسبة"}
                labelIcon={icon}
                containerStyle={style}
                value={dateOrTime}
                onChangeText={onChangeText}
                onFocus={showDatePicker}
                onBlur={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={type}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
                themeVariant="dark"
                minuteInterval={5}
                style={styles.dateTimePicker}
            />
        </View>
    );
};

export default DateTimePicker;

const styles = StyleSheet.create({
    dateTimePicker: {
        backgroundColor: "white",
        borderRadius: 10,
        color: 'red',
        flex: 1,
    },
})