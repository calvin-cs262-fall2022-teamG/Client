import React, { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Menudisplay from '../components/Menudisplay';
import { globalStyles, styles } from '../styles/globalStyles';

import { menus } from '../database/menuDataworking';

// create
export default function MenuSelectionScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [filtereditemTypes, setFiltereditemTypes] = useState({});
  const [filteredMenu, setFilteredMenu] = useState({});
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


  const getMenuByitemTypes = (data) => {
    // get list of all the itemTypes
    const types = [];
    data.forEach((item) => {
      // if the itemType is not in the set
      if (!types.includes(item.itemType)) {
        types.push(item.itemType);
      }
    });

    // filter Menu by itemTypes
    let filteredBytype = {};
    types.forEach((type) => {
      const itemTypeMenu = data.filter((item) => item.itemType === type);
      // console.log(type, itemTypeMenu);
      filteredBytype[type] = itemTypeMenu;
    });
    setFiltereditemTypes(filteredBytype);
    // start as itemType on default
    setFilteredMenu(filteredBytype);
  };

  const processMenu = (rawMenuData) => {
    const processedMenu = rawMenuData.map((data) => {
      const { itemType, ...rest } = data;

      const newitemType = !itemType ? "MISCELLANEOUS" : itemType.toUpperCase();

      return { itemType: newitemType, ...rest };
    });
    return processedMenu;
  }

  const fetchMenu = async () => {
    try {
      const response = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/itemInfo');
      const data = await response.json();
      console.log('testestestsets');
      const processedMenu = processMenu(data);
      setMenu(processedMenu);
      getMenuByitemTypes(processedMenu);
      setData(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchMenu();
    setLoading(false);
  }, []);



  return (!fontsLoaded ? null :
    <View style={globalStyles.container}>
      <View style={globalStyles.verticalScroll}>
        <ScrollView>
          {
            Object.keys(data).map((itemType, idx) =>
              <Menudisplay key={idx} text={data.itemname} menuData={data} />
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}
