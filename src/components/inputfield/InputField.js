import React from 'react';

const InputField = ({name, type, placeholder, value, valid, onChange}) => (
  <input
    className = {"InputField " + (valid === false ? 'Invalid' : '')}
    name = {name}
    type = {type}
    placeholder = {placeholder}
    value = {value}
    data-testid = {name}
    onChange = {onChange}
  />
);

export default InputField;