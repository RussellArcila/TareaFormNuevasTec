import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { StackNavigator, NavigationScreenProp } from 'react-navigation';

interface HomeNavigation {
  navigation: NavigationScreenProp<any,any>,
}

export default function HomeScreen({navigation}: HomeNavigation) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Home
      </Text>
      <Button
      title = "About us with 5"
      onPress = {() => navigation.navigate("AboutUs", {test: 5})}
      />
      <Button
      title = "About us with 10"
      onPress = {() => navigation.navigate("AboutUs", {test: 10})}
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