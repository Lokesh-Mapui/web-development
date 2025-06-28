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



class animals{
    constructor(){
        console.log("enter parents folder");
        this.human ="homo sapiens";
    }
    speak(){
        console.log("animal is barking");
    }
    eat(){
        console.log("animal is eating");
    }
}

class dog extends animals{
    constructor (name){
        console.log("enter child folder");
        super();
        this.name=name
        console.log("exit child folder");
    }
}

let birds =new dog("bilati");