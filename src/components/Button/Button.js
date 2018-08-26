import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './Button.css';

// const Button = ({ onClick, name, favorites }) => {

// const buttonClass = classNames({ [`${name}`]: true });

//   return (
//     <button className={buttonClass} onClick={onClick} value={name}>
//       {name}
//     </button>
//   );
// };

class Button extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const buttonClass = classNames({ [`${this.props.name}`]: true });
    return (
      <div>
        <button className={buttonClass} onClick={this.props.onClick} value={this.props.name}>
          {this.props.name}
        </button>
      </div>)
  }


}
export default Button;
