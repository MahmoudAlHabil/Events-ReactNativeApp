import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});