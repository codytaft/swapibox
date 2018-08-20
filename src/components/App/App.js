import React, { Component } from 'react';
import './App.scss';
import mockData from '../../data/MockData.js'

class App extends Component {
  constructor() {
    super()
    this.state={
      data=[]
    }
  }

  componentDidMount = () => {
    this.playOpeningScrawl()
  }

  playOpeningScrawl = () => {
    
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SWAPIBOX</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
