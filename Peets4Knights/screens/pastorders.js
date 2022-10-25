import React, { useState } from 'react';
import { Switch, Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { globalStyles, pastOrders, settings } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';

/* Past orders page WIP */

export default function PastOrdersScreeen({ navigation }) {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={pastOrders.container}>

      <View style={pastOrders.taskWraper}>
        <Text style={pastOrders.sectionTitle}> Order #1 </Text>

      </View>

      <View style={pastOrders.taskWraper}>
        <Text style={pastOrders.sectionTitle}> Order #2 </Text>

      </View>


      <TouchableOpacity style={globalStyles.loginBtn}
        onPress={() => {
          navigation.navigate('order');
          return 0
        }}
      >
        <Text style={globalStyles.loginText}>Test Notifications</Text>

      </TouchableOpacity>

    </View >

  );
}
