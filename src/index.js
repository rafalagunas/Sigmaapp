/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Main extends Component {
    static navigationOptions = {
        header: null 
      };

      render() {
      const { navigate } = this.props.navigation;

      return (
      <View style={styles.container}>

        <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.button}> </TouchableOpacity>
        </View>
      </View>
    );
      }
    }

    const window = Dimensions.get('window');


export default Main;
  

const styles = StyleSheet.create({
  container: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },


  ButtonContainer:{
      marginTop: 100
  },
  button:{
      width: 200,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'grey'
  }

});