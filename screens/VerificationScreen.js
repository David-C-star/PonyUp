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
import { createUsers } from '../graphql/mutations';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function VerificationScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');
    async function confirmSignUp() {
      try {
        await Auth.confirmSignUp(username, authCode);
        alert('Account Created')
        console.log(' Code confirmed');
        navigation.navigate('Login');
        try{
          await API.graphql(graphqlOperation(createUsers, {input: {"id": username, "deviceID": [] }}))
        } catch(error)
        {
          console.log(error)
        }
      } catch (error) {
          alert('Verification code or email does not match. Please try again.')
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
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholder="Email" 
                    placeholderTextColor="#003f5c"/>
            </View>
             <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={authCode}
                    onChangeText={text => setAuthCode(text)}
                    placeholder="Enter the verification code" 
                    placeholderTextColor="#003f5c"/>
            </View>
            
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={confirmSignUp} >
                <Text style={{color: "white"}}>Confirm Sign up</Text>
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