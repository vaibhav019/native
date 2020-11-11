import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    
    <SafeAreaView style={styles.container}>
      <Text> this is vaibhav singh sengar </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    textDecorationColor:'danger'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});

