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
    const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/pastOrder');
    const json = await resp.json();
    setTime(json);
  };

  const fetchCart = async () => {
    const resp = await fetch('https://cs262teamgdatabaseservice.herokuapp.com/orderItems');
    const json = await resp.json();
    setCart(json);
  };

  useEffect(() => {
    fetchTime();
    fetchCart();
    setLoading(false);
  }, []);

  return loading ? (
    <View style={styles.loadingPage}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  ) : (
    <>

      <View style={styles.container}>
      
            <View >
              <View style={pastOrders.taskWraper}>
                <Text style={pastOrders.sectionTitle}> Order From: </Text>
                <Text style={pastOrders.sectionTitle}>11.30.22 3:30</Text>
                <View style={pastOrders.line} />
                <Text style={pastOrders.text}>Ready for pickup at:</Text>
                <Text style={pastOrders.text}>3:37</Text>
              </View>
            </View>
       
     
            <ScrollView>
              <View style={styles.itemTextBlockTop}>
                <Text style={styles.titleText}>Cart </Text>
              </View>
              <View key={cart} style={styles.containerCart}>
                <View style={styles.flexWrapper}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.imageContent} source={{ uri: 'https://peets-shop.imgix.net/products/cold-brew-iced-coffee.png?v=1597269387&auto=formatcompress&w=540' }} />
                  </View>
                  <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleTextCart}>Cold Brew</Text>
                      {/* Take total from  */}
                      <Text style={styles.sizeText}>Small</Text>
                      <Text style={styles.totalText}>4.29</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.itemTextBlock}>
                <Text style={styles.titleText}>Total: 4.29 </Text>
              </View>

            </ScrollView>



      </View>
    </>
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
  itemTextBlockTop: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 0,
  },

  containerCart: {
    height: 120,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  flexWrapper: {
    height: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1.2,
  },
  imageContent: {
    borderRadius: 20,
    flex: 1,
    padding: 15,
    resizeMode: "contain",
  },
  textContainer: {
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flex: 2,
    padding: 15,
    justifyContent: "space-around",
  },
  titleContainer: {
    flex: 1.7,
    justifyContent: "center",
  },
  titleTextCart: {
    fontSize: 24,
    fontWeight: "500",
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "500",
  },
  totalText: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: 'flex-end',
  },
  directorText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionText: {
    flex: 2,
  },
});



