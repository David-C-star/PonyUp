import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';


class animalSection extends React.Component{

    render(){
        var animalID = this.props.id
        var animalName = this.props.name
        return(

            <View style={styles.specAnimalBox}>
                <Text style={styles.nameText}>{animalID}</Text>
                <Text style={styles.animalText}>{animalName}</Text>

                <View>
                    <Image
                style={styles.animalImage}
                source={require('../images/placeHolderPic.jpg')}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    specAnimalBox:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },

    nameText:{
        flex: 2,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 28,
        padding: 15
    },

    animalImage:{
        height: 60,
        width: 60,
        marginRight: 25,
        borderRadius: 65/2,
    },

    animalText:{
        flex: 2,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 20,
        padding: 15
    }


})

export default animalSection