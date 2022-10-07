import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import RegScreen from "./screens/register";
import MenuSelectionScreen from "./screens/menuSelection";
import CustomizeScreen from './screens/customize';
import SettingsScreen from './screens/settings';
import Header from './shared/header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={({ navigation })=> ({headerRight: () => (
          <Header navigation={navigation}/>
        )})} />
        
        <Stack.Screen name="login" component={LoginScreen} 
        options={({ navigation })=> ({headerRight: () => (
          <Header navigation={navigation}/>
        )})} />

        <Stack.Screen name="Register" component={RegScreen} />
        
        <Stack.Screen name="menuSelection" 
          component={MenuSelectionScreen} 
          options={({ navigation })=> ({headerRight: () => (
          <Header navigation={navigation}/>
        )})} />
        
        <Stack.Screen name="customize" component={CustomizeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

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