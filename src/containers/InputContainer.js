import React from 'react';
import {View} from 'react-native';

import style from '../styles/appStyle';

const InputContainer = ({children, inputStyle}) => {
  return <View style={[style.inputContainer, {inputStyle}]}>{children}</View>;
};

export default InputContainer;
