let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}
// console.log(car.start());

function person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new person("john Doe", 38)
// console.log(john.name);



function animal(type) {
  this.type = type;
}

animal.prototype.speak = function (){
    return`${this.type} makes a  sound`
}


Array.prototype.hitesh = function(){
    return `Custom method ${this}`;
};
let myArray = [1,2,3]
// console.log(myArray.hitesh());


class vehicle {
    constructor(make, model){
        this.make = make;
        this.model =model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`
    }
}
let myCar = new Car ("Tesla", "Model X")
// console.log(myCar.drive());



let vehOne = new vehicle("Toyota", "Corollla");
console.log(vehOne.make);
