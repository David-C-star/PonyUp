import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';


class mapSection extends React.Component{
    
    
    render(){
        var latlongData = this.props.latlong;
        var splitData = latlongData.split(",");
        return(
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