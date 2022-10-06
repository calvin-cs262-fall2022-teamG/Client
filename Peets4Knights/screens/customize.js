import * as React from 'react';
import { FC, ReactElement, useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';


import { customizeStyle, globalStyles } from '../styles/globalStyles';
import { menus} from '../database/menuDataworking';

const fontStyles = ["normal", "italic"];
// create customization page
export default function CustomizeScreen({ route }) {
    
    const { text, image } = route.params;
    return (
        <View style={globalStyles.container}>
            <View style={customizeStyle.imageContainer}>
            <Image style={customizeStyle.image} source={{uri: image}} />
            </View>
            <Text style={customizeStyle.itemText}>{text}</Text>
            <View>
                <Text>selection menu for customize your drinks or food</Text>
                <Text>React native Minus(-) (Number) Plus(+) Component</Text>
            </View>
            <Text>
                Total price: 
            </Text>
            
            <TouchableOpacity style={globalStyles.loginBtn}
                onPress={() => {
                    // navigation.navigate('checkout');
                    return 0
                }}
            >
                <Text style={globalStyles.loginText}>Checkout</Text>

            </TouchableOpacity>

        </View>
    );
}
