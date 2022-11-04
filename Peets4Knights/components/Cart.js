import Orders from './Orders';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';

export default function Cart(props) {
    // array of objects 
    const myCart = props.menuData;

    const renderCart = ({ item }) => (
        <Orders image={item.uri} text={item.text} addon={item.addon} />
    )

    return (
        <View style={menuSelectionStyle.container}>
            
            <SafeAreaView style={menuSelectionStyle.menuList}>
                <FlatList
                    data={myCart}
                    renderItem={renderCart}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </SafeAreaView>
        </View>
    )
}
