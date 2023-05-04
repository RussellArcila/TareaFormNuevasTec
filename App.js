import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import HomeScreen from './screens/HomeScreen.tsx';
import AboutUsScreen from './screens/AboutUsScreen.tsx';
import UsersScreen from './screens/UsersScreen.tsx';
import UserScreen from './screens/UserScreen.tsx';
import EditScreen from './screens/EditScreen.tsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={AboutUsScreen}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "AboutUs") {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === "Users") {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}
      >
        <Tabs.Screen
          name="Users"
          component={UsersScreen}
          options={{title: "Users"}}
        />
        <Tabs.Screen
          name="User"
          component={UserScreen}
          options={{title: "User"}}
        />
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Tabs.Screen
          name="Edit"
          component={EditScreen}
          options={{title: "Edit"}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

