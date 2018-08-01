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
  constructor(props){
    super(props)
    this.state = {
      pontos: []
    }
  }
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
      name: 'Nicollas'
    })
  }

  listData(){
    var pontos = Firebase.database().ref('pontos')
    pontos.on('value', (snapshot) => {

      var identifier = snapshot.val()
      this.setState({
        pontos: identifier 
      })
    } )
  }
  render() {
    return (
      <View>
        <Button title="Save Data" onPress={() => this.saveData()}/>
        <Button title="List Data" onPress={() => this.listData()}/>
        <Text>{this.state.pontos}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('firebaseTest', () => firebaseTest);
