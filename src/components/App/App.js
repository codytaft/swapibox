import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData'
import CleanData from '../Helper/Helper'
import Welcome from '../Welcome/Welcome.js'

class App extends Component {
  constructor() {
    super()
    this.state={
      crawlingText: {},
      data: []
    }
  }

  componentDidMount = () => {
    this.playOpeningScrawl()
  }

  playOpeningScrawl = () => {
    const newScrawl = new CleanData()
    const crawlingText = newScrawl.getOpeningScrawl(MockData)
    this.setState( { crawlingText })
  }
  render() {
    return (
      <div className="App">
        <div>
          <Welcome crawlingText={ this.state.crawlingText }/>
        </div>
      </div>
    );
  }
}

export default App;
