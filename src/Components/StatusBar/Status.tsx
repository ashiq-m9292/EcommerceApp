import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Status = () => {
    return (
        <View>
            <StatusBar
                backgroundColor={"red"}
                barStyle={'light-content'}
                hidden={false}
            />
        </View>
    );
}

export default Status;
