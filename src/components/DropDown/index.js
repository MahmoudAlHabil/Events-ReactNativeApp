import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../utils';

const DropDown = ({ label, items, style, placeholder, labelIcon, value, setValue }) => {
  const [open, setOpen] = useState(false);

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
        placeholderStyle={styles.placeholder}
        listMode="MODAL"
        modalProps={{
          animationType: "slide",
          transparent: true,
          presentationStyle: "overFullScreen",
        }}
        modalContentContainerStyle={{
          backgroundColor: colors.primary.light,
          padding: 10,
          marginHorizontal: 40,
          marginVertical: 250,
          borderRadius: 10,
        }}
        modalTitleStyle={{
          fontWeight: "bold"
        }}
        props={{
          style: styles.dropDown,
          activeOpacity: 0.7,
        }}
        itemSeparator={true}
        itemSeparatorStyle={styles.itemSeparatorStyle}
      />
    </View>
  )
}

export default DropDown