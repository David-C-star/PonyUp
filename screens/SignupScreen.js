import React, { useState } from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function signUp() {
    try {
      await Auth.signUp({ username, password });
      console.log(' Sign-up Confirmed');
      alert('A verification code has been sent to your email account.')
      navigation.navigate('Verification');
    } catch (error) {
      alert(error.message)
      console.log(' Error signing up...', error);
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
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholder="Enter new email" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Enter new password" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <TouchableOpacity 
                style={styles.forgot}
                onPress={() => navigation.goBack()}>
                <Text style={styles.forgot}>Login Instead</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={signUp}>
                <Text style={{color: "white"}}>Sign Up</Text>
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
