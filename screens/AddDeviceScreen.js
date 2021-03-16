import React, { useState } from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { updateUsers } from '../graphql/mutations';
import { getDevices, getUsers } from '../graphql/queries';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function AddDeviceScreen({ navigation }) {
    const [id, setID] = useState("");
    async function newDevice() {
      try{
        const device = await API.graphql(graphqlOperation(getDevices, {id})) // Checks if device is in database
        navigation.navigate("AddAnimal")
        // Attaches device to user account
        try{
          const email = Auth.user.attributes.email  
          const user = await API.graphql({ query: getUsers, variables: { id: email }})
          const userDevices = user.data.getUsers
          const tempDevices = userDevices.deviceID
          tempDevices.push(id)
          console.log(tempDevices)
          delete tempDevices.createdAt
          delete tempDevices.updatedAt
          await API.graphql(graphqlOperation(updateUsers, {input: {"id": email, "deviceID": tempDevices}}))
        } catch(error)
        {
          console.log("test", error)
        }
      } catch(error)
      {
        console.log(error)
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
                    value={id}
                    onChangeText={text => setID(text)}
                    placeholder="Device Code" 
                    placeholderTextColor="#003f5c"/>
            </View>

            
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={newDevice} >
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