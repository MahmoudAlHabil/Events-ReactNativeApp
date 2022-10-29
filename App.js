import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import './src/API/axiosConfig';
import { colors } from './src/utils';
import { AppSettingsContextProvider } from './src/context';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <AppSettingsContextProvider>
      <SafeAreaView style={styles.container}>
        <AppContainer />
        <StatusBar barStyle="dark-content" backgroundColor={colors.common.white} />
      </SafeAreaView>
    </AppSettingsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});