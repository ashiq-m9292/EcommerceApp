import React from 'react';
import { View, Text } from 'react-native';
import { logoutUser } from '../../Redux/Actoins/LoginAction';
import { useDispatch } from 'react-redux';

const Account = () => {
  const dispatch = useDispatch<any>();
  const handlelogout = () => {
    dispatch(logoutUser());
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => handlelogout()} style={{ fontSize: 50 }}>Logout</Text>
    </View>
  );
}

export default Account;
