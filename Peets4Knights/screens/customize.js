import * as React from 'react';
import { Icon, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { customizeStyle, globalStyles } from '../styles/globalStyles';
import { menus } from '../database/menuDataworking';
import AsyncStorage from "@react-native-async-storage/async-storage"

const fontStyles = ["normal", "italic"];
let myCart = [];

// create customization page
export default function CustomizeScreen({ route, navigation }) {
    // const [modalVisible, setModalVisible] = useState(false);
    // const items = useSelector((state) => state.cartReducer.selectedItems.items);
    // const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);
    // const totalUSD = total.toLocaleString('en', {
    //     style: "currency",
    //     currency:"USD",
    //    });
      
    //    const checkoutModalContent = () => { 
    //     return(
    //     <View style = {{
    //       flex: 1,
    //       justifyContent:'center',
    //       alignItems: "center",
    //       marginTop: 30,
    //     }}>
    //     <View style ={{
    //       backgroundColor:"black",
    //       padding: 10,
    //       borderRadius: 30,
    //       Width: 150,
    //       alignItems: "center",
    //     }}>
    //     <TouchableOpacity onPress={()=> setModalVisible(false)}>
    //     <>
    // <Modal animationType ='slide' visible ={modalVisible}
    // transparent = {true}
    // onRequestClose ={() => setModalVisible(false)}>
    //   {checkoutModalContent()}
    //   </Modal>
    // {total ? (
    // <View>
    //   {product ? product.map((data, index)=>{
    //   return <text>{data.productName}</text>;
    //   })
    // : null} 
    //   <Text>My Cart</Text>
    // </View>
    // ): (<></>)}
    // </>
    //     <Text style={{color:'white'}}>Checkout</Text>
    //     </TouchableOpacity>
    //     </View>
    //     </View>
    //   )}


    const { text, image, addon } = route.params;
    const currentItem = { text: text, image: image, addon: addon };
    // const dispatch = useDispatch();


    // const isItemInCart = (currentItem, cartItems) =>
    //     Boolean(cartItems.find((item) => item.title === currentItem.title));

    // const selectItem = (item) =>
    //     dispatch({
    //         type: 'ADD_TO_CART',
    //         payload: { ...item },
    //     });
    // const cartItems = useSelector(
    //     (state) => state.cartReducer.selectedItems.items
    // );
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
                        myCart.push(currentItem)
                        console.log(myCart)
                        //navigation.navigate('cart', {myCart : props.myCart});
                    }
                    }>
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