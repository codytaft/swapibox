export const appMockData = [
  {
    Homeworld: "Tatooine",  
    Population: "200000",
    Species: "Human",
    isFavoriteSelected: false,
    name: "Luke Skywalker"
  }
];

export const expectedAppMock = [{
  "birth_year": "19BBY",
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "eye_color": "blue",
  "films": ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
  "gender": "male",
  "hair_color": "blond",
  "height": "172",
  "homeworld": "https://swapi.co/api/planets/1/",
  "mass": "77",
  "name": "Luke Skywalker",
  "skin_color": "fair",
  "species": ["https://swapi.co/api/species/1/"],
  "starships": ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
  "stats": {
    "Homeworld": undefined,
    "Population": undefined,
    "Species": undefined
  },
  "url": "https://swapi.co/api/people/1/",
  "vehicles": ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
}, {
  "birth_year": "112BBY",
  "created": "2014-12-10T15:10:51.357000Z",
  "edited": "2014-12-20T21:17:50.309000Z",
  "eye_color": "yellow",
  "films": ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"],
  "gender": "n/a",
  "hair_color": "n/a",
  "height": "167",
  "homeworld": "https://swapi.co/api/planets/1/",
  "mass": "75",
  "name": "C-3PO",
  "skin_color": "gold",
  "species": ["https://swapi.co/api/species/2/"],
  "starships": [],
  "stats": {
    "Homeworld": undefined,
    "Population": undefined,
    "Species": undefined
  },
  "url": "https://swapi.co/api/people/2/",
  "vehicles": []
}];

export const appMockPeople = {
  "count": 87,
  "next": "https://swapi.co/api/people/?page=2",
  "previous": null,
  "results": [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
  }
        
  ]};

export const appMockSpecies = {
  "name": "Human",
  "classification": "mammal",
  "designation": "sentient",
  "average_height": "180",
  "skin_colors": "caucasian, black, asian, hispanic",
  "hair_colors": "blonde, brown, black, red",
  "eye_colors": "brown, blue, green, hazel, grey, amber",
  "average_lifespan": "120",
  "homeworld": "https://swapi.co/api/planets/9/",
  "language": "Galactic Basic",
  "people": [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/5/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/10/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/12/",
    "https://swapi.co/api/people/14/",
    "https://swapi.co/api/people/18/",
    "https://swapi.co/api/people/19/",
    "https://swapi.co/api/people/21/",
    "https://swapi.co/api/people/22/",
    "https://swapi.co/api/people/25/",
    "https://swapi.co/api/people/26/",
    "https://swapi.co/api/people/28/",
    "https://swapi.co/api/people/29/",
    "https://swapi.co/api/people/32/",
    "https://swapi.co/api/people/34/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/51/",
    "https://swapi.co/api/people/60/",
    "https://swapi.co/api/people/61/",
    "https://swapi.co/api/people/62/",
    "https://swapi.co/api/people/66/",
    "https://swapi.co/api/people/67/",
    "https://swapi.co/api/people/68/",
    "https://swapi.co/api/people/69/",
    "https://swapi.co/api/people/74/",
    "https://swapi.co/api/people/81/",
    "https://swapi.co/api/people/84/",
    "https://swapi.co/api/people/85/",
    "https://swapi.co/api/people/86/",
    "https://swapi.co/api/people/35/"
  ],
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/7/",
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-10T13:52:11.567000Z",
  "edited": "2015-04-17T06:59:55.850671Z",
  "url": "https://swapi.co/api/species/1/"
};

