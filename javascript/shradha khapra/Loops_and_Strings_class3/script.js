// for loop
// for(let count=1;count<=5;count++){
//     console.log("lokesh mapui");
// }

// calculate sum of 1 to 5
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum =", sum);

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// do-while loop
// let i=1;
// do{
//     console.log("i =", i);
//     i++;
// }while(i<=5);

// for of loop
// let str="javascript";
// let size=0;
// for(let i of str){
//     console.log("i =", i);
//     size++;
// }
// console.log("size of strings: ",size);

// for in loop
// let student ={
//     name:"lokesh",
//     age:20,
//     cgpa:8,
//     ispass:true
// };

// for(let key in student){
//     console.log("key =", key ,"value =",student[key]);
// }

// practice question
// Q-1) print alleven numbers from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log("i =",i);
//     }
//  }

// Q-2) create a game where you start with any random game number.
// ask the user to keep guessing the game number untill the user enters correct value
// let gameNum=25;
// let userNum=prompt("Guess the game number :");
// while(userNum!=gameNum){  
//     let userNum=prompt("you enterd wrong number. pls guess again :");
// }
// console.log("congratulations, you entered the right number");


// strings in js
// let str="apna gang";
// console.log(str[5]);

// Template Literals
// let obj ={
//     item : "pen",
//     price :10, 
// }
// let output=`the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output)
// // console.log("the cost of ",obj.item," is ",obj.price)

// let specialString=`This is template literal`;
// console.log(typeof specialString);

// let str="apna\tgang";
// console.log(str.length)

// string methods 
// convert into lowercae to uppercase
// let str="lokesh";
// let newstr=str.toUpperCase();
// console.log(str);
// console.log(newstr)

//  convert into uppercase to lowercae
// let str="LOKESH";
// let newstr=str.toLowerCase();
// console.log(str);
// console.log(newstr);

// remove whitespace in string
// let str="   LOKESH   mapui  ";
// let newstr=str.trim();
// console.log(newstr);
// console.log(str);

// prompt the user to enter their full name.
// generate a username for them based on the input.
// start username with @ followed by their full name and ending with the fullname length
let fulname=prompt("enter your fullname without spaces");
let username="@" + fulname +fulname.length ;
console.log(username);