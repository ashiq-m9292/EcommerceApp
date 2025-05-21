import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../Styles/Colors/Colors";

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        width: wp('92%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: wp('2%'),
        borderColor: 'black'
    },
});

export default styles;