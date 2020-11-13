/** class for all the entered recipe
 *  @param type - Enter typeNumber - 1 Dinkel, 2 Roggen, 3 Weizen, 4 Mischbrot
 *  @param difficulty - how hard this takes - 1 short 3 long
 *  @param duration - how long the recipe takes from start to finish in minutes
 *  @param bruehStueck - if a brühstück is needed
 *  @param description - short synopsis of the recipe
 */
export default class Recipe {
  constructor(
    type,
    name,
    difficulty,
    bruehStueck = false,
    duration = blank,
    description = ""
  ) {
    this.type = type;
    this.name = name;
    this.difficulty = difficulty;
    this.duration = duration;
    this.bruehStueck = bruehStueck;
    this.description = description;
    this.id = recipeList.length + 1;
    this.creation = new Date();
  }
  //pushes object into recipe array
  pushIntoArray() {
    main.state.recipeList.push(this);
  }
  getDateCreated() {
    year = this.creation.getFullYear();
    month = this.creation.getMonth();
    day = this.creation.getDate();
    return `${day}.${month}.${year}`;
  }
  // set the time this bakes
  setBakingTime() {}
  // set time this has to lie around
  setSettingTime() {}
  // set HTML text of the recipe
  setText() {}
}

DinkelVollkorn = new recipe(1, "Dinkel-Vollkornbrot mit Sauerteig", 620);