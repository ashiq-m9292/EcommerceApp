import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Styles';
import { Avatar, Text } from '@rneui/themed';
import { useSelector } from 'react-redux';

const Header = ({ color, showTitle, showAvatar, showText, backPress, containerStyle, notificationPress, cartPress, showHeart, showRightIcon }: any) => {
    const cartItem = useSelector((state:any) =>state.cart.cartItems);


    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.avatarView}>
                {
                    showAvatar &&
                    <Avatar
                        size={60}
                        rounded
                        title='red'
                        containerStyle={{ backgroundColor: 'red' }}
                    />
                }
                {
                    showText ?
                        <View>
                            <Text style={styles.textOne}>Hello,</Text>
                            <Text style={styles.textTwo}>Jainab Bi</Text>
                        </View>
                        :
                        <View>
                            <Icon name='arrow-back' color={'black'} size={30} onPress={backPress} />
                        </View>
                }
                {
                    showTitle &&
                    <Text h3 style={{ paddingLeft: 14 }}>OrderSummary</Text>
                }


            </View>
            {
                showRightIcon &&

                <View style={styles.logoView}>
                    {
                        showHeart ?
                            <Icon
                                name='heart-outline'
                                color={'black'}
                                size={34}
                            />
                            :
                            <Icon name='search' size={30} color={'black'} />
                    }
                    <Feather
                        name='bell'
                        color={'black'}
                        size={34}
                        onPress={notificationPress}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon
                        name='cart-outline'
                        color={'black'}
                        size={34}
                        onPress={cartPress}
                    />
                    <View style={{position: 'absolute', right: -5, top: -12}}>
                        <Text h4 style={{color: 'green'}}>{cartItem.length}</Text>
                    </View>
                    </View>

                </View>
            }
        </View>
    );
}

export default Header;
