import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
    const [activeTab, setActiveTab] = useState("S");
    const [prices, setPrices] = React.useState("$4.29");
    // const price = 0
    // const getPrice = (data) => {
    //   // get list of all the semesters
    //   data.forEach((item) => {
    //     // if the semester is not in the set
    //     if (smCost) {
    //       price = smCost;
    //     }
    //     if (mdCost) {
    //       price = mdCost;
    //     }
    //     else if (lgCost){
    //       price = lgCost;
    //     }
    //   });
    // const fetchPrice = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://cs262teamgdatabaseservice.herokuapp.com/itemInfo"
    //     );
    //     const json = await response.json();
    //     getPrice(json);
    //   } catch (err) {
    //     alert(err);
    //   }
    // };
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 20 }}>
        <HeaderButton
            text="S"
            btnColor="black"
            textColor="white"
            // drinkPrice = {smCost}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            prices={prices}
            setPrices={setPrices}
            price="$4.29"
        />
        <HeaderButton
            text="M"
            btnColor="white"
            textColor="black"
            // drinkPrice = {mdCost}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            prices={prices}
            setPrices={setPrices}
            price="$5.29"
        />
        <HeaderButton
            text="L"
            btnColor="white"
            textColor="black"
            // price = {{lgCost}}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            prices={prices}
            setPrices={setPrices}
            price="$6.29"
        />
        </View>
    );
  }


const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
    // onPress={()=> props.setPrices(props.prices)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const changePrice = (props) => {
  <TouchableOpacity onPress={() => props.setPrices(props.price)}></TouchableOpacity>
}