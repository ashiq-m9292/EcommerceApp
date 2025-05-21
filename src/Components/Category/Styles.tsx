import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    activityStyle: {
            paddingTop: wp('16%')
        },
        imageCategory: {
            width: wp('28%'),
            height: hp('14%'),
            borderRadius: wp('15%')
        }
})

export default styles;