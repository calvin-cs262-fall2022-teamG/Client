import * as React from 'react';
import { Alert, Icon, Text, TouchableOpacity, View, Image, addons } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useCallback, useRef } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import HeaderTabs from '../components/Size';
import { customizeStyle, globalStyles } from '../styles/globalStyles';
import { menus } from '../database/menuDataworking';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const fontStyles = ["normal", "italic"];
// create customization page
export default function CustomizeScreen({ route }) {
    const [orderingItem, setOrderingItem] = useState({});
    const navigation = useNavigation();
    const CART_KEY = "@carts_Key";
    const { text, image, cost = 4.29, addons} = route.params;
    
    const saveCart = async (menuObj) => {
        try {
            const jsonValue = JSON.stringify(menuObj);
            await AsyncStorage.setItem(CART_KEY, jsonValue);
        } catch (e) {
            alert(`${text}: ${e}`);
        }
    };
    const alertAfterAdd = () => {
        Alert.alert(
            "Item has been Added to the Cart"
        );
    };
    const addToCart = async () => {
        const myCart = {
            text: text,
            image: image,
            cost: cost,
            addons: addons,
        };
        const newItem = { ...orderingItem, [Date.now()]: myCart };
        setOrderingItem(newItem);
        await saveCart(newItem);
        alertAfterAdd();
    };
    useFocusEffect(

        useCallback(() => {
            const loadInfo = async () => {
                try {
                    const cartJsonValue = await AsyncStorage.getItem(CART_KEY);
                    const cartObj = cartJsonValue != null ? JSON.parse(cartJsonValue) : {};
                    // set states
                    setOrderingItem(cartObj);

                    if (Object.values(cartObj).find((item) => item.text === text)) {
                    }
                } catch (e) {
                    alert(`${e}`);
                }
            };
            loadInfo();
        }, [])
    );

    const [activeTab, setActiveTab] = React.useState("Delivery");
    const [selected, setSelected] = React.useState([]);
    const custom = [
        {key:'1', value:'Add Sugar'},
        {key:'2', value:'Sugar Free'},
        {key:'3', value:'Add Whipped Cream'},
        {key:'4', value:'Add shot'},
        {key:'5', value:'Decaf'},
        {key:'6', value:'Add Syrup'},
    ]
    console.log(text);
    console.log(image);
    console.log(cost);
    console.log(addons);
    return (
        <View style={customizeStyle.container}>
            <View style={customizeStyle.imageContainer}>
                <Image style={customizeStyle.image} source={{ uri: image }} />
            </View>
            <View style={customizeStyle.textBlock}>
                <Text style={customizeStyle.itemText}>{text}</Text>
            </View>

            <HeaderTabs />

             <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={custom} 
                save="value"
                label="Categories"
            />


            <View style={customizeStyle.itemTextBlock}>
                <TouchableOpacity style={customizeStyle.checkoutButton}
                    onPress={() => {
                        addToCart();
                        navigation.navigate('Menu',  {text: text, image: image, cost: cost})
                    }}>
                    <Text style={globalStyles.loginText}>Add to Cart</Text>
                </TouchableOpacity>

            

            </View>


        </View>
    );
}