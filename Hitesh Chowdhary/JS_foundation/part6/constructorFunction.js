function person(name, age) {
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new car("Toyota", "Camry");
// console.log(myCar);

let myNewcar = new car("Tata", "Safari");
// console.log(myNewcar);

function tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}
let lemonTea = new tea("Lemon tea");
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword")
    }
    this.name = name;
}
let tea1 = new Drink ("tea");
let coffee = new Drink("Coffee");