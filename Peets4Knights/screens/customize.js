import * as React from 'react';
import { FC, ReactElement, useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';


import { globalStyles } from '../styles/globalStyles';
import { LoginStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';
import { drinks, food } from '../database/menuDataworking';

const fontStyles = ["normal", "italic"];
// create customization page
export default function CustomizeScreen({ navigation }) {
    

    return (
        <View style={homeStyle.container}>
            <Text>drinks or food img</Text>
          <Image
                style={{ width: 250, height: 85, marginBottom: 60 }}
                source={require('../pics/appname.png')}
            />
            
            <Text>drinks or food name</Text>
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
