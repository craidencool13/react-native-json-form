import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';
import FormGenerator from './components/FormGenerator';

const ReactNativeJsonForm = ({
  onSubmit,
  template,
  initialValues = {},
  submitBtnText = 'Submit',
}) => {
  ReactNativeJsonForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    template: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['text', 'select', 'date', 'array']).isRequired,
      }),
    ).isRequired,
    submitBtnText: PropTypes.string,
  };

  return (
    <Formik {...{initialValues, onSubmit}}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <Fragment>
          {template.map((input, key) => (
            <FormGenerator
              {...{key, ...input, handleChange, handleBlur, values}}
            />
          ))}
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{submitBtnText}</Text>
          </TouchableOpacity>
        </Fragment>
      )}
    </Formik>
  );
};

export default ReactNativeJsonForm;
