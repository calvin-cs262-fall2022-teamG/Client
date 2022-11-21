import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, pastOrders, settings, menuSelectionStyle } from '../styles/globalStyles';

export default function SummaryTime(props) {

  return (
    <View style={pastOrders.taskWraper}>
          <Text style={pastOrders.sectionTitle}> Order from: </Text>
          <Text style={pastOrders.sectionTitle}>props.orderTime</Text>
          <View style={pastOrders.line} />
          <Text style={pastOrders.text}>Ready for pickup at:</Text>
          <Text style={pastOrders.text}>props.pickup</Text>
        </View>
  )
}