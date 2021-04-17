import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';


class informationSection extends React.Component{


    render(){
        //All the data that will be displayed are declared into variables.
        //Accelerometer and Gyroscope data are stored in arrays of length 3.
        //0, 1, and 2 in the arrays are the X, Y, and Z coordinates, respectively. 
		var status_info = ( this.props.inLabor ? "In Labor" : "Normal" );
        var temp_info = this.props.temp;
        var contraction_info = this.props.contraction;

        var acc_info = new Array(this.props.accx, this.props.accy, this.props.accz);
        var normal_acc_info = new Array(3);
        //console.log("acc_info", acc_info);

        var gyro_info = new Array(this.props.gyx, this.props.gyy, this.props.gyz);
        //console.log("gyro_info", gyro_info);

        var norm_Acc = Math.sqrt(acc_info[0] * acc_info[0] + acc_info[1] * acc_info[1] + acc_info[2] * acc_info[2]);
        //console.log("normalizer", norm_Acc);

        normal_acc_info[0] = acc_info[0]/norm_Acc;
        normal_acc_info[1] = acc_info[1]/norm_Acc;
        normal_acc_info[2] = acc_info[2]/norm_Acc;

        var inclination = Math.round((Math.acos(normal_acc_info[2]))*(180/Math.PI));
        //console.log("inclination", inclination);

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
                        <Text style={styles.statusTextSpecs}>{acc_info[0]}</Text>
                        <Text style={styles.statusTextSpecs}>{acc_info[1]}</Text>
                        <Text style={styles.statusTextSpecs}>{acc_info[2]}</Text>
                        <Text style={styles.statusTextSpecs}>{gyro_info[0]}</Text>
                        <Text style={styles.statusTextSpecs}>{gyro_info[1]}</Text>
                        <Text style={styles.statusTextSpecs}>{gyro_info[2]}</Text>
                    </View>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    //Original font was 20, paddingTop and Bottom were 20
    textSpecs:{
        fontFamily: 'Roboto',
        fontSize: 16,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 10,
    },

    statusTextSpecs:{
        fontFamily: 'Roboto',
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 80,
    },

    informationContent:{
        flexDirection: 'row',
    }

})

export default informationSection
