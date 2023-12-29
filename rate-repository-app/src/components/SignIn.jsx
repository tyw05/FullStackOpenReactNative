import { Text, Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  signin: {
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#0366d6',
    borderRadius: 2,
    alignItems: 'center',
    height: 40,
    margin: 12,
    padding: 10,
  }
});

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
  .required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [signIn, result] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log('The values', values)
    const { username, password } = values;
   
    try {
      await signIn({ username, password }); 
      console.log('The username', username)
      console.log('The password', password)
      console.log(result)
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.signin}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={[{color: 'white', fontWeight: 'bold'}]}>Sign In</Text>
          </Pressable>
        </View>
      )}
      </Formik>
    </>
  );
};

export default SignIn;