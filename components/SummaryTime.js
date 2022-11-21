import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, pastOrders, settings, menuSelectionStyle } from '../styles/globalStyles';

export default function SummaryTime({ route }) {

  

  return (

    <View style={pastOrders.taskWraper}>
      <Text style={pastOrders.sectionTitle}> Test </Text>
      <Text style={pastOrders.sectionTitle}>Test: </Text>
      <View style={pastOrders.line} />
      <Text style={pastOrders.text}>Ready for pickup at:</Text>
      <Text style={pastOrders.text}>Test</Text>
    </View>
  )
}