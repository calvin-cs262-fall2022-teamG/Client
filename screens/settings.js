import React, { useState } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { globalStyles, settings } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';



export default function SettingsScreen({ navigation }) {
  //settings page
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={settings.container}>
      <Image
        style={{ width: 250, height: 85, marginTop: 20, marginBottom: 25 }}
        source={require('../pics/appname.png')}
      />

      <View style={settings.Wraper}>
        <Text style={settings.text}>
          CS262 Fall 2022
        </Text>

        <Text style={settings.text}>
          ©Calvin University
        </Text>

        <Text style={settings.text}>
          Elaboration 2
        </Text>

      </View>


      <TouchableOpacity style={globalStyles.loginBtn}>

        <Text style={globalStyles.loginText}>Logout</Text>

      </TouchableOpacity>

      {/* 
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      */}

    </View>



  );
}

//https://codeburst.io/developing-multi-slider-switch-in-react-native-a15b83b29828 for size selection