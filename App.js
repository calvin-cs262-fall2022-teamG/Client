import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from './styles/globalStyles';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import * as Notifications from 'expo-notifications';


/* Import of all screens for react navigation */
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import RegScreen from "./screens/register";
import SummaryScreen from "./screens/summary";
import CartScreen from "./screens/screenCart";
import MenuSelectionScreen from "./screens/menuSelection";
import CustomizeScreen from './screens/customize';
import SettingsScreen from './screens/settings';
import Header from './shared/header';
import PastOrdersScreeen from './screens/pastorders';
import OrderScreen from './screens/order';
import Tabs from './shared/bottomTabs';


const Stack = createNativeStackNavigator();

export default function App() {

  //custom font work as see in menuSelection
  const [fontsLoaded] = useFonts({
    'Fjalla': require('./assets/fonts/FjallaOne-Regular.ttf')
  });

  //setting up custom fonts
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/*Stack group for home login and register screen */}
        <Stack.Group
          screenOptions={{
            title: 'Peets for Knights',
            headerTitleStyle: {
              fontSize: '24',
              fontFamily: 'Fjalla',
            },
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


        {/*Stack group for menu pages and order pages */}
        <Stack.Group
          screenOptions={{
            title: '',
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#953635',
            }
          }}>
          {/* Change Header shown (to ture) if you wish to go back to login page from Menu  */}
          <Stack.Screen name="tabsHome" component={Tabs} options={{ headerShown: false, }} />

          <Stack.Screen name="customize" component={CustomizeScreen} />

          <Stack.Screen name="summary" component={SummaryScreen} />

          <Stack.Screen name="cart" component={CartScreen} />

          <Stack.Screen name="order" component={OrderScreen} />

        </Stack.Group>

      </Stack.Navigator>

    </NavigationContainer >
  );
}
