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
                <Text style={styles.Title}> Sigmaapp</Text>
        <View style={styles.ButtonContainer}>
        <TouchableOpacity 
        onPress={()=> navigate('Rate')}
        style={styles.button}>
            <Text style={styles.ButtonText}> Calificar alumnos {"\n"} "Introducción a los {"\n"} sistemas de información"</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
      }
    }

    const window = Dimensions.get('window');


export default Main;
  

const styles = StyleSheet.create({
  
  Title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000000"
},
    container: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  ButtonContainer:{
      marginTop: 30
  },
  button:{
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: "center",
      borderColor: '#FFC107',
      borderWidth: 2,
      padding:30
  },
  ButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000000"
  }

});