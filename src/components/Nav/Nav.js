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
    if (value === 'People') {
      this.props.getPeopleData();
    } else if (value === 'Vehicles') {
      this.props.getVehicleData();
    } else if (value === 'Planets') {
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
          <Button onClick={this.handleClick} name="People" />
          <Button onClick={this.handleClick} name="Vehicles" />
          <Button onClick={this.handleClick} name="Planets" />
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD

Nav.propTypes = {
  getPeopleData: PropTypes.func,
  getPlanetData: PropTypes.func,
  getVehicleData: PropTypes.func,
  toggleFavorites: PropTypes.func,
  favoriteCount: PropTypes.number
};
=======
>>>>>>> Linting errors

export default Nav;
