import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView, globalStyles, pastOrders, settings, menuSelectionStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

/* Past orders page WIP */

export default function PastOrdersScreeen({ route, navigation }) {

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState([]);

  const fetchTime = async () => {
    try {
      const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/pastOrder/2');
      const json = await resp.json();
      setTime(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCart = async () => {
    try {
      const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/orderItems/2');
      const json = await resp.json();
      setCart(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTime();
    fetchCart();
    setLoading(false);
  }, []);

  return loading ? (
    <View style={pastOrders.loadingPage}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  ) : (
    <>

      <View style={pastOrders.container}>
        {time.map((time) => {
          return (
            <View key={time}>
              <View style={pastOrders.taskWraper}>
                <Text style={pastOrders.sectionTitle}> Order From: </Text>
                <Text style={pastOrders.sectionTitle}>{time.ordertime} </Text>
                <View style={pastOrders.line} />
                <Text style={pastOrders.orderText}>Ready for pickup at:</Text>
                <Text style={pastOrders.orderText}>{time.ordercompleted}</Text>
              </View>
            </View>
          );
        })}
        {cart.map((cart) => {
          return (
            <ScrollView>
              <View style={pastOrders.itemTextBlockTop}>
                <Text style={pastOrders.titleText}>Cart </Text>
              </View>
              <View key={cart} style={pastOrders.containerCart}>
                <View style={pastOrders.flexWrapper}>
                  <View style={pastOrders.imageContainer}>
                    <Image style={pastOrders.imageContent} source={{ uri: cart.orderitemuri }} />
                  </View>
                  <View style={pastOrders.textContainer}>
                    <View style={pastOrders.titleContainer}>
                      <Text style={pastOrders.titleTextCart}>{cart.orderitemname}</Text>
                      {/* Take total from  */}
                      <Text style={pastOrders.sizeText}>{cart.orderitemssize}</Text>
                      <Text style={pastOrders.totalText}>{cart.orderitemcost}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {time.map((time) => {
                return (
                  <View key={time}>
                    <View style={pastOrders.itemTextBlock}>
                      <Text style={pastOrders.titleText}>{'Total: $' + time.totalcost} </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          );
        })}
      </View>
    </>
  );
}