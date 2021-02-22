// Menu object, ready to accept arrays for each _courses value using Getter and Setter methods.
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(food) {
    this._courses.appetizers = food;
  },
  set mains(food) {
    this._courses.mains = food;
  }, 
  set desserts(food) {
    this._courses.desserts = food;
  },
  // Returns courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  // Add a dish (provided later) to the course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  // Get a random dish from a particular course (i.e. fries, from appetizers)
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  // Selects one dish from each course, and returns the meal (1 meal = 1 dish from each course), and displays the total price of the meal.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice} dollars.`;
  }
};

// Dishes available for appetizers
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 5.00);
menu.addDishToCourse('appetizers', 'fries', 3.50);

// Dishes available for main course
menu.addDishToCourse('mains', 'steak', 14.00);
menu.addDishToCourse('mains', 'pasta', 9.99);
menu.addDishToCourse('mains', 'salmon', 11.20);

// Dishes available for dessert
menu.addDishToCourse('desserts', 'pie', 4.00);
menu.addDishToCourse('desserts', 'ice cream', 3.00);
menu.addDishToCourse('desserts', 'coffee', 3.00);

// Assign function to constant
const meal = menu.generateRandomMeal();

// Call function to generate a meal plan
console.log(meal);
