import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import LoginScreen from "../screens/LoginScreen";
import SpecificAnimalPage from "../screens/SpecificAnimalPage";
import MainScreen from "../screens/MainScreen";
import SignupScreen from "../screens/SignupScreen";
import PasswordScreen from "../screens/ForgottenPasswordScreen";
import RecoveryScreen from "../screens/RecoveryScreen";
import VerificationScreen from "../screens/VerificationScreen"
import AddAnimalScreen from "../screens/AddAnimalScreen"
import AddDeviceScreen from "../screens/AddDeviceScreen"

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const AuthenticationStack = createStackNavigator();
const Stack = createStackNavigator();

function AppNavigation() {
    const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

    useEffect(() => {
        checkAuthState();
    }, []);
    // Checks is user is signed in 
    async function checkAuthState() {
        try {
            await Auth.currentAuthenticatedUser();
            console.log(' User is signed in');
            setUserLoggedIn('loggedIn');
        } catch (err) {
            console.log(' User is not signed in');
            setUserLoggedIn('loggedOut');
        }
    }

    function updateAuthState(isUserLoggedIn) {
        setUserLoggedIn(isUserLoggedIn);
    }

    // Navigation if user is not logged in
    const AuthenticationNavigator = props => {
        return (
            <AuthenticationStack.Navigator headerMode="none">
                <AuthenticationStack.Screen name="Login">
                    {screenProps => (
                        <LoginScreen {...screenProps} updateAuthState={props.updateAuthState} />
                    )}
                </AuthenticationStack.Screen>
                <AuthenticationStack.Screen name="Signup" component={SignupScreen} />
                <AuthenticationStack.Screen name="Verification" component={VerificationScreen} />
                <AuthenticationStack.Screen name="Password" component={PasswordScreen} />
                <AuthenticationStack.Screen name="Recovery" component={RecoveryScreen} />
            </AuthenticationStack.Navigator>
        );
    };
    
    // Navigation if user is logged in 
    const AppNavigator = props => {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Main">
                    {screenProps => (
                        <MainScreen {...screenProps} updateAuthState={props.updateAuthState} />
                    )}
                </Stack.Screen>
                <Stack.Screen name="AddAnimal" component={AddAnimalScreen} />
                <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
                <Stack.Screen name="SpecificAnimal" component={SpecificAnimalPage} 
                options={{headerShown: false, header: null}} />          
            </Stack.Navigator>
        );
    };
    
    const Initializing = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="tomato" />
            </View>
        );
    };

    return (
        <NavigationContainer>
            {isUserLoggedIn === 'initializing' && <Initializing />}
            {isUserLoggedIn === 'loggedIn' && (
                <AppNavigator updateAuthState={updateAuthState} />
            )}
            {isUserLoggedIn === 'loggedOut' && (
                <AuthenticationNavigator updateAuthState={updateAuthState} />
            )}
        </NavigationContainer>
    );
}

export default AppNavigation;

/**class AppNavigation extends React.Component{

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

*/ 