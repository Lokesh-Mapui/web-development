/*
1. write a `for` loop that loops through the array ["green tea", "black tea", "oolong tea", "chai"] and stops the loop when it finds `"chai"`.
store all teas before chai in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "oolong tea", "chai"];
let selectedTeas=[]

for (let i = 0; i < teas.length; i++) {
    if (teas[i]=== "chai") {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);



/*
2. write a `for` loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "paris" store the other cities in a new array named `visitedcities`
*/

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedcities = [];

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "Paris" || cities[i] === "paris") {
//         continue;
//     }

//     visitedcities.push(cities[i])
// }
// console.log(visitedcities);


/*
3. use a `for of` loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found store the number before 4 in an array named `smallnumbers`
*/

// let numbers = [1, 2, 3, 4, 5];
// let smallnumbers = []

// for (const i of numbers) {

//     if(i===4){
//         break
//     }
//     smallnumbers.push(i)
// }
// console.log(smallnumbers)


/*
4. use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea" store the other teas in an array named `preferredTeas`
*/

// let teas = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];

// for (const i of teas) {
//     if (i === "herbal tea") {
//         continue;
//     }
//     preferredTeas.push(i)
// }
// console.log(preferredTeas);


/*
5. use a `for-in` loop to loop through an object containing City populations stop the loop when the population of "Berlin" is found and store all previous cities populations in a new object named `Citypopulations`

let citiesPopulation ={
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};
*/

// let citiesPopulation = {
//   London: 8900000,
//   "New York": 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };

// let Citynewpopulations = {}
// for (const city in citiesPopulation) {
//     if (city === 'Berlin') {
//         break
//     }
//     Citynewpopulations[city] = citiesPopulation[city]; 
// }
// console.log(Citynewpopulations);



/*
6. use a `for-in` loop to loop through an object containing City populations.
skip any city with a population below 3 million and stores the rest in a new object named `largecities`

let worldCities ={
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

*/

// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
//   Paris: 2200000,
// };
// let largecities = {};
// for (const city in worldCities) {
//     if (worldCities[city] <3000000) {
//         continue;
//     }
//     largecities[city] = worldCities[city]
// }
// console.log(largecities);


/*
7. write a `foreach` loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"] stop the loop when chai is found and store all previous types in an array named `availableteas`
*/

// let teacollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableteas = []
// teacollection.forEach(function(tea) {
//     if (tea === "chai" ) {
//         return;
//     }
//     availableteas.push(tea)
// })
// console.log(availableteas);


/*
8. write a `forEach` loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"] skip Sydney and store the other cities in a new array name `travelled cities`
*/

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let travelledcities = [];

// cities.forEach(function(city) {
//     if (city === "Sydney") {
//         return;
//     }
//     travelledcities.push(city);
// });
// console.log(travelledcities);

/*
9. write a for loop that iterates through the array  [2,5,7,9] skip the value `7` and multiply the rest by 2. store the results in a new array named `doublenumbers`
*/

// let numbers = [2, 5, 7, 9];
// let doublenumbers = []
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i]=== 7) {
//     continue;
//   }
//   doublenumbers.push(numbers[i] *2)
// }
// console.log(doublenumbers)


/*
10. use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "Jasmine Tea" "herbal tea"] 
    and stop when the length of the current tea name is greater than 10 
    store the teas iterated over in an array named shortteas
*/

// let myTeas = ["chai", "green tea", "black tea", "Jasmine Tea", "herbal tea"]
// let shortteas = []

// for (const tea of myTeas) {
//     if(tea.length > 10){
//         break;
//     }
//     shortteas.push(tea)
// }
// console.log(shortteas);