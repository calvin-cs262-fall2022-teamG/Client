import React, { useState, useCallback } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { globalStyles, pastOrders, settings, menuSelectionStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import SummaryCard from "../components/SummaryCard";
import SummaryTime from '../components/SummaryTime';
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

/* Past orders page WIP */

export default function PastOrdersScreeen({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [cartItem, setcartItem] = useState({});
  const [prevOpenedRow, setPrevOpenedRow] = useState();
  const [selectedMenu, setselectedMenu] = useState({});


  const CART_KEY = "@carts_Key";
  const PCART_KEY = "@pcart_key";


  const saveCart = async (menuObj) => {
    try {
      const jsonValue = JSON.stringify(menuObj);
      await AsyncStorage.setItem(CART_KEY, jsonValue);
    } catch (e) {
      alert(`${title}: ${e}`);
    }
  };

  const deleteCart = async (menuKey) => {

    const newItem = { ...cartItem };
    delete newItem[menuKey];
    menuKey.favorited = false;
    setcartItem(newItem);
    await saveCart(newItem);
  };

  const clearCart = async () => {
    const emptyCart = {};
    setcartItem(emptyCart);
    await saveCart(emptyCart);
  };


  useFocusEffect(
    // WHENEVER Favorites screen is focused, load past order from AsyncStorage
    useCallback(() => {
      const getCart = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(CART_KEY);
          setcartItem(jsonValue != null ? JSON.parse(jsonValue) : {});
        } catch (e) {
          alert(`${e}`);
        }
      };

      getCart();
      setLoading(false);
      return () => {
      };
    }, [])
  );

  return loading ? (
    <View style={styles.loadingPage}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  ) : (
    <>
      <View style={styles.container}>

        <SummaryTime>
          
        </SummaryTime>

        <Text style={styles.titleText}>Cart</Text>

        <ScrollView>
          {Object.keys(cartItem).map((menuKey) => (
            <SummaryCard
              text={cartItem[menuKey].text}
              image={cartItem[menuKey].image} />
          ))}

          <View style={styles.itemTextBlock}>
          </View>
          {/* Take total from  */}
          <Text style={styles.titleText}>Total: $$</Text>
        </ScrollView>
        
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingPage: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    resizeMode: "contain",
    textAlign: "center"
  },
  itemTextBlock: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },

});

