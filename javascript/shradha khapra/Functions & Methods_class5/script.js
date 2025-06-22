// function myfunction(){
//     console.log("welcome to apna gang");
//     console.log("we are learning js:");
// }

// myfunction(); 

// Function -> 2 numbers sum
// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,5);

// arrowfunction 
// const arrowsum =(a,b)=>{
//     console.log(a+b);
// };

// Q-1)create a function using the "function keyword that takes a string as an argument & returns the number ofvowelsin the string"

// function countvowels(str){
//     let count=0;
//     for(const char of str ){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++
//         }
//     }
//     console.log(count);
// }

//  countvowels("hello ji");


// create a arrow function  to perform the same task

// const countvowels =(str)=>{
//         let count=0;
//     for(const char of str ){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++
//         }
//     }
//     console.log(count);
// }

//  countvowels("hello ji");

// for each loop
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });

// let cities=["mumbai","hyderabad","america"];
// cities.forEach((city)=>{
//     console.log(city.toUpperCase());
// });

// for a given array of numbers,print the square of eacj=h value using for each loop

// let nums=[2,4,5,6,7,8];
// nums.forEach((num)=>{
//     console.log(num*num)
// });

// let nums=[45,66,34]
// let newarray=nums.map((val)=>{
//     return val*val;
// })
// console.log(newarray)

// let arr=[1,3,4,5,6,2,8];
// let newarr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newarr);

// let arr=[1,2,3,4];
// const output=arr.reduce((res,current)=>{
//     return res +current;
// });
// console.log(output);


// Q-1)we are given array of marks of students.filter out of the marks of students that scored90+
// let marks=[55,91,76,89,56,99,93,];
// let newarray=marks.filter((val)=>{
//     return val> 90;
// });
// console.log(newarray);

/*Q-2)take a number N as a input from user. create an Array of numbers from 1 to N 
 use the reduced method to calculate sum of all numbers in the array 
 use the reduced method to calculate product of all numbers in the array*/


 let n=prompt("enter  a number :");
 let arr=[];
 for (let i=1;i<=n;i++){
    arr[i-1]=i;
 }
console.log(arr);

let newarr=arr.reduce((res,current)=>{
    return res+current;
});
console.log("sum of all numbers are =",newarr);

let output=arr.reduce((res,current)=>{
    return res*current;
});
console.log("product of all numbers are =",output);