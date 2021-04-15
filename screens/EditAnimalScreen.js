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
import { getDevices, getUsers } from '../graphql/queries';
import { updateDevices, updateUsers } from '../graphql/mutations';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function EditAnimalScreen({ navigation }) {
    const [id, setID] = useState("");
    const [name, setName] = useState('');
    const [animal, setAnimal] = useState('Horse');
    // Attaches animal name + species to last created device
    async function editAnimal() {
      try {
        const device = await API.graphql(graphqlOperation(getDevices, {id})) // Checks if device is in database
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
                    width: 300,
                    height: 300,
                    resizeMode: 'contain',
                    marginBottom: Platform.OS == 'ios' ? 50: 0
                  }}/>
             <View style={styles.inputView} >
                <TextInput 
                    style={styles.inputText}
                    value={id}
                    onChangeText={text => setID(text)}
                    placeholder="Device Code" 
                    placeholderTextColor="#003f5c"/>
            </View>
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
                  style={{height: Platform.OS === 'ios' ? 220 : 40, width: 300 }}
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
                style={styles.confirmBtn}
                onPress={editAnimal} >
                <Text style={{color: "white"}}>Confirm Edit</Text>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d84524',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
        width:"80%",
        backgroundColor:"#ffe4b5",
        borderRadius:25,
        height:50,
        marginBottom:Platform.OS === 'ios' ? 62 : 15,
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
      confirmBtn:{
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