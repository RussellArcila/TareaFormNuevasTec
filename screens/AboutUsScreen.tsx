import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function AboutUsScreen({navigation}) {

  // const { test } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        About Us testing
      </Text>
      <Button
      title = "Go to previous page"
      onPress = {() => navigation.pop()}
      />
      <Button
      title = "Terms and conditions screen"
      onPress = {() => navigation.navigate("TermsAndConditions", {test: 10})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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
});