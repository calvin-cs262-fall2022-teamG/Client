import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';
const fontStyles = ["normal", "italic"];

export default function HomeScreen({ navigation }) {
    return (
        <View style={homeStyle.container}>
            <Image
                style={{ width: 250, height: 85, marginTop: 60 }}
                source={require('../pics/appname.png')}
            />


            <Text style={{ fontStyle: 'italic', fontSize: 13, fontWeight: '' }}>
                {"\n"}{"\n"}Prototype v2.
            </Text>

            <Text style={{ fontStyle: 'italic', fontSize: 11, fontWeight: 'bold' }}>
                {"\n"} - Oct 6 2022 - {"\n"}
            </Text>

            <TouchableOpacity style={globalStyles.loginBtn}
                onPress={() => {
                    navigation.navigate('login');
                    return 0
                }}>
                <Text style={globalStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}CS262 Fall 2022 Team-Gold</Text>
            <Text>©Calvin University</Text>

        </View>
    );
}