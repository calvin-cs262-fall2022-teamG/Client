import Drinks from './Drinks';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';

export default function Customs(props) {
    
    const menuData = props.menuData;

    const renderDrinksCustomize = ({ item }) => (
        <Drink sugarLight={item.sugarLight} sugarFree={item.sugarFree} WhippedCream={item.WhippedCream}
            AddSyrup={item.AddSyrup} AddSauce={item.AddSauce} Decaf={item.Decaf}/>
    )

    return (
        <View style={globalStyles.container}>
            <SafeAreaView style={menuSelectionStyle.menuList}>
                <FlatList 
                    data={menuData}
                    renderItem={renderMenu}
                    keyExtractor={item => item.key}
                />
            </SafeAreaView>
        </View>
    )
}
