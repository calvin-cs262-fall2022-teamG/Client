import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuSelectionScreen from "../screens/menuSelection";
import PastodersScreeen from "../screens/pastorders";
import SettingsScreen from '../screens/settings';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#50545F',
        tabBarActiveTintColor: '#3F7C8A',
        headerShown: false,
        tabBarStyle: {
          position: 'absloute',
          backgroundColor: '#52C4D1',
          borderRadius: '25',
          left: 0,
          bottom: 0,
          right: 0,
          padding: 5,
        }
      }}>

      <Tab.Screen name="Past Orders" component={PastodersScreeen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="Menu" component={MenuSelectionScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="create-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />),
      }} />

    </Tab.Navigator>
  )

}
