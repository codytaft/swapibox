import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData';
import CleanData from '../Helper/Helper';
import { fetchScrawl } from '../../data/FetchApi.js';
import Welcome from '../Welcome/Welcome.js'
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlingText: {},
      data: [],
      favorites: [],
      cleanData: []
    }
  }

  componentDidMount = () => {
    this.playOpeningScrawl()
    // this.fetchNameData()
  }

  // fetchAPI = () => {
  //   const randomNumber = Math.floor(Math.random() * 6 + 1)
  //   fetch(`https://swapi.co/api/films/${randomNumber}/`)
  //   .then(response => response.json())
  //   .then(data => this.playOpeningScrawl(data))
  //   .catch((error) => console.log(error.message))
  // }

  playOpeningScrawl = async (data) => {
    const crawlingText = await fetchScrawl()
    this.setState({ crawlingText })
  }

  // fetchNameData = async (category) => {

  //   .then(species => this.setState({ data: species }))
  //     .catch((error) => console.log(error.message))
  // };


  selectFavorite = (name) => {
    const favorites = this.state.favorites;
    const isFavorite = favorites.includes(name);
    const foundCard = favorites.find(card => card.name === name);

    if (isFavorite) {
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected
    }

  }

  deselectFavorite = (name) => {

  }

  render() {
    const { data, crawlingText } = this.state
    return (
      <div className="App">
        <div>
          <Nav fetchNameData={this.fetchNameData} />
          <Welcome crawlingText={crawlingText} />
          {/* <CardContainer data={data}/> */}
        </div>
      </div>
    );
  }
}

export default App;
