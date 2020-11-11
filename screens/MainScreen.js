// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
  Text, 
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


export default function MainScreen({ navigation, updateAuthState }) { 

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  
  let listViewRef;
  const [dataSource, setDataSource] = useState([
    { id: 1, title: 'Animal' },
    { id: 2, title: 'Animal'},
    { id: 3, title: 'Animal' },
    { id: 4, title: 'Animal' },
    { id: 5, title: 'Animal' },
    { id: 6, title: 'Animal' },
    { id: 7, title: 'Animal' },
    { id: 8, title: 'Animal'},
    { id: 9, title: 'Animal' },
    { id: 10, title: 'Animal' },
    { id: 11, title: 'Animal' },
    { id: 12, title: 'Animal' },
    { id: 13, title: 'Animal' },
    { id: 14, title: 'Animal' },
    { id: 15, title: 'Animal' },
  ]);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Text style={ styles.itemStyle } onPress={() => getItem(item)}>
        {item.title}
        {' - '}
        {item.id}
        </Text>
        <View>
          <Image
            style={styles.animalImage}
            source={require('../images/horse.jpg')}
          />
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
          borderBottomWidth: 1, 
          borderBottomColor: 'grey',
          alignSelf:'stretch'
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    navigation.navigate('SpecificAnimal');
  };

  const renderHeader = () => (
    <View
      style={{
        backgroundColor: '#e05d06',
        height: 70,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
      }}>
      <View style={styles.itemStyleSearch}>
        <SearchBar
          placeholder="Search"
          inputStyle={{backgroundColor: 'white', height: 30}}
          platform="android"
          containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 20, height: 60}}
          round="true"
          onChangeText={console.log("")}
          />
      </View>
    </View>
  )
  
  const renderFooter = () => (
      <View>
        <Button
        title="Register a New Device"
        onPress={() => navigation.navigate('AddDevice')}
        color='grey'
        /> 
      </View>
  )

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e05d06'}}>
      <StatusBar backgroundColor="grey"/>
      <TouchableOpacity
         onPress={signOut}>
        <Text style={styles.forgot}>Sign Out</Text>
      </TouchableOpacity>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 30,
    fontSize: 23,
    fontWeight: 'bold',
  },
  container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
      },
  animalImage:{
        height: 60,
        width: 60,
        borderRadius: 30,
        right: -120
    },
    itemStyleSearch: {
      flex: 1,
      alignItems: 'center',
      height: 10,
      marginTop: 5,
      marginBottom: 10,
      justifyContent: 'center'
  },
    inputView:{
      borderRadius: 10,
      borderColor: '#333',
      backgroundColor: '#fff',
      width: 300,
      height: 30
    }
})

