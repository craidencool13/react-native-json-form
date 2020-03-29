import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FieldInput from './FieldInput';

import styles from '../styles/appStyle';

const FormGenerator = ({formContainerStyle = null, name, type, ...rest}) => {
  FormGenerator.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'select', 'date', 'array']).isRequired,
  };
  let comp = null;

  switch (type) {
    case 'text':
      comp = <FieldInput {...{name, ...rest}} />;
      break;
  }

  if (!comp) {
    return null;
  }

  console.log('comp', comp);

  return <View style={[formContainerStyle]}>{comp}</View>;
};

export default FormGenerator;
