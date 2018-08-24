import React, { Component } from 'react';
import './Nav.css';
import Button from '../Button/Button.js';
class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    const { value } = event.target;
    if (value === 'peopleBtn') {
      this.props.getPeopleData();
    } else if (value === 'vehiclesBtn') {
      this.props.getVehicleData();
    } else if (value === 'planetsBtn') {
      this.props.getPlanetData();
    }
  };

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPI-Box</h1>
          <span className="fav-row">
            <Button onClick={this.props.toggleFavorites} name="FAVORITES" />
            <div className="fav-counter">{this.props.favoriteCount}</div>
          </span>
        </div>
        <div className="button-row">
          <Button onClick={this.handleClick} name="peopleBtn" />
          <Button onClick={this.handleClick} name="vehiclesBtn" />
          <Button onClick={this.handleClick} name="planetsBtn" />
        </div>
      </div>
    );
  }
}

export default Nav;
