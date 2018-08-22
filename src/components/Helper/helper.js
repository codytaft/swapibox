export default class CleanData {
  constructor() {
  }

  getOpeningScrawl = (data) => {
    const openingScrawl = {
      title: data.title,
      episode: data.episode_id,
      scrawl: data.opening_crawl
    }
    return openingScrawl
  }

  getPeople = (people) => {
    const peopleData = people.map(person => {
      return {name: person.name}
    })
    return peopleData
  }

  getHomeworld = (world) => {
    const worldData = world.map(planet => {
      return {homeworld: planet.name}
    })
    return worldData
  }

  createCleanPeople = (people) => {
    return people.reduce((newPerson, person) => {
      newPerson = {name: person.name}
      return newPerson
    }, {})
  }
}
