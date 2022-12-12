import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView, globalStyles, pastOrders, settings, menuSelectionStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment/moment";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

/* Past orders page WIP */

export default function PastOrdersScreeen({ route, navigation }) {

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState([]);
  const [cartItem, setcartItem] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  const CART_KEY = "@carts_Key";

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
      const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/orderItems/1');
      const json = await resp.json();
      setCart(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const copyCart = () => {
    {/* orderTime */ }
    var date = moment()
      .utcOffset('-05:00')
      .format('M-D-Y hh:mm a');
    setCurrentDate(date);

    const datepickup = date;
  };

  const findTime = () => {
    {/* orderTime */ }
     var date = moment()
       .utcOffset('-05:00')
       .format('M-D-Y hh:mm a');
     setCurrentDate(date);
     
 
     {/* time calculator */ }
     var orderCompleted = 5;
     var orderQue = 1;
     if (orderCompleted > 0) {
       orderCompleted = orderCompleted + 7;
     };
     for (let i = 0; i < orderQue;) {
       orderCompleted = orderCompleted + 3;
       orderQue = orderQue - 1;
     };
 
     {/* orderCompleted */ }
    moment().add(8, 'minutes').calendar();
   };


  useFocusEffect(
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
      copyCart();
      findTime();
      setLoading(false);
      return () => {
      };
    }, [])
  );

  useEffect(() => {

  }, []);

  return loading ? (
    <View style={pastOrders.loadingPage}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  ) : (
    <>
      <View style={pastOrders.container}>

        <View key={cartItem}>
          <View style={pastOrders.taskWraper}>
            <Text style={pastOrders.sectionTitle}> Order From: </Text>
            <Text style={pastOrders.sectionTitle}>11/12/22</Text>
            <View style={pastOrders.line} />
            <Text style={pastOrders.orderText}>Ready for pickup at:</Text>
            <Text style={pastOrders.orderText}>{moment().add(9, 'minutes').calendar()}</Text>
          </View>
        </View>

        <ScrollView>
          <View style={pastOrders.itemTextBlockTop}>
            <Text style={pastOrders.titleText}>Cart </Text>
          </View>
          {Object.keys(cartItem).map((menuKey) => (
            <View style={pastOrders.containerCart}>
              <View style={pastOrders.flexWrapper}>
                <View style={pastOrders.imageContainer}>
                  <Image style={pastOrders.imageContent} source={{ uri: cartItem[menuKey].image }} />
                </View>
                <View style={pastOrders.textContainer}>
                  <View style={pastOrders.titleContainer}>
                    <Text style={pastOrders.titleTextCart}>{cartItem[menuKey].text}</Text>
                    {/* Take total from  */}
                    <Text style={pastOrders.sizeText}>Small</Text>
                    <Text style={pastOrders.totalText}>{'$' + cartItem[menuKey].cost.toFixed(2)}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}


        </ScrollView>





      </View>
    </>
  );
}
