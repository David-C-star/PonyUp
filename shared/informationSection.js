import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';


class informationSection extends React.Component{


    render(){
		var status_info = ( this.props.inLabor ? "In Labor" : "Normal" );
        var temp_info = this.props.temp;
        var contraction_info = this.props.contraction;

        return(
            <View>

                <View style={styles.informationContent}>
                    
                    <View>
                        <Text style={styles.textSpecs}>Status:</Text>
                        <Text style={styles.textSpecs}>Temperature:</Text>
                        <Text style={styles.textSpecs}>Contractions:</Text>
                    </View>

                    <View>
                        <Text style={styles.statusTextSpecs}>{status_info}</Text>
                        <Text style={styles.statusTextSpecs}>{temp_info}</Text>
                        <Text style={styles.statusTextSpecs}>{contraction_info}</Text>
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
