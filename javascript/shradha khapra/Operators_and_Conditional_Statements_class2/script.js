// arithmetic operators
// let a=5;
// let b=2;

// console.log("a + b =", a +b);
// console.log("a - b =", a-b);
// console.log("a * b =", a *b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a**b);

// unary operator
// let a=5;
// let b=2;
// console.log("a  =", a," &  b =", b);
// a = --a;
// console.log("a =", a);

// assignment operator
// let a=5;
// let b=2;
// console.log("a  =", a," &  b =", b);
// a+=4
// console.log("a =", a);
// a**=4
// console.log("a =", a);

// logical operators
// let a=6;
// let b=5;
// let cond1=a>b; //true
// let cond2=a==6; //true
// console.log("cond1& & cond2 =",cond1||cond2);

//conditional statement
// let age = 28;
// if(age >= 18){
//     console.log("you can vote");
// }

// if(age<18){
//     console.log("you can not vote");
// }

// let mode="light";
// let color;
// if(mode === "dark"){
//     color= "black";
// } else{
//     color="white";
// }
// console.log(color);

// odd or even
// let num=20;
// if(num%2===0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }

// let mode="silver";
// let color;
// if(mode=="dark"){
//     color=black;
// }else if(mode=="blue"){
//     color="blue";
// }else if(mode=="pink"){
//     color="pink";
// }
// else{
//     color="white";
// }
// console.log(color);

// if(mode==="dark") console.log(mode);

// let age=25;
// let result = age>18 ? "adult":"not adult";
// console.log(result)


// Q->1
/* get user to input a number using prompt ("enter a number:").
check if  the number is a multiple of 5 or not */

// let num=prompt("enter a number:");
// if(num%5===0){
//     console.log("num is multiple of 5");
// }else{
//     console.log("num is not multiple of 5");
// }

// Q->2
// write a code which can gives grades to students according to their scores

let marks=prompt("enter your score(0-100):");
let grade;
if(marks>=80 && marks<=100){
    grade="A";
}else if(marks>=70 && marks<=89){
    grade="B";
}else if(marks>=60 && marks<=69){
    grade="C";
}
else if(marks>=50 && marks<=59){
    grade="D";
}else if(marks>=0 && marks<=49){
    grade="F";
}
console.log("acccording to ypur scores, your grade was :", grade);