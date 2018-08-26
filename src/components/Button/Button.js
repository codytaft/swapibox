import React from 'react';
import classNames from 'classnames/bind';
import './Button.css';

const Button = ({ onClick, name, favorites }) => {
  const buttonClass = classNames({ [`${name}`]: true });

  return (
    <button className={buttonClass} onClick={onClick} value={name}>
      {name}
    </button>
  );
};
export default Button;