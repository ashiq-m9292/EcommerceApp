import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../Screens/AllScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>

            <Stack.Screen
                name='MainTab'
                component={BottomTab}
            />

            <Stack.Screen
                name='Product'
                component={screens.Product}

            />

            <Stack.Screen
                name='Checkout'
                component={screens.Checkout}
            />

            <Stack.Screen
                name='Payment'
                component={screens.Payment}
            />

            <Stack.Screen
                name='OrderPlaced'
                component={screens.OrderPlaced}
            />

            <Stack.Screen
                name='Razerpay'
                component={screens.Razerpay}
            />
        </Stack.Navigator>
    );
}

export default MainStack;
