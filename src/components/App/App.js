import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData';
import CleanData from '../Helper/Helper';
import Welcome from '../Welcome/Welcome.js'
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlingText: {},
      data: [],
      cleanData: new CleanData()
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
    .catch((error) => console.log(error.message))
  }

  playOpeningScrawl = (data) => {
    const crawlingText = this.state.cleanData.getOpeningScrawl(data)
    this.setState({ crawlingText })
  }

  fetchNameData = (category) => {
    fetch(`https://swapi.co/api/people/`)
    .then(response => response.json())
    .then(data => this.getSpecies(data.results))
    .then(people => this.setState({ data: people }))
    .catch((error) => console.log(error.message))
  };

  getHomeworld = (peopleData) => {
    const homeWorld = peopleData.map(person => {
      fetch(person.homeworld)
        .then(response => response.json())
        .then(data => console.log(data))
    })
  return homeWorld
  }
  getSpecies = (peopleData) => {
    const species = peopleData.map(person => {
      fetch(person.species)
        .then(response => response.json())
        .then(data => console.log(data))
    })
  return species
  }

  

  setFavorites = () => {

  }

  render() {
    const { data, crawlingText } = this.state
    return (
      <div className="App">
        <div>
          <Nav fetchNameData={this.fetchNameData}/>
          <Welcome crawlingText={crawlingText} />
          {/* <CardContainer data={data}/> */}
        </div>
      </div>
    );
  }
}

export default App;
