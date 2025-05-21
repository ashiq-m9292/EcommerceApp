import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Image } from '@rneui/themed';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface productData {
  name: String,
  description: String,
  price: number,
  category: String,
  stock: number,
  images: any,
  url: String,

}

const Slider = ({ navigation }: any) => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<productData[]>([]);
  const getProduct = async () => {
    const url = "http://10.0.2.2:8080/api/v1/product/getAll";
    let response = await fetch(url)
    let result = await response.json();
    if (response.ok) {
      setData(result.product)
      setLoading(false)
    } else {
      console.warn('error')
    }
  }
  useEffect(() => {
    getProduct()
  }, []);


  return (
    <View>
      {
        loading ?
          <ActivityIndicator
            size={"large"}
            style={styles.activityStyle}
          />
          : (
            <>
              <FlatList
                onScroll={e => {
                  let x = e.nativeEvent.contentOffset.x;
                  setCurrentIndex(Math.round(x / wp('100%')));
                }}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Product", { item })}>
                    <Image source={{ uri: item.images[0]?.url }} style={styles.imageSlider} />
                  </TouchableOpacity>
                )}
              />
              <View style={styles.dotcontainer}>
                {
                  data.map((_, index) => (
                    <View key={index} style={[styles.dotChip, currenIndex === index ? styles.activeDot : null]}>
                    </View>
                  ))
                }
              </View>
            </>
          )
      }
    </View>
  );
}

export default Slider;
