import 'react-native-gesture-handler';
import { Platform, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';


export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});