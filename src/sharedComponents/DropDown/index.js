import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import { SvgXml } from 'react-native-svg';

const DropDown = ({ label, items, style, placeholder, labelIcon }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        {labelIcon && <View style={styles.labelIcon}>
          <SvgXml xml={labelIcon} />
        </View>}
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setValue={setValue}
        setOpen={setOpen}
        placeholder={placeholder || "اختر عنصر"}
        dropDownDirection="TOP"
        dropDownContainerStyle={styles.dropDownContainer}
        listMode="SCROLLVIEW"
        // listMode="MODAL"
        // modalProps={{
        //   animationType: "fade"
        // }}
        // modalContentContainerStyle={{
        //   backgroundColor: "#0ff",
        //   padding: 10,
        //   marginHorizontal: 20,
        //   marginVertical: 100,
        // }}
        // modalTitleStyle={{
        //   fontWeight: "bold",
        //   color: "#000",
        //   textAlign: "center",
        //   fontSize: 20,
        // }}
        itemSeparator={true}
        itemSeparatorStyle={styles.itemSeparatorStyle}
        theme="LIGHT"
      />
    </View>
  )
}

export default DropDown