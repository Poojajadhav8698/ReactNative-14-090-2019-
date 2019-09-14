/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity } from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  
  constructor() {

    super();

    this.tmpArray = [

    { id: 1, name: 'Test 1', age: 27, city: 'Pune', mark: 89, suggestions: [4, 5, 7] },
    { id: 2, name: 'Veer', age: 23, city: 'Surat', mark: 43, suggestions: [1, 3, 7] },
    { id: 3, name: 'Vikas', age: 21, city: 'Banglore', mark: 65, suggestions: [2, 6, 9] },
    { id: 4, name: 'Ravi', age: 27, city: 'Mumbai', mark: 50, suggestions: [1, 4, 8] },
    { id: 5, name: 'Sachin', age: 23, city: 'Chennai', mark: 44, suggestions: [3, 11, 4] },

  


    ];

  }

  showArrayItem = (item) => {

    Alert.alert(item);

  }
  
  render() {
    return (
      <View style={styles.MainContainer}>

        <ScrollView>

          {
            this.tmpArray.map((item, key) => (

              <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this, item.name)}>

                <Text style={styles.TextStyle} > Name = {item.name} </Text>

                <Text style={styles.TextStyle} > Age = {item.age} </Text>

                <Text  style={styles.TextStyle} > city = {item.city} </Text>
                

                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </ScrollView>

      </View>

     
      


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn : {
    backgroundColor : 'skyblue',
    height : 40,
    color : '#fff',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop: 50
  }
});
