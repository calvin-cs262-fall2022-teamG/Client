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
    marginEnd: 30,
  },
  itemText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  menuList: {
    flex: 6,
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
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 19,
    fontStyle: "italic",
    color: "#fff"
  }
})

export const customizeStyle = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 300,
    alignItems: "top",
    
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  itemText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Fjalla",
    color: "black",
},
})

