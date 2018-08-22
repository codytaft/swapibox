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
    .then(data => this.getStats(data.results))
    .then(people => console.log(people))
    .then()
    .catch((error) => console.log(error.message))
  };

  getStats = (data) => {
    const name = this.getName(data);
    const homeWorld = this.getHomeworld(data);
    const species = this.getSpecies(data);
    const population = this.getPopulationHomeworld(data);

    return Promise.all([name, homeWorld, species, population])
  }

  getName = (peopleData) => {
    return peopleData.map(person => {
      return person.name
    })
  }

  getHomeworld = (peopleData) => {
    return peopleData.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => data.name)
    })
  }

  getPopulationHomeworld = (peopleData) => {
    return peopleData.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => data.population)
    })
  }

  getSpecies = (peopleData) => {
    return peopleData.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => data.name)
    })
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
