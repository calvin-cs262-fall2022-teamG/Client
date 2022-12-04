
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Button } from "react-native";
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function HeaderTabs(props) {
    const [activeTab, setActiveTab] = useState('S');
    const [price, setPrice] = useState(0);
    const [selected, setSelected] = React.useState([]);
    const [color, setColor] = useState('black');
    const custom = [
        {key:'1', value:'Add Sugar'},
        {key:'2', value:'Sugar Free'},
        {key:'3', value:'Add Whipped Cream'},
        {key:'4', value:'Add shot'},
        {key:'5', value:'Decaf'},
        {key:'6', value:'Add Syrup'},
    ]
    
    return (
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 20}}>
            <Button color={color}
                title="S"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onPress={() => setPrice(4.29)}

            />
            <Button color={color}
                title="M"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onPress={() => setPrice(5.29)}
            />
            <Button color={color}
                title="L"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onPress={() => setPrice(6.29)}
            />
          </View>

          {/* <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={custom} 
                save="value"
                label="Customizations"
          /> */}

          

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


