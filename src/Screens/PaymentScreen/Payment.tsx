import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { CheckBox, Text, Button } from '@rneui/themed';
import components from '../../Components/AllComponents';
import colors from '../../Styles/Colors/Colors';

const Payment = ({ navigation, route }: any) => {
  const [selectedMethod, setSelectedMethod] = useState('COD');
  const { totalPrice } = route.params;

  const placeOrder = ()=>{
    if(selectedMethod === 'COD') {
      navigation.replace("OrderPlaced")
    } else if(selectedMethod === 'ONLINE') {
      navigation.replace("Razerpay")
    }
  };

  return (
    <View style={styles.container}>

      {/* header contaner */}
      <components.Header backPress={() => navigation.goBack()} showTitle={true} containerStyle={styles.headerStyle} />

      {/* payment container */}
      <View style={styles.secondContainer}>
        <View style={styles.cashContainer}>
          <Text h3>{totalPrice}</Text>
          <Text h4>Cash On Delivery</Text>
          <CheckBox
            checked={selectedMethod === 'COD'}
            onPress={() => setSelectedMethod('COD')}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.chechBoxContainer}
            size={40}
          />
        </View>
        <View style={styles.onlineContainer}>
          <Text h3>{totalPrice}</Text>
          <Text h4>Pay Online</Text>
          <CheckBox
            checked={selectedMethod === 'ONLINE'}
            onPress={() => setSelectedMethod('ONLINE')}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.chechBoxContainer}
            size={40}
          />
        </View>
      </View>

      {/* place product button */}
      <View style={styles.buttonStyleContainer}>
        <Text h2>{totalPrice}</Text>
        <Button
          type='solid'
          title={'Place Order'}
          titleStyle={{ color: colors.buttoncolor, fontSize: 26 }}
          buttonStyle={styles.buttonBuyNow}
          onPress={() =>placeOrder()}
        />
      </View>
    </View>
  );
}

export default Payment;
