import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Dots = ({ index, activeIndex }) => {
  const customStyle =
    index !== activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[customStyle, styles.mainDotContainer]} />;
};

export default Dots;

