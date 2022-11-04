import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Cart from '../components/Cart';
import { customizeStyle,menuSelectionStyle, globalStyles, styles } from '../styles/globalStyles';

import { menus } from '../database/menuDataworking';

// create
export default function CartScreen({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
    'Fjalla': require('../assets/fonts/FjallaOne-Regular.ttf')
  });
  const { myCart } = route.params;
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

          <Text style={menuSelectionStyle.sectionHeadingText}>Added To Your Cart!</Text>
          <Text style={menuSelectionStyle.sectionHeadingText}>Your Current Orders : </Text>


          {
            Object.keys(myCart).map((item, idx) =>
              <Cart key={idx} text={item} menuData={myCart[item]} />
            )
          }

          <Text style={menuSelectionStyle.itemText}>Total Price : </Text>
          <View style={customizeStyle.itemTextBlock}>
          <TouchableOpacity style={customizeStyle.cartButton}
                    onPress={() => {
                        navigation.navigate('summary');
                       
                    }}
                >
                    <Text style={globalStyles.loginText}>Checkout</Text>

                </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
