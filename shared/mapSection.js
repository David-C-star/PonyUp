import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';


class mapSection extends React.Component{
    
    
    render(){
        return(
            <View
            style={styles.container}>
                <MapView 
                style={styles.mapStyle}
                loadingEnabled={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                </MapView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mapStyle:{
        height: '33%',
        width: '100%'
    },

    container:{
        height: '100%',
        width: '100%'
    }


});

export default mapSection