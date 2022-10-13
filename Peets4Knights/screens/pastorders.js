import React, { useState } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { globalStyles, settings } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

/* Using settings page as place holder */

export default function PastodersScreeen({ navigation }) {
  //settings page
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text>
        Future Orders Page WIP
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />


    </View >



  );
}
