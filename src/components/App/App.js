import React, { Component } from 'react';
import './App.css';
import {
  fetchScrawl,
  fetchPeopleData,
  fetchVehicleData,
  fetchPlanetData
} from '../../data/FetchApi.js';
import { cleanHomeworld, cleanPlanetData } from '../Helper/Helper.js'
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
      favoriteCount: 0,
      data: []
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
    if (this.state.peopleData.length > 0) {
      this.setDisplayData(this.state.peopleData);
      this.setState({ favoritesDisplaying: false });
    } else {
      const data = await fetchPeopleData();
      const peopleData = await cleanHomeworld(data)
      this.setState({ peopleData: peopleData });
      this.setDisplayData(peopleData);
      this.setState({ favoritesDisplaying: false });
    }
  };

  getVehicleData = async () => {
    if (this.state.vehicleData.length > 0) {
      this.setDisplayData(this.state.vehicleData);
      this.setState({ favoritesDisplaying: false });
    } else {
      const vehicleData = await fetchVehicleData();
      this.setState({ vehicleData: vehicleData });
      this.setDisplayData(vehicleData);
      this.setState({ favoritesDisplaying: false });
    }
  };

  getPlanetData = async () => {
    if (this.state.planetData.length > 0) {
      this.setDisplayData(this.state.planetData);
      this.setState({ favoritesDisplaying: false });
    } else {
      const data = await fetchPlanetData();
      const allPlanets = await cleanPlanetData(data)
      this.setState({ planetData: allPlanets });
      this.setDisplayData(allPlanets);
      this.setState({ favoritesDisplaying: false });
    }
  };

  setDisplayData = displayData => {
    this.setState({ displayData });
    if (this.state.favoritesDisplaying) {
    }
  };

  selectFavorite = name => {
    const favoriteState = this.state.favorites;
    const foundCard = this.state.displayData.find(card => card.name === name);
    const isFavorite = favoriteState.includes(foundCard);
    if (isFavorite) {
      const favoriteFilter = favoriteState.filter(favorite => {
        return favorite.name !== name;
      });
      const favoriteCount = favoriteFilter.length;
      foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected;
      this.setState({ favorites: favoriteFilter, favoriteCount });
      if (this.state.favoritesDisplaying) {
        const favoriteCount = favoriteFilter.length;
        foundCard.isFavoriteSelected = !foundCard.isFavoriteSelected;
        this.setState({ favorites: favoriteFilter, favoriteCount }, () =>
          this.removeFavorite()
        );
      }
    } else {
      const favorites = [...favoriteState, foundCard];
      const favoriteCount = favorites.length;
      this.setState({ favorites, favoriteCount });
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
    const {
      crawlingText,
      displayData,
      favoritesDisplaying,
      favoriteCount,
      favorites
    } = this.state;
    return (
      <div className="App">
        <Nav
          setDisplayData={this.setDisplayData}
          getPeopleData={this.getPeopleData}
          getPlanetData={this.getPlanetData}
          getVehicleData={this.getVehicleData}
          toggleFavorites={this.toggleFavorites}
          favoriteCount={favoriteCount}
        />
        <div className="container-wrap">
          <CardContainer
            crawlingText={crawlingText}
            displayData={displayData}
            selectFavorite={this.selectFavorite}
            removeFavorite={this.removeFavorite}
            favoritesDisplaying={favoritesDisplaying}
            favorites={favorites}
          />
        </div>
      </div>
    );
  }
}

export default App;
