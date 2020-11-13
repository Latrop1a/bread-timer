//android app
//timer bread

//erstmal funktionen sammeln bevor das ganze umgewandelt wird

//initialize
class timer {
  constructor() {}
}

//all ingredients used in baking
//type for symbol and grouping
//unit for measurement (gram, liter, etc)
class ingredient {
  constructor(type, name, description, unit, allergyInfo) {
    this.type = type;
    this.name = name;
    this.description = description;
    this.unit = unit;
    this.allergyInfo = allergyInfo;
  }
}

//data structure
const state = {
  ingredientList: [],
  recipeList: [],
  favorites: [],
  recentlyUsed: [],
};

const query = searchView.getInput();
