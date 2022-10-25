import React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import styles from "./styles";

const OnboardingItem = ({ imageUrl, title, description }) => {
  const { width } = useWindowDimensions();
  const style = styles(width)
  return (
    <View style={style.container}>
      <SvgXml style={style.image} xml={imageUrl} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>{description}</Text>
    </View>
  );
};

export default OnboardingItem;

