import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cartItemStyle, globalStyles, menuSelectionStyle } from '../styles/globalStyles';



export default function CartItem(props) {

const imageURI = props.image;
return (
    <View style={globalStyles.container}>
    <View style = {cartItemStyle.itemContainer}>
        
    </View>
    
    
    </View>
)
}