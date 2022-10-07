import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';

import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import RegScreen from "./screens/register";
import MenuSelectionScreen from "./screens/menuSelection";
import CustomizeScreen from './screens/customize';
import OrderScreen from './screens/order';
import { globalStyles } from './styles/globalStyles';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegScreen} />
        <Stack.Screen name="menuSelection"
          component={MenuSelectionScreen} />
        <Stack.Screen name="customize" component={CustomizeScreen} />
        <Stack.Screen name="order" component={OrderScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

