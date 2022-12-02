import React, { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Menudisplay from '../components/Menudisplay';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';

import { menus } from '../database/menuDataworking';

// create
export default function MenuSelectionScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuItems, setmenuItems] = useState([]);
  const [foodItems, setfoodItems] = useState([]);
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


  const fetchMenu = async () => {
    const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/itemInfo', {


    });
    const json = await resp.json();
    setmenuItems(json);
    setLoading(false);
  };

  const fetchFood = async () => {
    const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/itemInfo1', {


    });
    const json = await resp.json();
    setfoodItems(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchMenu();
    fetchFood();
  }, []);


  return (!fontsLoaded ? null :
    <View style={globalStyles.container}>
      <View style={globalStyles.verticalScroll}>
        <ScrollView>
          <Text style={menuSelectionStyle.menuTitleStyle}>Drinks</Text>
          <Menudisplay key={menuItems.id} text={menuItems.itemname} menuData={menuItems} />
          <Text style={menuSelectionStyle.menuTitleStyle}>Foods</Text>
          <Menudisplay key={foodItems.id} text={foodItems.itemname} menuData={foodItems} />
        </ScrollView>
      </View>
    </View>
  );
  console.log(menuData + '1');
}
