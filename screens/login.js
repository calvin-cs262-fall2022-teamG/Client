import * as React from 'react';
import { FC, ReactElement, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import { LoginStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

const fontStyles = ["normal", "italic"];
// create
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={homeStyle.loginContainer}>
            <Image
                style={{ width: 120, height: 95 }}
                source={require('../pics/appname.png')}
            />


            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={globalStyles.loginBtn}
                onPress={() => {
                    navigation.navigate('tabsHome', {screen: 'Menu'});
                    return 0
                }}
            >
                <Text style={globalStyles.loginText}>LOGIN</Text>

            </TouchableOpacity>
            <Text style={{ fontStyle: 'italic', fontSize: 13, fontWeight: '' }}>Don't have an account?</Text>
            <View style={LoginStyle.RegButton} >
                <Button
                    color='blue'
                    title="Register Now!"
                    fontWeight='bold'
                    onPress={() => {
                        navigation.navigate('Register');
                    }
                    } />
            </View>

        </View>
    );
}