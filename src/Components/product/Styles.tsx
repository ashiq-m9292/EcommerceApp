import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        // marginBottom: hp('20%')
    },
    activityStyle: {
        paddingTop: wp('16%')
    },
    card: {
        width: wp('50%'),
        margin: 0,
        padding: 8
    },
    imageStyle: {
        width: wp('50%'),
        height: hp('24%'),
        margin: 0,
        padding: 0,
        resizeMode: 'cover'
    },
});

export default styles;