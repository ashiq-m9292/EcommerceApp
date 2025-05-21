import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Actoins/LoginAction';


const Routes = () => {
    const dispatch = useDispatch<any>();
    const { isAuthenticated } = useSelector((state: any) => state.authLogin);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);


    return (
        <NavigationContainer>

            {
                isAuthenticated ?
                    <MainStack />
                    :
                    <AuthStack />
            }
        </NavigationContainer>
    );
}

export default Routes;

