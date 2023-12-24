import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';
import { useState } from 'react';

import TextInput from './TextInput';



const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        marginLeft: 12,
        color: '#d73a4a',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [color, setColor] = useState('black');
  const showError = meta.touched && meta.error;

  if(color == 'black' && showError){
    setColor('red')
  }
  else if( color == 'red' && !showError){
    setColor('black')
  }

  return (
    <>
      <TextInput onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, {borderColor: color}]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
};

export default FormikTextInput;