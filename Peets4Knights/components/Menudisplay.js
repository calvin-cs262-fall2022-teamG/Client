import Menu from './Menu';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';

export default function Semester(props) {
    
    const menuData = props.menuData;

    const renderMenu = ({ item }) => (
        <Menu image={item.uri} text={item.text} />
    )

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.sectionHeading}>
                <Text style={globalStyles.sectionHeadingText}>{props.text}</Text>
            </View>
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
