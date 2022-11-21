import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Menudisplay from '../components/Menudisplay';
import { globalStyles, styles } from '../styles/globalStyles';

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
      <View style={globalStyles.verticalScroll}>
        <ScrollView>
          {
            Object.keys(menus).map((item, idx) =>
              <Menudisplay key={idx} text={item} menuData={menus[item]} />
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}
