import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData';
import CleanData from '../Helper/Helper';
import { fetchScrawl, fetchNameData } from '../../data/FetchApi.js';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlingText: {},
      data: [],
      displayData: [],
      favorites: [],
      cleanData: []
    }
  }

  componentDidMount = () => {
    this.playOpeningScrawl()
  }

  playOpeningScrawl = async () => {
    const crawlingText = await fetchScrawl()
    this.setState({ crawlingText })
  }

  getPeopleData = async () => {
    const data = await fetchNameData()
    
    this.setState({ data })
    this.setDisplayData(data)
  };

  setDisplayData = (selectedData) => {
    this.setState({ displayData: selectedData})
  }

  selectFavorite = (name) => {
    const favoriteState = this.state.favorites;
    const foundCard = this.state.data.find(card => card.name === name);
    const isFavorite = favoriteState.includes(foundCard);
    if (isFavorite) {
      const favoriteFilter = favoriteState.filter((favorite) => {
        return favorite.name !== name
      })
      this.setState({ favorites: favoriteFilter })
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected
    } else {
      const favorites = [...favoriteState, foundCard]
      this.setState({ favorites })
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected
    }
  }

  toggleFavorites = () => {
    this.setDisplayData(this.state.favorites)
  }

  deselectFavorite = (name) => {

  }

  render() {
    const { data, crawlingText, displayData } = this.state
    return (
      <div className="App">
        <Nav setDisplayData={this.setDisplayData} getPeopleData={this.getPeopleData} toggleFavorites={this.toggleFavorites} />
        <div className="container-wrap">
          <CardContainer crawlingText={crawlingText} displayData={displayData} selectFavorite={this.selectFavorite} />
        </div>
      </div>
    );
  }
}

export default App;
