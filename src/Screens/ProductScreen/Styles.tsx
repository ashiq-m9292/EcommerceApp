import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import colors from "../../Styles/Colors/Colors";

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    headerStyle: {
        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('10%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        elevation: 10
    },
    imageContainer: {
        marginHorizontal: wp('10%')
    },
    imageStyle: {
        width: wp('80%'),
        height: hp('48%'),
        marginVertical: hp('2%'),
        resizeMode: 'cover'
    },

    // item styles
    itemStyle: {
        width: wp('100%'),
        paddingHorizontal: wp('6%'),
        gap: hp('1%'),
    },
    // highlight container style
    productContainer: {
        width: wp('100%'),
        backgroundColor: 'white',
        elevation: 2,
        paddingHorizontal: wp('4%'),
        marginTop: hp('4%'),
    },
    pitemContainer: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('10%'),
        paddingVertical: hp('3%'),
    },
    highlightText: {
        paddingBottom: hp('2%')
    },

    // button styles 
    buttonContainer: {
        width: wp('100%'),
        height: hp('14%'),
        backgroundColor: 'white',
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: hp('2%')
    },
    buttonStyle1: {
        width: wp('46%'),
        height: hp('8%'),
        borderRadius: 6,
        borderWidth: 2,
        borderColor: colors.buttoncolor
    },
    buttonStyle2: {
        width: wp('46%'),
        height: hp('8%'),
        borderRadius: 6,
        backgroundColor: colors.buttoncolor
    },
});

export default styles;