import * as React from 'react';
import { Alert, Icon, Text, TouchableOpacity, View, Image } from 'react-native';
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
    const { text, image } = route.params;

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
    return (
        <View style={customizeStyle.container}>
            <View style={customizeStyle.imageContainer}>
                <Image style={customizeStyle.image} source={{ uri: image }} />
            </View>
            <View style={customizeStyle.textBlock}>
                <Text style={customizeStyle.itemText}>{text}</Text>
            </View>

            <HeaderTabs />

            {/* <View style={tw`flex-row bg-white justify-evenly py-2 border-t border-gray-100`}>
                <TouchableOpacity
                    style={tw`flex flex-row bg-black w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-white text-center`}>S</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row bg-white w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-black text-center`}>M</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row bg-white w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-black text-center`}>L</Text>

                </TouchableOpacity>
            </View> */}

            {/* <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Sugar Free</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => (handleAddTask())}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Sugar Light</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Whipped Cream</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Add Syrup</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Add Sauce</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Decaf</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={customizeStyle.itemTextBlock}>
                <Text style={customizeStyle.priceText}>Total price: </Text>
            </View> */}
             <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={custom} 
                save="value"
                label="Categories"
            />

            <View style={customizeStyle.itemTextBlock}>
                <Text style={customizeStyle.priceText}>Total price: $4.29</Text>
            </View>


            <View style={customizeStyle.itemTextBlock}>
                <TouchableOpacity style={customizeStyle.checkoutButton}
                    onPress={() => {
                        addToCart();
                        navigation.navigate('Menu');
                    }}>
                    <Text style={globalStyles.loginText}>Add to Cart</Text>
                </TouchableOpacity>

            

            </View>


        </View>
    );
}