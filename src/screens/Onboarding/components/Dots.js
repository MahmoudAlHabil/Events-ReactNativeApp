import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const Dots = ({ index, activeIndex }) => {
  const customStyle =
    index !== activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[customStyle, styles.mainDotContainer]} />;
};

export default Dots;

const styles = StyleSheet.create({
  mainDotContainer: {
    marginHorizontal: 2,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  primaryBullet: {
    height: 12,
    width: 12,
    backgroundColor: Colors.primary,
  },
  grayBullet: {
    height: 8,
    width: 8,
    backgroundColor: Colors.secondary,
  },
});
