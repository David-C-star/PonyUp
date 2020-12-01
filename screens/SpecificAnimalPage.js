import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../shared/header';
import Animal_Section from '../shared/animalSection';
import Information_Section from '../shared/informationSection';
import Map_Section from '../shared/mapSection';



export default function SpecificAnimalPage() {
        return(
          <View style={styles.container}>
          <Header />
    
          <View style={styles.content}>
            {/* form */}
            <Animal_Section />
            <Information_Section />
            <Map_Section />

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