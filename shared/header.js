import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { globalStyles, settings } from '../styles/globalStyles';
import About from "../screens/settings";

export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity style={settings.cornerbutton} onPress={() => navigation.navigate('Settings')}>
                <Image style={settings.cornerbutton} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png' }}></Image>
            </TouchableOpacity>
        </View>
    );
};