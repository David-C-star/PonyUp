import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../shared/header';
import Animal_Section from '../shared/animalSection';
import Information_Section from '../shared/informationSection';
import Map_Section from '../shared/mapSection';



export default function SpecificAnimalPage({route}) {
        const deviceInfo = route.params;
        return(  
          <View style={styles.container}>
          <Header />
    
          <View style={styles.content}>
            {/* form */}
            <Animal_Section id={deviceInfo["id"]}/>
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
  });
