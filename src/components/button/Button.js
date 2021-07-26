import React from 'react';

const Button = ({type, value}) => (
  <input
    className = "Submit"
    type = {type}
    value = {value}
  />
);

export default Button;