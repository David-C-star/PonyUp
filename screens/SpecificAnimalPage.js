import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native"

import Header from '../shared/header';
import Animal_Section from '../shared/animalSection';
import Information_Section from '../shared/informationSection';
import Map_Section from '../shared/mapSection';



export default function SpecificAnimalPage({route, navigation}) {
  const deviceInfo = route.params;
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
            <Animal_Section id = {deviceInfo["id"]}/>
            <Information_Section contraction={deviceInfo["contraction"]} temp={deviceInfo["temperature"]}/>
            <Map_Section latlong={deviceInfo["gps"]}/>

          </View>
    
        </View>
        );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e05d06',
      
    },
  
    content: {
      backgroundColor: '#e05d06'
    },

    header:{
      height: 100,
      paddingRight: 20,
      backgroundColor: '#e05d06',
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