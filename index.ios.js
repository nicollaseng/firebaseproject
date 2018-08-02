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
    var email = "nicollas@nicollas.com"
    var passwrd = "ni45"
    user.createUserWithEmailAndPassword(
      email,
      passwrd
    ).catch(
      error => {
        var errorMessage = " "
        if(error.code == "auth/weak-password") {
          errorMessage = 'Senha com no minimo 6 caracteres'
      }
        alert(errorMessage)
    }
    )
  }
  
  render() {
    return (
      <View>
        <Button title="Save Data" onPress={() => this.saveUser()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('firebaseTest', () => firebaseTest);
