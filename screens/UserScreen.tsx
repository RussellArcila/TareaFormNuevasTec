import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function AboutUsScreen({navigation, route}) {

  const { id, name, role, address, salary } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        user {id}
      </Text>
      <Button
      title = "Previous Screen"
      onPress = {() => navigation.goBack()}
      />
      <Button
      title = "edit user"
      onPress = {() => navigation.navigate("Edit", {id, name, role, address, salary})}
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