import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../../Styles/Colors/Colors";

const styles = StyleSheet.create({
    gradientcontainer: {
        width: wp('100%'),
        height: hp('100%'),
    },
    mainContainer: {
        alignItems: 'center',
        top: hp('30%'),
        gap: hp('6%')
    },
    scrollView: {
        justifyContent: 'center'
    },
    searchbarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    inputContainer: {
        borderRadius: 10,
        backgroundColor: colors.white,
        width: wp('90%'),
        height: hp('8%'),
    },
    placeholderStyle: {
        fontSize: 24
    },
    buttonView: {
        alignItems: 'center'
    },
    buttonStyle: {
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: 10,
        marginTop: hp('2%')
    },
    titleStyle: {
        fontSize: wp('8%')
    },
    errorInput: {
        color: 'red',
        paddingLeft: wp('2%')
    }

});

export default styles;