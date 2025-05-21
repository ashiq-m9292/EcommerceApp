import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { Text } from '@rneui/themed';
import styles from './Styles';


const OrderPlaced = ({ navigation }: any) => {
    useEffect(() => {
       const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'MainTab'}]
        });
        return true
       });
       return ()=> backHandler.remove();
    }, [])
    return (
        <View style={styles.container}>
            <Text h2 style={styles.textStyle}>Order Placed Succesfully</Text>
        </View>
    );
}

export default OrderPlaced;
