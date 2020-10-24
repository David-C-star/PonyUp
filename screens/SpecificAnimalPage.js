import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../shared/header';
import Animal_Section from '../shared/animalSection';
import Information_Section from '../shared/informationSection';
import Map_Section from '../shared/mapSection';
import { useNavigation } from "@react-navigation/native"



class SpecificAnimalPage extends React.Component{
    render(){
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
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  
    content: {
    },
  });

export default SpecificAnimalPage