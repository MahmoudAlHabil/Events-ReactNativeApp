import React, { useState } from "react";
import { View, useWindowDimensions, FlatList, Text } from "react-native";
import styles from "./styles";
import { Dots, OnboardingItem } from "./components";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../utils";
import { Button } from "../../sharedComponents";

const data = [
  {
    id: 1,
    imageUrl: icons.onboarding1,
    title1: 'كل مستلزمات الحفلات والناسبات السعيدة',
    title2: 'والناسبات السعيدة',
  },
  {
    id: 2,
    imageUrl: icons.onboarding2,
    title1: 'كل مستلزمات الحفلات والناسبات السعيدة',
    title2: 'والناسبات السعيدة',
  },
];

const Onboarding = () => {
  const { replace } = useNavigation();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        disableIntervalMomentum
        onScroll={handleOnScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingItem imageUrl={item.imageUrl} title={item.title1}  description={item.description} />}
      />
      <View style={styles.footerContainer}>
        <View style={styles.dots}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ index }) => (
              <Dots index={index} activeIndex={activeIndex} />
            )}
          />
        </View>
        <Button
          title="تسجيل الدخول"
          onPress={() => replace("Login")}
        />
        <Button
          title="إنشاء حساب جديد"
          onPress={() => replace("CreateAccount")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default Onboarding;
