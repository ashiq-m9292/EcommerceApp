import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../Screens/AllScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, name }: any) => {
                    if (route.name === "Home") {
                        name = 'home-outline'
                    } else if (route.name === "My Order") {
                        name = 'receipt-outline'
                    } else if (route.name === "Account") {
                        name = 'person-outline'
                    } else if (route.name === "Cart") {
                        name = 'cart-outline'
                    }
                    return <Icon color={color} size={30} name={name} />

                },
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingTop: 2
                },
                tabBarStyle: {
                    width: '100%',
                    height: 62
                },
            })}
        >
            <Tab.Screen
                name='Home'
                component={screens.Home}
            />

            <Tab.Screen
                name='My Order'
                component={screens.MyOrder}
            />

            <Tab.Screen
                name='Account'
                component={screens.Account}
            />

            <Tab.Screen
                name='Cart'
                component={screens.Cart}
            />
        </Tab.Navigator>
    );
}

export default BottomTab;
