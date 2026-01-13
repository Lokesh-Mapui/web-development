/*
1. write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum` .
*/

// let sum = 0;
// let i=1
// while (i<=5) {
//     sum+=i;
//     i++;
// }
// console.log(sum);



/*
2. write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named countdown.
*/

let countdown = [];
let j=5;
while (j>0) {
    countdown.push(j);
    j--;
}
console.log(countdown);




/*
3. write a `do while` loop that prompts a user to enter their favourite Tea type until they enter "stop" store each tea type in an array named `teacollection`
*/

// let teacollection = []
// let tea;
// do {
//     tea = prompt(`enter your favourite Tea (To stop type "Stop")`);
//     if (tea != "Stop") {
//         teacollection.push(tea);
//     }
// } while (tea!="Stop");


/*
4. write a `do while` loop that adds number from 1 to 3 and stores the result in a variable name `total`.
*/
let total =0;
let k=0;
do {
    total= total + k;
    k++
} while (k<=3);
console.log(total);

/*
5. write a `for` loop that multiplies each element in the array [2, 4, 6] by the 2 and stores the result in a new array named `multipliednumbers`.
*/

let multipliednumbers = [];
let numbers = [2, 4, 6];
for (let l = 0; l < numbers.length; l++) {
    takenumbers = numbers[l] * 2
    multipliednumbers.push(takenumbers);
}
console.log(multipliednumbers);


/*
6. write a `for` loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named `Citylist`
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let Citylist=[];
for (let m = 0; m < cities.length; m++) {
    const mycity = cities[m];
    Citylist.push(mycity)
}
console.log(Citylist);

