import moment from "moment";
import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { InputField } from "../../../components";
import { convetTimeToArabic } from "../../../utils/helperFunctions";

const DateTimePicker = ({ type, label, icon, style, onChangeValue, value }) => {
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
            onChangeValue(moment(date).format('YYYY-MM-DD'));
        } else {    // type === "time"  
            onChangeValue(moment(date).format('h:mm A'));
        }
        hideDatePicker();
    };

    return (
        <View>
            <InputField
                label={label}
                placeholder={type === "date" ? "التاريخ" : "الوقت"}
                labelIcon={icon}
                containerStyle={style}
                value={type === "date" ? value : convetTimeToArabic(value)}
                onChangeText={onChangeValue}
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