import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';


class animalSection extends React.Component{

    render(){
        var animalName = "Animal 1"
        return(

            <View style={styles.specAnimalBox}>
                <Text style={styles.nameText}>{animalName}</Text>

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
    }


})

export default animalSection