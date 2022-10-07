import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 30,
  },
  sectionHeadingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",

  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#800000",
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  verticalScroll: {
    backgroundColor: "white",
    flex: 10,
  },
})

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButton: {
    padding: 10,
    position: 'relative',
    marginTop: '20%',
    width: '100%',
  },

})

export const LoginStyle = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
})

export const regStyle = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
})


export const menuSelectionStyle = StyleSheet.create({
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginEnd: 10,
    marginStart: 10,
  },
  itemText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginEnd: 30,
    marginStart: 30,
    resizeMode: "contain"
  },
  menuList: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  text: {
    backgroundColor: "#fff",
    height: 285,
    width: 225,
    marginBottom: 15
  },
  titleContainer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    resizeMode: "contain"
  }
})

export const customizeStyle = StyleSheet.create({
  imageContainer: {
    flex: 5,
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    alignContent: "center"
  },
  itemText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Fjalla",
    color: "black",
    marginLeft: 30,
  },
  customText: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: "30%",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  itemTextBlock: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  checkoutButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#800000",
  },
  cartButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  addWrapper: {
    width: 25,
    height: 25,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 10,
  },
  addText: {},
  amount: {
    flex: 1.5,
    flexDirection: "row",
  },
  plusminus: {
    flex: 7,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  addcontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  additem: {
    width: '60%' // is 50% of container width
  },
  priceText: {
    fontSize: 19,
    fontWeight: "bold",
    alignItems: "center",
  }
})

export const settings = StyleSheet.create({
  cornerbutton: {
    width: 35,
    borderRadius: 15,
    height: 35,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
