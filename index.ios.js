import React, { Component } from 'react';
import Firebase from 'firebase'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class firebaseTest extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyD-OI96EVch-zKrMjd6_sNhjgesbDUQNMQ",
      authDomain: "fir-teste-b8ba1.firebaseapp.com",
      databaseURL: "https://fir-teste-b8ba1.firebaseio.com",
      projectId: "fir-teste-b8ba1",
      storageBucket: "fir-teste-b8ba1.appspot.com",
      messagingSenderId: "415055409304"
    };
    Firebase.initializeApp(config);
  }

  saveUser(){
   var user = Firebase.auth()
   var email = "nicollas@yahoo.com"
   var pssword = "nicollas12345"
   user.createUserWithEmailAndPassword(
     email,
     pssword
   ).catch(
     error => alert(error)
   )
  }
  
  checkUser(){
    var user = Firebase.auth()
    var actualUser = user.currentUser
    user.onAuthStateChanged(
      userState => {
        if (userState){
          alert("Logged in")
        }else {
          alert("logged off")
        }
      }
    )
  }

  logoffUser(){
    var user = Firebase.auth()
    user.signOut()
  }

  loginUser(){
    var pssword = "nicollas1234"
    var email = "nicollas@yahoo.com"
    var user = Firebase.auth()
    user.signInWithEmailAndPassword(
      email,pssword
    ).catch(
      error => alert(error)
    )
  }

  //   if (actualUser){
  //     alert("Logged in")
  //   }else {
  //     alert("logged off")
  //   }
  // }
  render() {
    return (
      <View>
        <Button title="Register User" onPress={() => this.saveUser()}/>
        <Button title="Check User" onPress={() => this.checkUser()}/>
        <Button title="Logoff User" onPress={() => this.logoffUser()}/>
        <Button title="Login User" onPress={() => this.loginUser()}/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('firebaseTest', () => firebaseTest);
