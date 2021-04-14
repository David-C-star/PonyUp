import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, BackHandler} from 'react-native';


class informationSection extends React.Component{


    render(){
		var status_info = ( this.props.inLabor ? "In Labor" : "Normal" );
        var temp_info = this.props.temp;
        var contraction_info = this.props.contraction;
        var accx_info = this.props.accx;
        var accy_info = this.props.accy;
        var accz_info = this.props.accz;
        var gyx_info = this.props.gyx;
        var gyy_info = this.props.gyy;
        var gyz_info = this.props.gyz;


        return(
            <View>

                <View style={styles.informationContent}>
                    
                    <View>
                        <Text style={styles.textSpecs}>Status:</Text>
                        <Text style={styles.textSpecs}>Temperature:</Text>
                        <Text style={styles.textSpecs}>Contractions:</Text>
                        <Text style={styles.textSpecs}>Accelerometer X:</Text>
                        <Text style={styles.textSpecs}>Accelerometer Y:</Text>
                        <Text style={styles.textSpecs}>Accelerometer Z:</Text>
                        <Text style={styles.textSpecs}>Gyroscope X:</Text>
                        <Text style={styles.textSpecs}>Gyroscope Y:</Text>
                        <Text style={styles.textSpecs}>Gyroscope Z:</Text>
                    </View>

                    <View>
                        <Text style={styles.statusTextSpecs}>{status_info}</Text>
                        <Text style={styles.statusTextSpecs}>{temp_info}</Text>
                        <Text style={styles.statusTextSpecs}>{contraction_info}</Text>
                        <Text style={styles.statusTextSpecs}>{accx_info}</Text>
                        <Text style={styles.statusTextSpecs}>{accy_info}</Text>
                        <Text style={styles.statusTextSpecs}>{accz_info}</Text>
                        <Text style={styles.statusTextSpecs}>{gyx_info}</Text>
                        <Text style={styles.statusTextSpecs}>{gyy_info}</Text>
                        <Text style={styles.statusTextSpecs}>{gyz_info}</Text>
                    </View>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    textSpecs:{
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 20,
        paddingBottom: 20,
    },

    statusTextSpecs:{
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 80,
    },

    informationContent:{
        flexDirection: 'row',
    }

})

export default informationSection
