// let marks=[97,88,36,45];
// console.log(marks);

// let heroes=["ironman","thor","hulk","shaktiman","spiderman"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

// using for 0f loop
// for(let i of heroes){
//     console.log(i);
// }


// let cities=["delhi","lucknow","gujrat","mumbai","chennai"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// Q-1)for a given array with marks of students ->[85,97,44,37,76,60]
// find the average marks of the entires student
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let value of marks){
//     sum=sum+value;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the entire class = ${avg}`);

/*Q-2)for a given array with prices of 5 items->[250,645,300,900,50] all items have an offer
of 10% off on them .change the array to store final price after applying offer*/

// let items=[250,645,300,900,50];  
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i] =items[i] - offer;

// }
// console.log(items);

// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman"];
// let indianheroes=["shaktiman","krish"];
// let heroes=marvelHeroes.concat(dcHeroes,indianheroes);
// console.log(heroes);

// let marvelHeroes=["thor","spiderman","ironman"];
// marvelHeroes.unshift("antman","krish");
// marvelHeroes.shift(); 
// console.log(marvelHeroes);

//  let marvelHeroes=["thor","spiderman","ironman","antman","dr. strange"];
//  console.log(marvelHeroes);
//  console.log(marvelHeroes.slice(3,4)) 

// let arr=[1,2,3,4,5,6,7];
// arr.splice(4,0,32,54,76,45);


/* Q-1)create a array to store companies 
->"Bloomberg","microsoft","uber","google","ibm","Netflix"
a)Remove the first company of the array 
b)Remove ubber add ola in its place
c)add amazon at the end */

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);