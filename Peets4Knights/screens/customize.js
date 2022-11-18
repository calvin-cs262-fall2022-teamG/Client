import * as React from 'react';
import { Icon, Text, TouchableOpacity, View, Image } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

import tw from 'tailwind-react-native-classnames'

import HeaderTabs from '../components/Size';
import { customizeStyle, globalStyles } from '../styles/globalStyles';
import { menus } from '../database/menuDataworking';

const fontStyles = ["normal", "italic"];

// create customization page
export default function CustomizeScreen({ route, navigation }) {

    const { text, image, addon } = route.params;
    console.log(text)
    console.log(image)
    const [activeTab, setActiveTab] = React.useState("Delivery");
    const [selected, setSelected] = React.useState([]);
  
    const custom = [
        {key:'1', value:'Add Sugar'},
        {key:'2', value:'Sugar Free'},
        {key:'3', value:'Add Whipped Cream'},
        {key:'4', value:'Add shot'},
        {key:'5', value:'Decaf'},
        {key:'6', value:'Add Syrup'},
    ]

    console.log(addon)
    return (
        <View style={customizeStyle.container}>
            <View style={customizeStyle.imageContainer}>
                <Image style={customizeStyle.image} source={{ uri: image }} />
            </View>
            <View style={customizeStyle.titleBlock}>
                <Text style={customizeStyle.itemText}>{text}</Text>
            </View>

            <HeaderTabs/>
  
            {/* <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>sugar</Text>
                </View>
            </View>
            
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Whipped Cream</Text>
                </View>

            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Syrup</Text>
                </View>
            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Shots</Text>
                </View>
            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Decaf</Text>
                </View>
            </View> */}
            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={custom} 
                save="value"
                label="Categories"
            />

            <View style={customizeStyle.itemTextBlock}>
                <Text style={customizeStyle.priceText}>Total price: $4.29</Text>
            </View>


            <View style={customizeStyle.itemTextBlock}>
                <TouchableOpacity style={customizeStyle.checkoutButton}
                    onPress={() => {
                        navigation.navigate('cart');
                    }}>
                    <Text style={globalStyles.loginText}>Add to cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={customizeStyle.cartButton}
                    onPress={() => {
                        navigation.navigate('summary');
                       
                    }}
                >
                    <Text style={globalStyles.loginText}>Checkout</Text>

                </TouchableOpacity>

            </View>


        </View>
    );
}