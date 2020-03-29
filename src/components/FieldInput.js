import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';
import InputContainer from '../containers/InputContainer';

const FieldInput = ({
  name,
  inputStyle = null,
  handleChange,
  handleBlur,
  ...rest
}) => {
  TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
  };
  return (
    <InputContainer {...{inputStyle}}>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...rest}
      />
    </InputContainer>
  );
};

export default FieldInput;
