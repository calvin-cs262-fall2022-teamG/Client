import * as React from 'react';
import { Icon, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'


import { customizeStyle, globalStyles } from '../styles/globalStyles';
import { menus } from '../database/menuDataworking';

const fontStyles = ["normal", "italic"];
// create customization page
export default function CustomizeScreen({ route, navigation }) {

    const { text, image, addon } = route.params;
    console.log(text)
    console.log(image)

    console.log(addon)
    return (
        <View style={customizeStyle.container}>
            <View style={customizeStyle.imageContainer}>
                <Image style={customizeStyle.image} source={{ uri: image }} />
            </View>
            <View style={customizeStyle.titleBlock}>
                <Text style={customizeStyle.itemText}>{text}</Text>
            </View>

            <View style={tw`flex-row bg-white justify-evenly py-2 border-t border-gray-100`}>
                {/* <Text>selection menu for customize your drinks or food</Text> */}
                <TouchableOpacity
                    style={tw`flex flex-row bg-black w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-white text-center`}>S</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row bg-white w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-black text-center`}>M</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row bg-white w-24 px-10 py-3 rounded-full text-center`}
                >
                    <Text style={tw`text-black text-center`}>L</Text>

                </TouchableOpacity>
            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Sugar Free</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => (handleAddTask())}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Sugar Light</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Whipped Cream</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Add Syrup</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Add Sauce</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={customizeStyle.addcontainer}>
                <View style={customizeStyle.additem}>
                    <Text style={customizeStyle.customText}>Decaf</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={customizeStyle.amount}>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>-</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>0</Text>
                            </View>
                            <View style={customizeStyle.addWrapper}>
                                <Text style={customizeStyle.addText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={customizeStyle.itemTextBlock}>
                <Text style={customizeStyle.priceText}>Total price: </Text>
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