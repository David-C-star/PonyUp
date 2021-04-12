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

export default function RecoveryScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [password, setPassword] = useState('');
    async function setNewPassword() {
        try {
            await Auth.forgotPasswordSubmit(username, authCode, password);
            alert('Password successfully changed.')
            console.log(' Success');
            navigation.navigate('Login');
        } catch (error) {
            alert('Error with the input information. Please ensure that the information entered is correct and try again.')
            console.log(' Error Finding Email', error);
        }
    }

    return(
        <View style={styles.container}>
            <Image 
                source={require('../images/logo2.png')} 
                style={{
                    width: 300,
                    height: 300,
                    resizeMode: 'contain',
                    marginBottom: 50
                  }}/>
             <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={authCode}
                    onChangeText={text => setAuthCode(text)}
                    placeholder="Enter the temporary code" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholder="Enter the verified email" 
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Enter a new password" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={setNewPassword}>
                <Text style={{color: "white"}}>Set New Password</Text>
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
