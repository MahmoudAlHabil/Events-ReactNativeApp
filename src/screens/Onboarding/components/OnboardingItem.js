import React, { useMemo } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const OnboardingItem = ({ imageUrl, title1, title2 }) => {
  const { width } = useWindowDimensions();
  const style = useMemo(() => styles(width), [width]);
  return (
    <View style={style.imageContainer}>
      <SvgXml xml={imageUrl} />
      <View style={style.title}>
        <Text style={style.text}>{title1}</Text>
        <Text style={style.text}>{title2}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = (width) => StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginBottom: 50,
  },
  title: {
    marginTop: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: "#000",
    lineHeight: 21,
  },
});
