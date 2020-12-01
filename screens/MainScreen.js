// import React in our code
import React, { useEffect, useState } from 'react';

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
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
import {getUsers, listDevicess} from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

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

  const[devices, setDevices] = useState([]);

  useEffect(()=>{
    fetchDevice();
  }, [])

  const fetchDevice = async () => {
    try{
      const email = Auth.user.attributes.email
      const user = await API.graphql({ query: getUsers, variables: { id: email }})
      const userDevices = user.data.getUsers
      const tempDevices = userDevices.deviceID
      console.log(tempDevices)
      const deviceData = await API.graphql(graphqlOperation(listDevicess));
      const deviceList = deviceData.data.listDevicess.items;
      var i;
      for (i = 0; i < deviceList.length; i ++) {
        if(!tempDevices.includes(deviceList[i].id))
        {
          console.log("removed", deviceList[i].id)
          deviceList.splice(i, 1)
          i = i - 1 
        }
      }
      console.log(deviceList)
      setDevices(deviceList);
      //console.log("Devices:", deviceList);
    }catch(error){
      console.log("error while fetching devices: ", error);
    }
  }
  

  const createSubscription = API.graphql(
    graphqlOperation(subscriptions.onCreateDevices)
    ).subscribe({
      next: () => {
        fetchDevice();
      }
    });

  const updateSubscription = API.graphql(
    graphqlOperation(subscriptions.onUpdateDevices)
    ).subscribe({
      next: () => {
        fetchDevice();
      }
    });

  const deleteSubscription = API.graphql(
    graphqlOperation(subscriptions.onDeleteDevices)
    ).subscribe({
      next: () => {
        fetchDevice();
      }
    });

  let listViewRef;

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1
        }}>
        <Text style={ styles.itemStyle } onPress={() => getItem(item)}>
        {item.name}
        </Text>
        <View >
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
    navigation.navigate('SpecificAnimal', item);
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
        data={devices}
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