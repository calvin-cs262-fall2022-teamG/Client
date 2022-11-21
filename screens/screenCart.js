import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Text
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import ItemCard from "../components/ItemCard";
import { useState, useCallback } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [cartItem, setcartItem] = useState({});
  const [prevOpenedRow, setPrevOpenedRow] = useState();
  const [selectedMenu, setselectedMenu] = useState({});

  const CART_KEY = "@carts_Key";

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
    setcartItem(newItem);
    await saveCart(newItem);
  };

  const alertBeforeDelete = (menuKeyToDelete) => {
    Alert.alert(
      "Remove from Cart",
      `Removing "${cartItem[menuKeyToDelete].title}"`,
      [
        {
          text: "Cancel",
        },
        {
          text: "Remove",
          onPress: () => deleteCart(menuKeyToDelete),
          style: "destructive",
        },
      ]
    );
  };

  const clearCart = async () => {
    const emptyCart = {};
    setcartItem(emptyCart);
    await saveCart(emptyCart);
  };

  const alertBeforeClear = () => {
    Alert.alert(
      "Clearing All Items at Cart",
      "Clearing Cart Now. Are you sure?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Yes, Clear",
          onPress: () => clearCart(),
          style: "destructive",
        },
      ]
    );
  };

  // Swipeable code modified;
  // originally from: https://snack.expo.dev/@aaronksaunders/calm-beef-jerky
  const renderRightActions = (progress, dragX, alertBeforeDelete) => {
    return (
      <View
        style={{
          margin: 0,
          alignContent: "center",
          justifyContent: "center",
          width: 70,
        }}
      >
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={alertBeforeDelete}
        >
          <Ionicons name="trash" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  const closeRow = (menuKey) => {
    if (prevOpenedRow && prevOpenedRow !== selectedMenu[menuKey]) {
      prevOpenedRow.close();
    }
    setPrevOpenedRow(selectedMenu[menuKey]);
  };

  const processText = (text) => {
    // semester not specified
    try {
      const year = text.match(/\d+/g);
      const seasonObj = text.match(/[a-zA-Z]+/g).toString();
      const season = seasonObj.toUpperCase();
      return `${season} ${year}`;
    } catch (err) {
      if (text === "null") {
        return "Miscellaneous";
      }
    }

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
      <Text style={styles.titleText}>Your Current Orders:</Text>

      <View style={styles.container}>
        <ScrollView>
          {Object.keys(cartItem).map((menuKey) => (
            <TouchableOpacity
              key={menuKey}
              onPress={() => {
                navigation.navigate({
                  name: "customize",
                  params: {
                    text: cartItem[menuKey].text,
                    image: cartItem[menuKey].image,
                  },
                });
              }}
            >
              <Swipeable
                renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, () => alertBeforeDelete(menuKey)
                )}
                ref={(ref) => (selectedMenu[menuKey] = ref)}
                onSwipeableOpen={() => closeRow(menuKey)}
                rightOpenValue={-100}
              >
                <ItemCard
                  text={cartItem[menuKey].text}
                  image={cartItem[menuKey].image} />
              </Swipeable>
            </TouchableOpacity>
          ))}
          <View style={styles.itemTextBlock}>
            <TouchableOpacity
              style={styles.clearButton}
              title="clear"
              color="red"
              onPress={alertBeforeClear}>
              <Text style={styles.buttonText}>Clear All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkoutButton}
                    onPress={() => {
                        navigation.navigate('summary');
                        clearCart();

                    }}
                >
                    <Text style={styles.buttonText}>Checkout</Text>

                </TouchableOpacity>
          </View>
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
  deleteButton: {
    color: "red",
    backgroundColor: "#f5392f",
    height: "95%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    resizeMode: "contain",
    textAlign: "center"
  },
  clearButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  checkoutButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#800000",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  itemTextBlock: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },

});