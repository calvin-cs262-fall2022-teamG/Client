import Menu from './Menu';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';

export default function Menudisplay(props) {
    // array of objects 
    const menuData = props.menuData;

    const renderMenu = ({ item }) => (
        <Menu image={item.uri} text={item.itemname}  />
    )

    return (
        <View style={menuSelectionStyle.container}>
            <View style={menuSelectionStyle.sectionHeading}>
                <Text style={menuSelectionStyle.sectionHeadingText}>{props.itemname}</Text>
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
