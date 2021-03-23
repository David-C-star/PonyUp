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

export default function ForgotPasswordScreen({ navigation} ) {
    const [username, setUsername] = useState('');
    async function forgotPassword() {
        try {
            await Auth.forgotPassword(username);
            alert('A verification code has been sent to your email account.')
            console.log(' Success');
            navigation.navigate('Recovery');
        } catch (error) {
            console.log(' Error Finding Email', error);
            alert('Email not found. Please enter a valid email')
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
                    placeholder="Enter registered email" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={forgotPassword}>
                <Text style={styles.forgot}>Get Recovery Code</Text>
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
        color:"white",
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
