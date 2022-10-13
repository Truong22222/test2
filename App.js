import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider } from 'native-base';
import OD from './Screens/OD'
import Accept  from './Screens/Accept';


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Accept/>
    
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },

