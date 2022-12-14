import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles, menuSelectionStyle } from '../styles/globalStyles';
import tw from 'tailwind-react-native-claanames'


export default function Drinks(props) {

const imageURI = props.image;
return (
    <View style={globalStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("customize", {text: props.text, image: imageURI})}>
            <Image style={menuSelectionStyle.itemPhoto} source={{uri: imageURI}}></Image>
            <View style={menuSelectionStyle.titleContainer}>
                <Text style={menuSelectionStyle.itemText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    </View>
)
}