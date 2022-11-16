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

        <Text style={pastOrders.sectionTitle}> Order DATE </Text>

        <View style={pastOrders.line} />

        {/*Needs to be divided up and refrenced for each drink on order */}
        <Text style={pastOrders.text}>
          -Cold Brew{'     '}
        </Text>


        <Text style={pastOrders.customize}>
          {'    '}+Light Vanilla Syrup
        </Text>

        <Text style={pastOrders.total}>
          Total: $4.30
        </Text>

      </View>



      <View style={pastOrders.taskWraper}>

        <Text style={pastOrders.sectionTitle}> Order DATE </Text>

        <View style={pastOrders.line} />

        <Text style={pastOrders.text}>
          -Latte
        </Text>

        <Text style={pastOrders.customize}>
          {'    '}+Espresso Shot
        </Text>

        <Text style={pastOrders.text}>
          -Mocha
        </Text>

        <Text style={pastOrders.customize}>
          {'    '}+Choclae Drizzle
        </Text>

        <Text style={pastOrders.customize}>
          {'    '}+Oat Milk
        </Text>

        <Text style={pastOrders.total}>
          Total: $9.85
        </Text>

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
