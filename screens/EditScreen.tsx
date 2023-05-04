import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from '@react-native-material/core';

export default function EditScreen({navigation, route}) {

  const { id, name, role, address, salary } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        user {id}
      </Text>
        <TextInput value={name}/>
        <TextInput value={role}/>
        <TextInput value={address}/>
        <TextInput value={salary.toString()}/>
        <Button
        title = 'Guardar'/>
      <Button
      title = "Previous Screen"
      onPress = {() => navigation.goBack()}
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