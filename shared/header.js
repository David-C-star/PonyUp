import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';
import { SearchBar } from 'react-native-elements';


class Header extends React.Component{
    // Creates the search bar for the SpecificAnimalPage

    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };

    render(){
        //const navigation = useNavigation();
        //const { navigation } = this.props;
        const { search } = this.state;
        return(

                <View style={styles.itemStyleSearch}>
                    <SearchBar
                    placeholder="Search"
                    inputStyle={{backgroundColor: 'white',}}
                    platform="android"
                    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5,}}
                    round="true"
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                </View>
        )
    }
}




const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingRight: 20,
        backgroundColor: '#e05d06',
        alignItems: 'center',
        flexDirection: 'row',
    },

    itemStyleText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemStyleSearch: {
        flex: 3,
        alignItems: 'center',
        height: '90%',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center'
    },

    tinyImage: {
        width: 20,
        height: 20,
        resizeMode: 'stretch'
    }

})

export default Header