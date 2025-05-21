import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import components from '../../Components/AllComponents';
import styles from './Styles';
import { Button, Chip, Image, Text } from '@rneui/themed';
import colors from '../../Styles/Colors/Colors';

const Checkout = ({ route, navigation }: any) => {
  const { item } = route.params;
  const [qty, setQty] = useState(1);
  const increase = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }

  }
  const decrease = () => {

    if (qty > 1) {
      setQty(qty - 1);
    }
  }

const totalPrice = item.price * qty + 30;

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {/* header order summary */}
      <components.Header backPress={() => navigation.goBack()} showTitle={true} containerStyle={styles.headerStyle} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          {/* address container */}
          <View style={styles.addressContainer}>
          </View>

          {/* item container */}
          <View style={styles.itemContainer}>

            {/* left section */}
            <View style={styles.leftSection}>
              <Image source={{ uri: item.images[0]?.url }} style={styles.imageStyle} />
              {/* qty container */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <Text style={{ fontSize: 50 }} onPress={() => decrease()}>-</Text>
                <Text h4>{qty}</Text>
                <Text style={{ fontSize: 40, }} onPress={() => increase()}>+</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text h3>{item.description.replace(/"/g, '')}</Text>
              <Text h4>{item.name.replace(/"/g, '')}</Text>
              <Text h4>{item.price * qty}</Text>
              <Text h4>Seller: Banti</Text>
              <Text h4>Free Delivery</Text>
            </View>
          </View>

          {/* price details container */}
          <View style={styles.priceDetailsContainer}>
            <Text h3> Price Details</Text>
            <View style={styles.priceItemContainer}>
              <View>
                <Text h4>Price</Text>
                <Text h4 style={{ paddingVertical: 20 }}>Discount</Text>
                <Text h4>Delivery charges</Text>
              </View>
              <View>
                <Text h4>{item.price} </Text>
                <Text h4 style={{ paddingVertical: 20 }}>-60</Text>
                <Text h4>30</Text>
              </View>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text h3>Total Price</Text>
              <Text h3>{totalPrice}</Text>
            </View>
          </View>
          <View style={{ marginBottom: 80 }}></View>

        </View>
      </ScrollView>
      <View style={styles.buttonStyleContainer}>
        <Text h2>{totalPrice}</Text>
        <Button
          type='solid'
          title={'Buy Now'}
          titleStyle={{ color: colors.buttoncolor, fontSize: 26 }}
          buttonStyle={styles.buttonBuyNow}
          onPress={() => navigation.navigate("Payment", {totalPrice})}
        />
      </View>
    </View>
  );
}

export default Checkout;
