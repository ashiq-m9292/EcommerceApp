import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../Screens/AllScreen';



const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name='Initial'
                component={screens.Initial}
            />

            <Stack.Screen
                name='Login'
                component={screens.Login}
            />

            <Stack.Screen
                name='Signup'
                component={screens.Signup}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;
