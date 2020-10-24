import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import SpecificAnimalPage from "../screens/SpecificAnimalPage";
import MainScreen from "../screens/MainScreen";
import SignupScreen from "../screens/SignupScreen";
import PasswordScreen from "../screens/ForgottenPasswordScreen";
import RecoveryScreen from "../screens/RecoveryScreen";

const Stack = createStackNavigator();

class AppNavigation extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    header: null,
                    
                }}
                initialRouteName = "Login"
                >
                    
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="Password" component={PasswordScreen} />
                    <Stack.Screen name="Recovery" component={RecoveryScreen} />
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="SpecificAnimal" component={SpecificAnimalPage}
                    options={{headerShown: false, header: null}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigation