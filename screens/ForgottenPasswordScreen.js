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


const ForgotPasswordScreen = ({
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
                    placeholder="Enter registered email" 
                    placeholderTextColor="#003f5c"/>
            </View>
            <TouchableOpacity 
                style={styles.forgot}
                onPress={() => {
                    alert('Recovery link sent!');
                    navigation.navigate("Recovery");}
                    }>
                <Text style={styles.forgot}>Get Recovery Code</Text>
            </TouchableOpacity>
        </View>

    );
};

export default ForgotPasswordScreen;

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