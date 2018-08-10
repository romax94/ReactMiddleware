import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      className="input"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