export const appMockHomeworld = {
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304",
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "residents": [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/8/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/62/"
  ],
  "films": [
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-09T13:50:49.641000Z",
  "edited": "2014-12-21T20:48:04.175778Z",
  "url": "https://swapi.co/api/planets/1/"
};

export const appMockPlanet = {
  "count": 61,
  "next": "https://swapi.co/api/planets/?page=2",
  "previous": null,
  "results": [{
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/68/",
      "https://swapi.co/api/people/81/"
    ],
    "films": [
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "https://swapi.co/api/planets/2/"
  },
  {
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.co/api/planets/3/"
  },
  {
    "name": "Hoth",
    "rotation_period": "23",
    "orbital_period": "549",
    "diameter": "7200",
    "climate": "frozen",
    "gravity": "1.1 standard",
    "terrain": "tundra, ice caves, mountain ranges",
    "surface_water": "100",
    "population": "unknown",
    "residents": [],
    "films": [
      "https://swapi.co/api/films/2/"
    ],
    "created": "2014-12-10T11:39:13.934000Z",
    "edited": "2014-12-20T20:58:18.423000Z",
    "url": "https://swapi.co/api/planets/4/"
  },
  {
    "name": "Dagobah",
    "rotation_period": "23",
    "orbital_period": "341",
    "diameter": "8900",
    "climate": "murky",
    "gravity": "N/A",
    "terrain": "swamp, jungles",
    "surface_water": "8",
    "population": "unknown",
    "residents": [],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-10T11:42:22.590000Z",
    "edited": "2014-12-20T20:58:18.425000Z",
    "url": "https://swapi.co/api/planets/5/"
  },
  {
    "name": "Bespin",
    "rotation_period": "12",
    "orbital_period": "5110",
    "diameter": "118000",
    "climate": "temperate",
    "gravity": "1.5 (surface), 1 standard (Cloud City)",
    "terrain": "gas giant",
    "surface_water": "0",
    "population": "6000000",
    "residents": [
      "https://swapi.co/api/people/26/"
    ],
    "films": [
      "https://swapi.co/api/films/2/"
    ],
    "created": "2014-12-10T11:43:55.240000Z",
    "edited": "2014-12-20T20:58:18.427000Z",
    "url": "https://swapi.co/api/planets/6/"
  }
  ]};

export const appMockResidents =
    {
      "name": "Leia Organa",
      "height": "150",
      "mass": "49",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "19BBY",
      "gender": "female",
      "homeworld": "https://swapi.co/api/planets/2/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [],
      "created": "2014-12-10T15:20:09.791000Z",
      "edited": "2014-12-20T21:17:50.315000Z",
      "url": "https://swapi.co/api/people/5/"
    };

export const appMockVehicle = 
  {
    "count": 39,
    "next": "https://swapi.co/api/vehicles/?page=2",
    "previous": null,
    "results": [{
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "https://swapi.co/api/vehicles/4/"
    },
    {
      "name": "T-16 skyhopper",
      "model": "T-16 skyhopper",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": "14500",
      "length": "10.4",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "passengers": "1",
      "cargo_capacity": "50",
      "consumables": "0",
      "vehicle_class": "repulsorcraft",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:01:52.434000Z",
      "edited": "2014-12-22T18:21:15.552614Z",
      "url": "https://swapi.co/api/vehicles/6/"
    },
    {
      "name": "X-34 landspeeder",
      "model": "X-34 landspeeder",
      "manufacturer": "SoroSuub Corporation",
      "cost_in_credits": "10550",
      "length": "3.4",
      "max_atmosphering_speed": "250",
      "crew": "1",
      "passengers": "1",
      "cargo_capacity": "5",
      "consumables": "unknown",
      "vehicle_class": "repulsorcraft",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:13:52.586000Z",
      "edited": "2014-12-22T18:21:15.583700Z",
      "url": "https://swapi.co/api/vehicles/7/"
    },
    {
      "name": "TIE/LN starfighter",
      "model": "Twin Ion Engine/Ln Starfighter",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": "unknown",
      "length": "6.4",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "65",
      "consumables": "2 days",
      "vehicle_class": "starfighter",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:33:52.860000Z",
      "edited": "2014-12-22T18:21:15.606149Z",
      "url": "https://swapi.co/api/vehicles/8/"
    }
    ]};

