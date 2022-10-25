import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';
const fontStyles = ["normal", "italic"];

export default function HomeScreen({ navigation }) {
    return (
        <View style={homeStyle.container}>
            
            <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 400 }}
                source={require('../pics/homeBackground.png')}
            >


                <Text style={{ fontStyle: 'italic', fontSize: 13, fontWeight: '' }}>
                    {"\n"}{"\n"}Elaboration 2
                </Text>

                <Text style={{ fontStyle: 'italic', fontSize: 11, fontWeight: 'bold' }}>
                    {"\n"} - Oct 28 2022 - {"\n"}
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

            </ImageBackground>
        </View>
    );
}