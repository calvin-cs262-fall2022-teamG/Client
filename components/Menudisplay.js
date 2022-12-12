import Menu from './Menu';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Menudisplay(props) {
    // array of objects 
    const menuData = props.menuData;

    
    const renderMenu = ({ item }) => (
        <Menu image={item.uri} text={item.itemname} smcost={item.smcost} mdcost={item.mdcost} lgcost={item.lgcost} />
    )
    return (

        <View style={menuSelectionStyle.container}>
            <View style={menuSelectionStyle.sectionHeading}>
            </View>
            <SafeAreaView style={menuSelectionStyle.menuList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={menuData}
                    renderItem={renderMenu}
                    keyExtractor={item => item.key}
                    horizontal={true}
                />
            </SafeAreaView>
        </View>
    )

}
