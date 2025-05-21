import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, SearchBar, Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import * as yup from 'yup';
import { Formik } from 'formik';
import colors from '../../Styles/Colors/Colors';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Actoins/LoginAction';
import { CLEAR_MASSAGE } from '../../Redux/Constants/Constant';

const Login = ({ navigation }: any) => {
    const dispatch = useDispatch<any>();
    const { loading, error, isAuthenticated } = useSelector((state: any) => state.authLogin);
    const signupSchema = yup.object().shape({
        email: yup.string().email("correct email format").required("email is required"),
        password: yup.string().min(4, "minimum four character").max(10, "max ten character").required("password is required")
    })

    React.useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: CLEAR_MASSAGE })
        }, 3000);
        return () => clearTimeout(timer);
    }, [error, dispatch])


    return (
        <LinearGradient colors={[colors.white, colors.secondary, colors.primary]} style={styles.gradientcontainer}>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                validationSchema={signupSchema}

                onSubmit={(values) => {
                    dispatch(loginUser(values.email, values.password))
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.mainContainer}>
                        <Text h1>LogIn</Text>
                        <ScrollView>
                            <SearchBar
                                placeholder='Enter your email'
                                inputStyle={styles.placeholderStyle}
                                containerStyle={styles.searchbarContainer}
                                inputContainerStyle={styles.inputContainer}
                                searchIcon={false}
                                clearIcon={false}
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                autoCorrect={false}

                            />
                            {
                                touched.email && errors.email ? <Text h4 style={styles.errorInput}>{errors.email}</Text> : null
                            }

                            <SearchBar
                                placeholder='Enter your password'
                                inputStyle={styles.placeholderStyle}
                                containerStyle={styles.searchbarContainer}
                                inputContainerStyle={styles.inputContainer}
                                searchIcon={false}
                                clearIcon={false}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                autoCorrect={false}
                            />
                            {
                                touched.password && errors.password ? <Text h4 style={styles.errorInput}>{errors.password}</Text> : null
                            }
                            <View style={styles.buttonView}>
                                <Button
                                    title={loading ? 'loading...' : 'LogIn'}
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.titleStyle}
                                    onPress={() => handleSubmit()}
                                />
                                {!isAuthenticated && error && (<Text h4 style={styles.errorInput}>{error} </Text>)}
                                <Text h4 style={{ textAlign: 'center' }}>Forgot password</Text>
                            </View>
                        </ScrollView>
                        <Text h4>Don't have an account? <Text h3 onPress={() => navigation.navigate("Signup")}>SignUp</Text></Text>
                    </View>
                )}
            </Formik>
        </LinearGradient >
    );
}

export default Login;
