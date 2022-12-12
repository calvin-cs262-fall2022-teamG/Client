import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Text
} from "react-native";
import { globalStyles } from "../styles/globalStyles";




export default function HelpScreen({ navigation }) {
  return (


    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.helpText}>  
          <Text style={globalStyles.helpTextHeader}>  HELP INSTRUCTIONS: {'\n'}</Text>
          <Text style={globalStyles.helpText}>
            With Peets4Knights, you can order your favorite Peet's Coffee items, customize them to your liking, then pick them up at the store. Here is how to do it.
          </Text>
          <Text style={globalStyles.helpTextHeader}>{'\n'}  DOWNLOAD AND CREATE ACCOUNT {'\n'}</Text>
          First, download the app from the app store of your choice. Then, open the app and create an account using your email address and a password.
          <Text style={globalStyles.helpTextHeader}>{'\n'}  ORDERING{'\n'}</Text>
          To place an order, find the item you would like then tap its picture. Next, you can choose from many options to customize your item. After you customize your item, tap the "Add to Cart" button at the bottom of the screen. The "Add to Cart" button will take you back to the menu screen. From there, you may check out or select another item to add to your cart.
          <Text style={globalStyles.helpTextHeader}>{'\n'}  CHECK OUT{'\n'}</Text>
          <Text>
            To place an order, find the item you would like then tap its picture. Next, you can choose from many options to customize your item. After you customize your item, tap the "Add to Cart" button at the bottom of the screen. The "Add to Cart" button will take you back to the menu screen. From there, you may check out or select another item to add to your cart.
            To check out, tap the "Cart" button at the bottom of the screen. On the Cart screen, you will see your ordered items and the total price. Next, tap the "Checkout" button at the bottom of the screen. Then, you will see your order summary and the estimated pickup time. The only thing left to do is make your way to Peet's Coffee to pick up your order and enjoy!
          </Text>
        </Text>
      </View>
    </View>

  )

}