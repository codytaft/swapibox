import React, { Component } from 'react';
import './Nav.css';
import Button from '../Button/Button.js';
import PropTypes from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    const { value } = event.target;
    if (value === 'PEOPLE') {
      this.props.getPeopleData();
      this.props.toggleButton(value);
    } else if (value === 'VEHICLES') {
      this.props.getVehicleData();
      this.props.toggleButton(value);
    } else if (value === 'PLANETS') {
      this.props.getPlanetData();
      this.props.toggleButton(value);
    } else if (value === 'FAVORITES') {
      this.props.toggleButton(value);
      this.props.toggleFavorites();
    }
  };

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPI-Box</h1>
          <span className="fav-row">
            <Button onClick={this.handleClick} activateButton={this.props.activateButton} activeButton={this.props.activeButton} name="FAVORITES" />
            <div className="fav-counter">{this.props.favoriteCount}</div>
          </span>
        </div>
        <div className="button-row">
          <Button onClick={this.handleClick} activateButton={this.props.activateButton} activeButton={this.props.activeButton} name="PEOPLE" />
          <Button onClick={this.handleClick} activateButton={this.props.activateButton} activeButton={this.props.activeButton} name="VEHICLES" />
          <Button onClick={this.handleClick} activateButton={this.props.activateButton} activeButton={this.props.activeButton} name="PLANETS" />
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  getPeopleData: PropTypes.func,
  getPlanetData: PropTypes.func,
  getVehicleData: PropTypes.func,
  toggleFavorites: PropTypes.func,
  favoriteCount: PropTypes.number, 
  activateButton: PropTypes.func,
  activeButton: PropTypes.string
};

export default Nav;