import React, { useEffect, useState } from 'react';
import { 
  Platform, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  BackHandler, 
  Button, 
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native"

import Header from '../shared/header';
import Animal_Section from '../shared/animalSection';
import Information_Section from '../shared/informationSection';
// import Map_Section from '../shared/mapSection';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function SpecificAnimalPage({route, navigation, updateAuthState}) {
  var deviceInfo = route.params;

        return(
          <View style={styles.container}>

            <View style={styles.header}>
              <View style={styles.itemStyleText}>
                    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
                        <Image
                        style={styles.tinyImage}
                        source={require('../images/backButton.png')}
                        />
                    </TouchableHighlight>
                </View>
                <Header />
            </View>
    
          <View style={styles.content}>
            {/* form */}
            <Animal_Section id = {deviceInfo["id"]} name = {deviceInfo["name"]}/>
            <Information_Section contraction={deviceInfo["contraction"]} temp={deviceInfo["temperature"]} accx={deviceInfo["accx"]}
            accy={deviceInfo["accy"]} accz={deviceInfo["accz"]} gyx={deviceInfo["gyx"]} gyy={deviceInfo["gyy"]} gyz={deviceInfo["gyz"]}/>
          </View>
        </View>
        );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d84524',
      
    },
  
    content: {
      backgroundColor: '#d84524'
    },

    header:{
      height: Platform.OS === 'ios' ? 150 : 100,
      paddingRight: 20,
      backgroundColor: '#d84524',
      alignItems: 'center',
      flexDirection: 'row',
  },

  itemStyleText: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },

  itemStyleSearch: {
      flex: 3,
      alignItems: 'center',
      height: '90%',
      marginTop: 5,
      marginBottom: 10,
      justifyContent: 'center'
  },

  tinyImage: {
      width: 20,
      height: 20,
      resizeMode: 'stretch'
  }
  });