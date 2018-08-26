import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  handleClick = (event) => {
    this.props.activeButton(event.target.value);
  }


  render() {
    const buttonClass = classNames({ [`${this.props.name}`]: true, selected: this.state.active });
    return (
      <div>
        <button className={buttonClass} onClick={this.props.onClick} value={this.props.name}>
          {this.props.name}
        </button>
      </div>)
  }


}
export default Button;
