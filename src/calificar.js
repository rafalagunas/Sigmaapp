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
  Dimensions,
  ScrollView,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
console.disableYellowBox = true;


class Calificar extends Component {
    static navigationOptions = {
        title: "Calificación" 
      };
      constructor(props) {
        super(props);
        this.state = {
          Rafa: null,
          Guero: null,
          Kevin:null,
          Pamela:null,
          Tuz: null,
          Canepa: null,
          Alan: null,
          Joel: null,
          Gerardo: null,
          Jose: null,
          visible: false,
          Total:0
        };

        this.Calificar   = this.Calificar.bind(this);

      }  


      Rafa = (texto) =>{
        this.setState({ Rafa :Number(texto)});
     
      }
      Guero = (texto) =>{
        this.setState({ Guero :Number(texto)});
                
      }
      Kevin = (texto) =>{
        this.setState({ Kevin :Number(texto)});
      }
      Pamela = (texto) =>{
        this.setState({ Pamela :Number(texto)});
                
      }
      Tuz = (texto) =>{
        this.setState({ Tuz :Number(texto)});
                
    }
      Canepa = (texto) =>{
        this.setState({ Canepa :Number(texto)});
      }
      Alan = (texto) =>{
        this.setState({ Alan :Number(texto)});
                
      }
      Joel = (texto) =>{
        this.setState({ Joel :Number(texto)});
                
      }
      Gerardo = (texto) =>{
        this.setState({ Gerardo :Number(texto)});
                
      }
      Jose = (texto) =>{
        this.setState({ Jose :Number(texto)});
                

      }


      Calificar(e){

          if(this.state.Rafa > 0 && this.state.Rafa <11 && this.state.Guero > 0 && this.state.Guero <11 && this.state.Kevin > 0 && this.state.Kevin <11 
            && this.state.Pamela > 0 && this.state.Pamela <11 && this.state.Tuz > 0 && this.state.Tuz <11 && this.state.Canepa > 0 && this.state.Canepa <11
             && this.state.Alan > 0 && this.state.Alan <11 && this.state.Joel > 0 && this.state.Joel <11 && this.state.Gerardo > 0 && this.state.Gerardo <11 
             && this.state.Jose > 0 && this.state.Jose <11 
            ){
                this.setState({
                    Total: this.state.Rafa +  this.state.Guero +  this.state.Kevin +  
                    this.state.Pamela +  this.state.Tuz + this.state.Canepa +
                    this.state.Alan + this.state.Joel + this.state.Gerardo + this.state.Jose 
                })


                var promedio = (( this.state.Rafa +  this.state.Guero +  this.state.Kevin +  
                    this.state.Pamela +  this.state.Tuz + this.state.Canepa +
                    this.state.Alan + this.state.Joel + this.state.Gerardo + this.state.Jose) /10)
                
                if(this.state.Rafa >= 7){
                    var StatusRafa="Aprobado"
                }
                if(this.state.Guero >= 7){
                    var StatusGuero= "Aprobado"
                }
                if(this.state.Kevin >= 7){
                    var StatusKevin= "Aprobado"
                }
                if(this.state.Pamela >= 7){
                    var StatusPamela= "Aprobado"
                }
                if(this.state.Tuz >= 7){
                    var StatusTuz= "Aprobado"
                }
                if(this.state.Canepa >= 7){
                    var StatusCanepa= "Aprobado"
                }
                if(this.state.Alan >= 7){
                    var StatusAlan= "Aprobado"
                }
                if(this.state.Joel >= 7){
                    var StatusJoel= "Aprobado"
                }
                if(this.state.Gerardo >= 7){
                    var StatusGerardo= "Aprobado"
                }
                if(this.state.Jose >= 7){
                    var StatusJose= "Aprobado"
                }

                if(this.state.Rafa < 7){
                    var StatusRafa="Reprobado"
                }
                
                if(this.state.Guero < 7){
                    var StatusGuero= "Reprobado"
                }
                if(this.state.Kevin < 7){
                    var StatusKevin= "Reprobado"
                }
                if(this.state.Pamela < 7){
                    var StatusPamela= "Reprobado"
                }
                if(this.state.Tuz < 7){
                    var StatusTuz= "Reprobado"
                }
                if(this.state.Canepa < 7){
                    var StatusCanepa= "Reprobado"
                }
                if(this.state.Alan < 7){
                    var StatusAlan= "Reprobado"
                }
                if(this.state.Joel < 7){
                    var StatusJoel= "Reprobado"
                }
                if(this.state.Gerardo < 7){
                    var StatusGerardo= "Reprobado"
                }
                if(this.state.Jose < 7){
                    var StatusJose= "Reprobado"
                }
                    alert("El promedio del grupo es de:" + promedio + "\n" +
                     "\n" + "Rafa está:" +StatusRafa + "\n" +
                     "\n" +"Guero está:" +StatusGuero + "\n"+ 
                     "\n" +"Kevin está:" +StatusKevin + "\n"+
                     "\n" +"Pamela está:" +StatusPamela + "\n"+
                     "\n" +"Tuz está:" +StatusTuz + "\n"+ 
                     "\n" +"Canepa está:" +StatusCanepa + "\n"+
                     "\n" +"Alan está:" +StatusAlan + "\n"+
                     "\n" +"Joel está:" +StatusJoel + "\n"+
                     "\n" +"Gerardo está:" +StatusGerardo + "\n"+
                     "\n" +"Jose está:" +StatusJose + "\n"
                )
                    
            }

            else{
  
                alert("Verifica que las calificaciones sean en un rango del 0 al 10")
            }
      }

