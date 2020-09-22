const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
    // Menu getters
    get appetizers() {
      return this._courses.appetizers;
    },
  
    get mains() {
      return this._courses.mains;
    },
  
    get desserts() {
      return this._courses.desserts;
    },
  
    // Menu Setters
  
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
  
    set mains(mainIn) {
      this._courses.mains = mainIn;
    },
  
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
  
      return this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      // return a dish from dishes by using randomIndex
      return dishes[randomIndex];
    },
  
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is £${totalPrice}.`;
    } 
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('mains', 'steak', 25.00);
  menu.addDishToCourse('desserts', 'brownie', 5.00);
  
  menu.addDishToCourse('appetizers', 'soup', 3.50);
  menu.addDishToCourse('mains', 'fish', 15.00);
  menu.addDishToCourse('desserts', 'ice cream', 5.50);
  
  menu.addDishToCourse('appetizers', 'cheese board', 4.50);
  menu.addDishToCourse('mains', 'pasta', 9.00);
  menu.addDishToCourse('desserts', 'apple pie', 6.50);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);
  