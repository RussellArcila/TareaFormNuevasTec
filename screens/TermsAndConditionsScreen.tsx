import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function TermsAndConditionsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Terms And Conditions
      </Text>
      <Button
      title = "Previous Screen"
      onPress = {() => navigation.pop()}
      />
      <Button
      title = "Home page"
      onPress = {() => navigation.popToTop()}
      />
      <Button
      title = "Home page regular"
      onPress = {() => navigation.navigate("Home")}
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