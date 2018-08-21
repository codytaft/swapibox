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

  getPeople = (data) => {
    const peopleData = {
      name: data.name
    }
    return peopleData
  }
}