import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
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
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 25,
      color: 'black',
      marginTop: 20,
      marginBottom: 5,
    },
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
    },
    itemText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
  });