import React, { Component } from 'react';
import './App.css';
import { MockData } from '../../data/MockData';
import CleanData from '../Helper/Helper';
import { fetchScrawl, fetchNameData } from '../../data/FetchApi.js';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlingText: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      displayData: [],
      favorites: [],
      cleanData: [],
      favoritesDisplaying: false,
      favoriteCounter: 0
    };
  }

  componentDidMount = () => {
    this.playOpeningScrawl();
  };

  playOpeningScrawl = async () => {
    const crawlingText = await fetchScrawl();
    this.setState({ crawlingText });
  };

  getPeopleData = async () => {
    const data = await fetchNameData();
    this.setState({ data });
    this.setDisplayData(data);
    this.setState({ favoritesDisplaying: false });
  };

  getVehicleData = async () => {
    const data = await fetchNameData();
    this.setState({ data });
    this.setDisplayData(data);
    this.setState({ favoritesDisplaying: false });
  };

  getPlanetData = async () => {
    const data = await fetchNameData();
    this.setState({ data });
    this.setDisplayData(data);
    this.setState({ favoritesDisplaying: false });
  };

  setDisplayData = displayData => {
    if (this.favoritesDisplaying) {
      this.removeFavorite();
    }
    this.setState({ displayData });
  };

  selectFavorite = name => {
    const favoriteState = this.state.favorites;
    const foundCard = this.state.data.find(card => card.name === name);
    const isFavorite = favoriteState.includes(foundCard);

    if (isFavorite) {
      const favoriteFilter = favoriteState.filter(favorite => {
        return favorite.name !== name;
      });
      this.setState({ favorites: favoriteFilter }, () => this.removeFavorite());
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected;
    } else {
      const favorites = [...favoriteState, foundCard];
      this.setState({ favorites });
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected;
    }
  };

  toggleFavorites = () => {
    this.setState({ favoritesDisplaying: true });
    this.setDisplayData(this.state.favorites);
  };

  removeFavorite = () => {
    this.setDisplayData(this.state.favorites);
  };

  render() {
    const { crawlingText, displayData, favoritesDisplaying } = this.state;
    return (
      <div className="App">
        <Nav
          setDisplayData={this.setDisplayData}
          getPeopleData={this.getPeopleData}
          toggleFavorites={this.toggleFavorites}
        />
        <div className="container-wrap">
          <CardContainer
            crawlingText={crawlingText}
            displayData={displayData}
            selectFavorite={this.selectFavorite}
            removeFavorite={this.removeFavorite}
            favoritesDisplaying={favoritesDisplaying}
          />
        </div>
      </div>
    );
  }
}

export default App;
