import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPIBox</h1>
          <div className="favorites">FAV PLACEHOLDER</div>
        </div>
        <div className="button-row">
          <div className="favorites people">PEOPLE</div>
          <div className="favorites planets">PLANETS</div>
          <div className="favorites vehicles">VEHICLES</div>
        </div>
      </div>
    )
  }
}

export default Nav;