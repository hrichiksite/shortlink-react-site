import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import URL from './components/url';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        The Tiny URL Shortner
      </Text>
      <Card>
      <URL/>
      </Card> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    logo: {
    height: 180,
    width: 180,
    alignSelf: "center",
    borderRadius: 30
  }
});
