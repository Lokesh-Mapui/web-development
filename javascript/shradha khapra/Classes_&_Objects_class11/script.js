// const student ={
//     fullname:"lokesh mapui",
//     age:20,
//     cgpa:8.5,
//     printmarks:function(){
//         console.log(this.cgpa); //student.cgpa
//     }
// };


// const employ ={
//     calcTax1(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanarjun ={
//     salary:50000,
//     calcTax1(){
//     console.log("tax rate is 20%");
//     },
// };

// karanarjun.__proto__ = employ; 

// class Toyotacar{
//     constructor(){
//         console.log("creatimg new object");  
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let fortunar = new Toyotacar();
// fortunar.setBrand("fortunar");
// let lexus = new Toyotacar(); 

// inheritance in js

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{

// }
// let obj= new child();

// class person{

//     constructor(){
//         console.log("enter parent constructor");
//         this.species ="homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super(); //to invoke parent class parent class constructor
//         this.branch=branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engobj =new engineer("chemical enginner");


// question -1
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
//         console.log("website data is loading.....");
//     }
// }

// let student1 =new user("ms","ms@gmail.com");
// let student2 = new user("virat","virat@gmail.com");


// Q-2)

// let data="secret information";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
//         console.log("website data is =",data);
//     }
// }


// class admin extends user{
//     constructor(name,email){
//         super(name,email);

//     }
//     editdata(){
//         data ="some new value";
//     }
// }

// let admin1 = new admin("ms","ms@gmail.com");


// out of the class
let a =5;
let b=10;

console.log("a =",a);
console.log("b =",b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);

try{
    console.log("a + b =", a + c);
}catch(err){
    console.log(err);
}
console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
