import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Styles/Colors/Colors';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chip, Image, Text } from '@rneui/themed';
import { ToastAndroid, View } from 'react-native';

const Initial = ({navigation}:any) => {
  return (
    <LinearGradient colors={[colors.primary, colors.secondary, colors.white]} style={Styles.gradientcontainer}>
      <Icon name='fast-food' style={Styles.logo} />
      <Text h1>Fast Delivery</Text>
      <View style={Styles.textView}>
        <Text h4>We provide the fastest delivery system </Text>
        <Text h4>We will reach food in your home</Text>
        <Text h4>within 30 minutes</Text>
      </View>
      <Chip size='sm' color={colors.secondary} />
      <Chip
        buttonStyle={Styles.chipContainer}
        icon={{
          name: "arrow-forward",
          size: 40
        }}
        onPress={()=>navigation.navigate("Login")}
      />
    </LinearGradient>
  );
}

export default Initial;
