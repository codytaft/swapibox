import React, { Component } from 'react';
import './Nav.css';
import Button from '../Button/Button.js'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }

  handleClick = (event) => {
    const { name, value} = event.target;
    this.props.fetchNameData()
    // this.setState({[name]: value})
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPI-Box</h1>
          <span className="fav-row">
            <Button onClick={this.handleClick} favorites={this.state.favorites}/>
            <div className="favorites">FAV PLACEHOLDER</div>
            <div className="fav-counter">0</div>
          </span>
        </div>
        <div className="button-row">
          <Button onClick={this.handleClick} name='peopleBtn' />
          <Button onClick={this.handleClick} name='vehiclesBtn'/>
          <Button onClick={this.handleClick} name='planetsBtn'/>
        </div>
      </div>
    )
  }
}

export default Nav;