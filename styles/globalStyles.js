import { StyleSheet, TextInputBase } from 'react-native';

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
  helpText: {
    color: 'black',
    fontWeight: '500',
    fontSize: '16'
  },
  helpTextHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '22'
  },

  TextInput: {
    height: 50,
    width: 290,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  verticalScroll: {
    backgroundColor: "white",
    flex: 10,
  },
})

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
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
  container: {
    flex: 1,
    flexGrow: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 30,
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  sectionHeadingText: {
    fontSize: '30',
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 10,

  },
  menuTitleStyle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 0,
    backgroundColor: 'lightgrey'
  },
  itemPhoto: {
    width: 180,
    height: 180,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginEnd: 10,
    marginStart: 10,
    resizeMode: "contain",
  },
  itemText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginEnd: 30,
    marginStart: 30,
    resizeMode: "contain",
    fontSize: 17,
    
  },
  menuList: {
    flex: 1,
    flexGrow: 0,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  text: {
    backgroundColor: "#fff",
    height: 285,
    width: 225,
    marginBottom: 15,
  },
  titleContainer: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    resizeMode: "contain",
  },
  helpButton: {
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderColor: 'black',
    borderWidth:'2'
  },
  helpText: {
    fontSize: '20'
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
    justifyContent: 'flex-start',
  },
  toggleBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    alignItems: 'center',
    fontSize: 15,
  },
  Wraper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
    paddingHorizontal: 5,
    borderColor: '#953635',
    borderWidth: 2,
    width: '50%',
    marginTop: 20,
    borderRadius: 15,
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center'
  },

})

export const pastOrders = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  taskWraper: {
    paddingBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
    borderColor: '#953635',
    borderWidth: 2,
    width: '90%',
    marginTop: 20,
    borderRadius: 15,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#dddd'
  },
  sectionTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  text: {
    marginTop: 5,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '300',
  },
  orderText: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  customize: {
    fontSize: 20,
    fontWeight: '300',

    alignSelf: 'flex-start',
  },
  line: {
    borderWidth: 1,
  },

  loadingPage: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    resizeMode: "contain",
    textAlign: "center"
  },
  itemTextBlock: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },
  itemTextBlockTop: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 0,
  },

  containerCart: {
    height: 120,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
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
  titleTextCart: {
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

})
