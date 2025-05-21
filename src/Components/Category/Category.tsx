import { Image, Text } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import styles from './Styles';


interface productData {
  name: String,
  description: String,
  price: number,
  category: String,
  stock: number,
  images: any,
  url: String,

}
const Category = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<productData[]>([]);
  const getProduct = async () => {
    const url = "http://10.0.2.2:8080/api/v1/product/getAll";
    let response = await fetch(url)
    let result = await response.json();
    if (response.ok) {
      setData(result.product.slice(0, 5))
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
      <Text h2 style={{ marginLeft: 18, marginBottom: 8 }}>Categoreis</Text>
      {
        loading ? <ActivityIndicator
          size={"large"}
          style={styles.activityStyle}
        /> :
          (
            <>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Product", {item})} style={{ alignItems: 'center', marginRight: 10, marginLeft: 10 }}>
                    <Image source={{ uri: item.images[0]?.url }} style={styles.imageCategory} />
                    <Text h3>{item.name.replace(/"/g, '')}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )
      }
    </View>
  );
}

export default Category;
