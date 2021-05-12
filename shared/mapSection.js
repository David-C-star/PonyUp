import {Text} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';


class mapSection extends React.Component{
    // This is an obsolete component. It was supposed to create a map using GPS coordinates
    // but the device doesn't have those capabilities. The database no longer supports these variables
    // so if you want to reuse this component, you have to add this attribute to the database. This was
    // was written with the idea that the variable passed into it contained the latitude and longitude
    // in one string, separated by a comma. The latitude is supposed to go first in the string.

    render(){
        //var latlongData = this.props.latlong;
        //var splitData = latlongData.split(",");
        //console.log("lat", splitData[0]);
        //console.log("long", splitData[1]);
        return(
            <Text>
            {"hi, I don't know what we're gonna do here"}
            </Text>
            /*
                        <View
            style={styles.container}>
                <MapView 
                style={styles.mapStyle}
                loadingEnabled={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: parseFloat(splitData[0]),
                    longitude: parseFloat(splitData[1]),
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                </MapView>
            </View>
            */
        )

    }

}

const styles = StyleSheet.create({
    mapStyle:{
        height: '33%',
        width: '100%',
        borderRadius: 20
    },

    container:{
        height: '100%',
        width: '100%',
        borderRadius: 20
    }


});

export default mapSection