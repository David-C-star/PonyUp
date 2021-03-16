import React, { useState } from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image    
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { getUsers } from '../graphql/queries';
import { updateDevices } from '../graphql/mutations';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function AddAnimalScreen({ navigation }) {
    const [name, setName] = useState('');
    const [animal, setAnimal] = useState('Horse');
    // Attaches animal name + species to last created device
    async function newAnimal() {
      try {
        const email = Auth.user.attributes.email  
        const user = await API.graphql({ query: getUsers, variables: { id: email }})
        const userDevices = user.data.getUsers
        const tempDevices = userDevices.deviceID
        const newDeviceID = tempDevices[tempDevices.length - 1]
        console.log(newDeviceID)
        navigation.navigate('Main');
        try{
          await API.graphql(graphqlOperation(updateDevices, {input: {"id": newDeviceID, "description": animal, "name": name}}))
        } catch(error) {
          console.log("inner", error)
        }
      } catch (error) {
          console.log(error)
      };
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
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Animal Name" 
                    placeholderTextColor="#003f5c"/>
            </View>
             <View style={styles.inputView} >
                <Picker
                  style={{height: 40, width: 300 }}
                  selectedValue={animal}
                  onValueChange={(itemValue, itemIndex) => setAnimal(itemValue)}
                  textStyle={{fontSize: 22}}
                  prompt={'Select an Animal'}
                >
                <Picker.Item label="Horse" value="Horse" />
                <Picker.Item label="Dog" value="Dog" />
              </Picker>
            </View>
            
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={newAnimal} >
                <Text style={{color: "white"}}>Confirm Animal</Text>
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