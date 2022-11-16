import * as React from 'react';
import { useState } from "react";
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';

import { regStyle } from '../styles/globalStyles';
import { globalStyles } from '../styles/globalStyles';

const fontStyles = ["normal", "italic"];

export default function RegScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, confirmPassword] = useState("");

    return (
        <View style={globalStyles.container}>
            <Image
                style = {{width: 120, height: 95}}
                source={require('../pics/appname.png')} 
            />
            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>

            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
                        <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={globalStyles.inputView}>
                <TextInput
                    style={globalStyles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(checkPassword) => confirmPassword(checkPassword)}
                />
            </View>

            <Text style = {{fontStyle: 'italic', fontSize: 13, fontWeight: ''}}>
                {"\n"}{"\n"}* Please enter Calvin email only.
            </Text>

            
            <TouchableOpacity style={globalStyles.loginBtn}
                onPress={() => {
                    navigation.navigate('login');
                }}
                                >
                <Text style={globalStyles.loginText}>Register</Text>

            </TouchableOpacity>

        </View>
    );
}