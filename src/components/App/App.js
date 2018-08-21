import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData'
import CleanData from '../Helper/Helper'
import Welcome from '../Welcome/Welcome.js'
import Nav from '../Nav/Nav';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlingText: {},
      data: []
    }
  }

  componentDidMount = () => {
    this.fetchAPI()
  }
  
  fetchAPI = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    fetch(`https://swapi.co/api/films/${randomNumber}/`)
    .then(response => response.json())
    .then(data => this.playOpeningScrawl(data))
    .catch(() => alert('fucked this data is'))
  }

  playOpeningScrawl = (data) => {
    const newScrawl = new CleanData()
    const crawlingText = newScrawl.getOpeningScrawl(data)
    this.setState({ crawlingText })
  }
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
          <Welcome crawlingText={this.state.crawlingText} />
        </div>
      </div>
    );
  }
}

export default App;
