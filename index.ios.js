import React, { Component } from 'react';
import Firebase from 'firebase'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
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

  saveData(){
    var employee = Firebase.database().ref('employee')
    employee.push().set({
      name: 'Nicollas',
      age: 27, 
      email: 'nicollas@ctrlplay.com.br'
    })
  }
  render() {
    return (
      <Button title="Save Data" onPress={() => this.saveData()}/>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('firebaseTest', () => firebaseTest);
