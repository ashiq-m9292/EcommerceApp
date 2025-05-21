import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../Styles/Colors/Colors";

const Styles = StyleSheet.create({
    gradientcontainer: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        gap: hp('3%'),
        paddingTop: hp('28%')

    },
    logo: {
        fontSize: wp('26%'),
        color: colors.logoColor
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    chipContainer: {
        width: wp('20%'),
    }
})

export default Styles;