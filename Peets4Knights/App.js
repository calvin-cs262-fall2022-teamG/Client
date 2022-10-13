import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import * as Notifications from 'expo-notifications';


import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import RegScreen from "./screens/register";
import MenuSelectionScreen from "./screens/menuSelection";
import CustomizeScreen from './screens/customize';

import SettingsScreen from './screens/settings';
import Header from './shared/header';
import PastodersScreeen from './screens/pastorders';

import OrderScreen from './screens/order';
import { globalStyles } from './styles/globalStyles';

import Tabs from './shared/bottomTabs';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Group
          screenOptions={{
            headerTitleStyle: {},
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#953635',
            }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="login" component={LoginScreen} />

          <Stack.Screen name="Register" component={RegScreen} />
        </Stack.Group>


        <Stack.Group
          screenOptions={{
            headerTitleStyle: {},
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#953635',
              borderRadius: '25',
            }
          }}>

          <Stack.Screen name="tabsHome" component={Tabs} options={{ headerShown: true, }} />

          <Stack.Screen name="customize" component={CustomizeScreen} />

          <Stack.Screen name="order" component={OrderScreen} />

        </Stack.Group>



      </Stack.Navigator>
    </NavigationContainer >
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

