import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Cart from '../components/Cart';
import { menuSelectionStyle,globalStyles, styles } from '../styles/globalStyles';

import { menus } from '../database/menuDataworking';

// create
export default function MenuSelectionScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),

  });

  //setting up custom fonts
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);


  return (!fontsLoaded ? null :
    <View style={globalStyles.container}>
        <Text style={menuSelectionStyle.itemText}>Thank you for Ordering!</Text>
        <Text style={menuSelectionStyle.itemText}>Your Item will be Ready Approximately In : </Text>
        <Text style={menuSelectionStyle.sectionHeadingText}>15</Text>
        <Text style={menuSelectionStyle.itemText}>Minutes </Text>
    </View>
  );
}
