
import React, { useState } from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export default function LoginScreen({ navigation, updateAuthState }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function signIn() {
    try {
        await Auth.signIn(username, password);
        console.log(' Success');
        updateAuthState('loggedIn');
        } catch (error) {
            alert(error.message)
            console.log(' Error signing in...', error);
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
                    placeholder="Email" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Password" 
                    placeholderTextColor="#003f5c"
                    secureTextEntry/>
            </View>
            <TouchableOpacity 
                style={styles.forgot}
                onPress={() => navigation.navigate("Password")}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={signIn}>
                <Text style={{color: "white"}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.forgot}>Signup</Text>
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