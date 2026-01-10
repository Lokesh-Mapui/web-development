/*
write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum` .
*/

// let sum = 0;
// let i = 0;
// while (i<=5) {
//     sum= sum+i
//     i++;
// }
// console.log(sum);


/*
write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named countdown.
*/

// countdown=[];
// let num=0;
// let i=5;
// while (i>0) {
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);


/*
write a `do while` loop that prompts a user to enter their favourite Tea type until they enter "stop" store each tea type in an array named `teacollection`
*/

// let teacollection = [];
// let tea;
// do {
//     tea =prompt(`enter your favorite tea (type "stop" to finish)`);

//     if (tea != "stop") {
//         teacollection.push(tea)
//     }

// } while (tea != "stop");


/*
write a `do while` loop that adds number from 1 to 3 and stores the result in a variable name `total`.
*/
let  total =0;
let i=0;
do {
    total= total+i;
    i++;
} while (i<=3);
console.log(total);

/*
write a `for` loop that multiplies each element in the array [2, 4, 6] by the 2 and stores the result in a new array named `multipliednumbers`.
*/

// let multipliednumbers = [];
// let numbers = [2, 4, 6];

// for (let l = 0; l < numbers.length; l++) {
//     takenumbrers = numbers[l] * 2;
//     multipliednumbers.push(takenumbrers) 
// }
// console.log(multipliednumbers);

/*
write a `for` loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named `Citylist`
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let Citylist =[]
for (let i = 0; i < cities.length; i++) {
    const mycity = cities[i];
    Citylist.push(mycity)
}
console.log(Citylist);
