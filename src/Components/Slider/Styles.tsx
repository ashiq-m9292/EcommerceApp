import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    imageSlider: {
        width: wp('100%'),
        height: hp('30%'),
        resizeMode: 'cover',
    },
    activityStyle: {
        paddingTop: wp('16%')
    },
    dotcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: wp('2%'),
        bottom: hp('4%')
    },
    dotChip: {
        width: wp('3%'),
        height: hp('1.5%'),
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    activeDot: {
      backgroundColor: 'red',
      width: wp('4%')
    },
});

export default styles;