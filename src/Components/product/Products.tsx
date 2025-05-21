import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Card, Text } from '@rneui/themed';


interface productData {
    name: String,
    description: String,
    price: number,
    category: String,
    stock: number,
    images: any,
    url: String,

}
const Products = ({ navigation, onpress }: any) => {
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
        <View style={styles.container}>
            <Text h2 style={{ marginLeft: 18, marginTop: 20 }}>Products for you</Text>
            {
                loading ?
                    <ActivityIndicator style={styles.activityStyle}
                    />
                    : (
                        <>
                            <FlatList
                                ListFooterComponent={<View style={{ height: 120 }}></View>}
                                horizontal={false}
                                data={data}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-between' }}
                                scrollEnabled={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Product", {item})}>
                                        <Card containerStyle={styles.card}>
                                            <Card.Image source={{ uri: item.images[0]?.url }} style={styles.imageStyle} />
                                            <Text h4>{item.name.replace(/"/g, '')} </Text>
                                            <Text h4>{item.price} 30% off</Text>
                                            <Text h4>{item.description.replace(/"/g, '')} </Text>
                                        </Card>
                                    </TouchableOpacity>
                                )}
                            />
                        </>
                    )
            }
        </View>
    )
}


export default Products;
