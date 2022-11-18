import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuSelectionScreen from "../screens/menuSelection";
import PastOrdersScreeen from "../screens/pastorders";
import SettingsScreen from '../screens/settings';
import CartScreen from "../screens/screenCart";
import Header from "./header";

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#EDE81B',
        headerShown: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#953635',
          left: 0,
          bottom: 0,
          right: 0,
          padding: 5,
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#953635',
        },
        headerTitleStyle: {
          fontSize: '24',

        },

      }}>

      <Tab.Screen name="Past Orders" component={PastOrdersScreeen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="Menu" component={MenuSelectionScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="create-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart-outline" color={color} size={size} />),
      }} />

    </Tab.Navigator>
  )
}