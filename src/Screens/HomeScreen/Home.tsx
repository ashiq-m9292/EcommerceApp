import React from 'react';
import { ScrollView, View } from 'react-native';
import components from '../../Components/AllComponents'
import styles from './Styles';


const Home = ({ navigation }: any) => {
  const handleCartScreen = () =>{
    navigation.navigate(
      'MainTab',
      {screen: 'Cart'}
    )
  }
  return (
    <View style={styles.container}>
      <components.Status />
      <components.Header showAvatar={true} showText={true} showHeart={true} showRightIcon={true} cartPress={()=>handleCartScreen()} />
      <components.Search />
      <ScrollView>
        <components.Slider navigation={navigation} />
        <components.Category navigation={navigation} />
        <components.Products navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default Home;
