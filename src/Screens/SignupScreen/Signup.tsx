import React, { useState } from 'react';
import { Alert, ScrollView, ToastAndroid, View } from 'react-native';
import { Text, SearchBar, Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import * as yup from 'yup';
import { Formik } from 'formik';
import colors from '../../Styles/Colors/Colors';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../Redux/Actoins/SignupAction';
import { CLEAR_MASSAGE } from '../../Redux/Constants/Constant';

const Signup = ({ navigation }: any) => {
  const dispatch = useDispatch<any>()
  const { error, loading } = useSelector((state: any) => state.authSignup);
  const signupSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("correct email format").required("email is required"),
    password: yup.string().min(4, "minimum four character").max(10, "max ten character").required("password is required")
  })

React.useEffect(()=>{
  const timer = setTimeout(() => {
    dispatch({type: CLEAR_MASSAGE})
  }, 3000);
  return ()=> clearTimeout(timer);
}, [error, dispatch]);



  return (
    <LinearGradient colors={[colors.white, colors.secondary, colors.primary]} style={styles.gradientcontainer}>
      <Formik initialValues={{
        name: "",
        email: "",
        password: ""
      }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          dispatch(signupUser(values.name, values.email, values.password, navigation))
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.mainContainer}>
            <Text h1>SignUp</Text>
            <ScrollView>
              <SearchBar
                placeholder='Enter your name'
                inputStyle={styles.placeholderStyle}
                containerStyle={styles.searchbarContainer}
                inputContainerStyle={styles.inputContainer}
                searchIcon={false}
                clearIcon={false}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                autoCorrect={false}
              />
              {
                touched.name && errors.name ? <Text h4 style={styles.errorInput}>{errors.name}</Text> : null
              }

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
                touched.name && errors.name ? <Text h4 style={styles.errorInput}>{errors.name}</Text> : null
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
                  title={loading ? 'loading...' : 'Create Account'}
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  onPress={() => handleSubmit()}
                />
                {error && (<Text h4 style={{ color: 'red' }}>{error.massage}</Text>)}
              </View>
            </ScrollView>
            <Text h4>Already have an account? <Text h3 onPress={() => navigation.navigate("Login")}>LogIn</Text></Text>
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
}

export default Signup;
