import {
        StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity
      } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';


export default function Menus(props) {

    const navigation = useNavigation(); 

    const imageURI = props.image;
    return (
        <View style={menuSelectionStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate("customize", {text: props.text, image: imageURI, addons: props.addons})}>
                <Image style={menuSelectionStyle.itemPhoto} source={{uri: imageURI}}></Image>
                <View style={menuSelectionStyle.titleContainer}>
                    <Text style={menuSelectionStyle.itemText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}