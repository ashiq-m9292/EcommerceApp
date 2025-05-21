import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../../Styles/Colors/Colors";

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    // headerStyle
    headerStyle: {
        width: wp('100%'),
        paddingHorizontal: wp('3%'),
        height: hp('9%'),
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: hp('1%')
    },
    // address container
    addressContainer: {
        width: wp('100%'),
        height: hp('26%'),
        elevation: 1,
        backgroundColor: 'white',
    },
    // image item container
    itemContainer: {
        width: wp('100%'),
        height: hp('34%'),
        elevation: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    leftSection: {
        justifyContent: 'center'
    },
    imageStyle: {
        width: wp('30%'),
        height: hp('16%')
    },
    rightSection: {
        justifyContent: 'center',
        gap: 10
    },

    // price container
    priceDetailsContainer: {
        width: wp('100%'),
        height: hp('34%'),
        elevation: 1,
        backgroundColor: 'white',
        gap: hp('1%'),
        padding: 10
    },
    priceItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },

    // buttonStyle
    buttonStyleContainer: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: colors.textInput,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('2%')
    },
    buttonBuyNow: {
        width: wp('44%'),
        height: hp('7%')
    },

});

export default styles;