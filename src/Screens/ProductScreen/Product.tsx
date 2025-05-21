import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './Styles';
import components from '../../Components/AllComponents';
import { Button, Image, Text } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Styles/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../../Redux/Actoins/CartAction';

const Product = ({ route, navigation }: any) => {
  const { item } = route.params;
  const dispatch = useDispatch<any>();
  const cartItem = useSelector((state: any) => state.cart.cartItems);
  const [added, setAdded] = useState(false)

  // animation itme click
  const [currentItem, setCurrentItem] = useState(item)
  const scrollViewRef = React.useRef<ScrollView>(null)

  useEffect(() => {
    setCurrentItem(item);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true })
  }, [item])

  const handleCartScreen = () => {
    navigation.navigate(
      'MainTab',
      { screen: 'Cart' }
    )
  };

const isInCart = cartItem.some((element:any)=> element.name === item.name);

  useEffect(()=>{
    if(isInCart){
      setAdded(true)
    } else{
      setAdded(false)
    }
  },[isInCart])

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveToCart = (item:any) => {
    dispatch(removeToCart(item.id));
  };

  return (
    <View style={styles.container}>
      <components.Header containerStyle={styles.headerStyle} showRightIcon={true} backPress={() => navigation.goBack()} cartPress={() => handleCartScreen()} />
      <ScrollView ref={scrollViewRef}>

        {/* image style container */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.images[0]?.url }} style={styles.imageStyle} />
        </View>

        {/* item style container */}
        <View style={styles.itemStyle}>
          <Text h4>Fresh and {item.description.replace(/"/g, '')}</Text>
          <Text h4>{item.name.replace(/"/g, '')}</Text>
          <Text h4>Rupay {item.price} 25% off</Text>
          <Text h4>Free delivery</Text>
        </View>

        {/* product highlight contaner */}
        <View style={styles.productContainer}>
          <Text h3>Product Hightlight</Text>
          <View style={styles.pitemContainer}>
            <View>
              <Text h4 style={styles.highlightText}>Fresh</Text>
              <Text h4>Natural Ingredien</Text>
            </View>
            <View>
              <Text h4 style={styles.highlightText}>Juicy</Text>
              <Text h4>Fatless</Text>
            </View>
          </View>
        </View>

        {/* bottons */}
        <View style={styles.buttonContainer}>
          {

            added ? 
              <Button
                type='outline'
                title={'remove cart'}
                titleStyle={{ color: colors.buttoncolor, fontSize: 26 }}
                icon={
                  <Icon name='cart' size={36} color={colors.buttoncolor} style={{ marginRight: 4 }} />
                }
                buttonStyle={styles.buttonStyle1}
                onPress={() => handleRemoveToCart(item)}
              />
              :
              <Button
                type='outline'
                title={'add to cart'}
                titleStyle={{ color: colors.buttoncolor, fontSize: 26 }}
                icon={
                  <Icon name='cart' size={36} color={colors.buttoncolor} style={{ marginRight: 4 }} />
                }
                buttonStyle={styles.buttonStyle1}
                onPress={() => handleAddToCart(item)}
              />
          }
          <Button
            title={'Buy Now'}
            titleStyle={{ color: 'white', fontSize: 26 }}
            icon={
              <Icon name='arrow-forward' size={36} color={'white'} style={{ marginRight: 4 }} />
            }
            buttonStyle={styles.buttonStyle2}
            onPress={() => navigation.navigate("Checkout", { item })}
          />
        </View>

        {/* add product components  */}
        <components.Products navigation={navigation} />
        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>
    </View>
  );
}

export default Product;