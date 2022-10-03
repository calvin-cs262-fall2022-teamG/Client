import * as React from 'react';
import { FC, ReactElement, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import { LoginStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

const fontStyles = ["normal", "italic"];
// create add on page
export default function AddonScreen({ navigation }) {
    return (
        <View style={homeStyle.container}>
            <Image
                style={{ width: 120, height: 95 }}
                source={require('../pics/appname.png')}
            />

            <TouchableOpacity style={globalStyles.loginBtn}
                onPress={() => {
                    navigation.navigate('menuSelection');
                    return 0
                }}
            >
                <Text style={globalStyles.loginText}>This is an Add-on Page</Text>

            </TouchableOpacity>

        </View>
    );
}