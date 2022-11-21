import { StyleSheet, Text, View, Image } from "react-native";

export default function SummaryCard(props) {

  return (
    <View style={styles.container}>
      <View style={styles.flexWrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageContent} source={{ uri: props.image }} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{props.text}</Text>
            {/* Take total from  */}
            <Text style={styles.sizeText}>Small</Text>
          <Text style={styles.totalText}>$4.30</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20 ,
  },
  flexWrapper: {
    height: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1.2,
  },
  imageContent: {
    borderRadius: 20,
    flex: 1,
    padding: 15,
    resizeMode: "contain",
  },
  textContainer: {
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flex: 2,
    padding: 15,
    justifyContent: "space-around",
  },
  titleContainer: {
    flex: 1.7,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "500",
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "500",
  },
  totalText: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: 'flex-end',
  },
  directorText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionText: {
    flex: 2,
  },
});