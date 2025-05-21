import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../../Styles/Colors/Colors";

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },

    headerStyle: {
        width: wp('100%'),
        paddingHorizontal: wp('3%'),
        height: hp('9%'),
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: hp('4%')
    },


    // payment container
    secondContainer: {
        gap: hp('6%')
    },
    cashContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: wp('4%'),
        borderWidth: 2,
        borderColor: 'red',
        padding: 16,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    onlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: wp('4%'),
        borderWidth: 2,
        borderColor: 'black',
        padding: 16,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    chechBoxContainer: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
        padding: 0
    },

    // place button
    buttonStyleContainer: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: colors.textInput,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('2%'),
        position: 'relative',
        top: 410
    },
    buttonBuyNow: {
        width: wp('44%'),
        height: hp('7%')
    },
});

export default styles;