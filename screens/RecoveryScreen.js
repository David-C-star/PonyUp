import React from 'react';
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

import { useNavigation } from "@react-navigation/native";


const PasswordRecoveryScreen = ({
    state={
        email:"",
        password:""
    }
}) => {
    const navigation = useNavigation();
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
                    placeholder="Enter the temporary code" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Enter a new password" 
                    placeholderTextColor="#003f5c"
                    secureTextEntry/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Confirm password" 
                    placeholderTextColor="#003f5c"
                    secureTextEntry/>
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => {
                        alert("Password set, please login.");
                        navigation.popToTop();}}>
                <Text style={{color: "white"}}>Set New Password</Text>
            </TouchableOpacity>
        </View>

    );
};

export default PasswordRecoveryScreen;

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