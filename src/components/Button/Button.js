import React from 'react';
import classNames from 'classnames/bind';
import './Button.css';

const Button = ({ onClick, name, favorites, activeButton }) => {
  const buttonClass = classNames({ [`${name}`]: true, active: activeButton === name });
  return (
    <button className={buttonClass} onClick={onClick} value={name}>
      {name}
    </button>
  );
};

export default Button;