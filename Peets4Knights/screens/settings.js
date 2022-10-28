import React, { useState } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { globalStyles, settings } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';




export default function SettingsScreen({ navigation }) {
  //settings page
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={homeStyle.loginContainer}>
      <Image
        style={{ width: 250, height: 85, marginTop: 20 }}
        source={require('../pics/appname.png')}
      />

      <Text>
        Settings Page WIP
      </Text>

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