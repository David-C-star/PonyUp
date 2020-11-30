import { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
import { createDevices, updateDevices } from '../graphql/mutations';


export default function AddDeviceScreen({ navigation }) {
    const [number, setNumber] = useState('');

    const addDevice = async () => {
      try{
          var deviceInfo={
              "contraction": "",
              "createdAt": "",
              "description": "",
              "gps": "",
              "id": "",
              "name": "",
              "temperature": "",
              "updatedAt": ""
          }
          const device = await API.graphql(graphqlOperation(createDevices,deviceInfo));
      }catch(error){
        console.log("error while adding the device: ", error);
      }
    }
    return(
        <View style={styles.container}>
            <Image 
                source={require('../images/logo2.png')} 
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'contain',
                    marginBottom: 50
                  }}/>
             <View style={styles.inputView} >
                <TextInput 
                    style={styles.inputText}
                    value={number}
                    onChangeText={text => setNumber(text)}
                    placeholder="Device Code" 
                    placeholderTextColor="#003f5c"/>
            </View>

            
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => navigation.navigate('AddAnimal')} >
                <Text style={{color: "white"}}>Confirm Device</Text>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e05d06',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
        width:"80%",
        backgroundColor:"#ffe4b5",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      forgot:{
        color:"black",
        fontSize:15
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#191919",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      }
  });