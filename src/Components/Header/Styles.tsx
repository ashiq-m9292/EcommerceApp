import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        width: wp('92%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp('1%'),

    },
    avatarView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('1%')
    },
    logoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: wp('3%')
    },
    textOne: {
        fontSize: wp('4%'),
        color: 'black'
    },
    textTwo: {
        fontSize: wp('5%'),
        color: 'black'
    },
});

export default styles;