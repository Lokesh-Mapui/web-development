console.log('chaliya shuru karte hai');

//object create
// const rectangle={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//FACTORY FUNCTION

// function createRectangle(len,bre){
//     const rectangle={
//         length:len,
//         breadth:bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// let rectangleobj1=createRectangle(4,5);
// let rectangleobj2=createRectangle(2,3);
// let rectangleobj3=createRectangle(7,9);
 

//constructor function ->PASCAL NOTATION->first letter of every word is capital
// constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function () {
//         console.log('drawing');
//     };
// }

// Object creation using constructor function
// let rectangleObject = new Rectangle(4, 6);

// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 
//     'breadth', 
//     `
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function () {
//         console.log('drawing');
//     };
//     `
// );

//     // object creation using rectangle1
//     let rect=new Rectangle1(2,3);

//     console.log(rect);


// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);

// let a={value:1 0};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

let rectangle={
    length:2,
     breadth:4
};

// for in loop
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// for of loop
// for (let key of Object.keys(rectangle)){
//     console.log(key);
// }

// if('breadth'in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// objecet clone #1
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for (let key in src)
// {
//     dest[key]=src[key];
//     console.log(dest[key]); 
// }

// objecet clone #1
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// Assign clone #2
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest=Object.assign({},src);
// console.log(dest);
// src.a++;
// console.log(dest)

// spread clone #3

let src={
    a:10,
    b:20,
    c:30
};

let dest={...src};
console.log(dest);
src.a++;
console.log(dest);