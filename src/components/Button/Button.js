import React from 'react';
import classNames from 'classnames/bind';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, name, activeButton }) => {
  const buttonClass = classNames({ [`${name}`]: true, active: activeButton === name });
  return (
    <button className={buttonClass} onClick={onClick} value={name}>
      {name}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  activeButton: PropTypes.string
};

export default Button;