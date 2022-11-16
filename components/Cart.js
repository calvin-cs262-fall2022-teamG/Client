import Orders from './Orders';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';

export default function Cart(props) {
    // array of objects 
    const menuData = props.menuData;

    const renderMenu = ({ item }) => (
        <Orders image={item.uri} text={item.text} addon={item.addon} />
    )

    return (
        <View style={menuSelectionStyle.container}>
            
            <SafeAreaView style={menuSelectionStyle.menuList}>
                <FlatList
                    data={menuData}
                    renderItem={renderMenu}
                    keyExtractor={item => item.key}
                    horizontal={true}
                />
            </SafeAreaView>
        </View>
    )
}
