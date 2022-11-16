import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
    const [activeTab, setActiveTab] = useState("S")
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 20 }}>
        <HeaderButton
            text="S"
            btnColor="black"
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <HeaderButton
            text="M"
            btnColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <HeaderButton
            text="L"
            btnColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
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