      render() {
      const { navigate } = this.props.navigation;

      return (
      <ScrollView style={styles.container}>
            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Rafa: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Rafa}
                    value= {this.state.Rafa}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

           <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Guero: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Guero}
                    value= {this.state.Guero}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Kevin: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Kevin}
                    value= {this.state.Kevin}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>


            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Pamela: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Pamela}
                    value= {this.state.Pamela}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Tuz: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Tuz}
                    value= {this.state.Tuz}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

                        <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Canepa: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Canepa}
                    value= {this.state.Canepa}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Alan: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Alan}
                    value= {this.state.Alan}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

                        <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Joel: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Joel}
                    value= {this.state.Joel}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

            <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Gerardo: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Gerardo}
                    value= {this.state.Gerardo}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>

                        <View style={styles.Row}> 
            <View>
            <Text style={styles.Name}> Jose: </Text>
            </View>
            <TextInput 
                    style={styles.rateInput}
                    placeholder="Introduce su calificación"
                    onChangeText={this.Jose}
                    value= {this.state.Jose}
                    keyboardType="numeric"
                    maxLength={2} />    
            </View>



 <View style={styles.ButtonContainer}>
        <TouchableOpacity 
        onPress={(e)=>this.Calificar(e)}
        style={styles.button}>  
            <Text style={styles.ButtonText}> Calificar</Text>
        </TouchableOpacity>
        </View>


      </ScrollView>
    );
      }
    }

    const window = Dimensions.get('window');


export default Calificar;
  

const styles = StyleSheet.create({
  
  Title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000000"
},
rateInput:{
    fontSize: 11,
    color: "#000000",
    width: 180,
    borderBottomWidth:1,
    borderColor: "#000000"

},  
    container: {
    width: window.width * 1,
    height: window.height * 1,
    backgroundColor: '#FFF',
  },
  PromedioContainer: {
    paddingBottom: 200,
    paddingTop: 200,
    backgroundColor: '#FFF',
  },
  Row:{
    marginTop: 10,
    flexDirection: 'row',
    width: 200,
    height: 40,
    alignItems: 'center',
    paddingLeft: window.width * .25,
},
ButtonContainer:{
    marginTop: 30,
    paddingBottom: 50,
},
  button:{
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: "center",
      borderColor: '#FFC107',
      borderWidth: 2,
      padding:2,
      width: 150,
      height: 50,
      alignSelf: 'center'
  },
  Name: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000000"
},
  ButtonText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#000000"
  }

});