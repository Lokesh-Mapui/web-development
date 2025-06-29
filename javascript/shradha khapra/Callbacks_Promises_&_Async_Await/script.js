// synchronous & asynchronous 
// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("hell0");
// },5000);
// console.log("three");
// console.log("four");

// callbacks

// function sum(a, b){
//     console.log("sum is =",a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(5,4,sum);

// CALLBACK HELL
// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log("data id =",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000)
// }

// getdata(23, ()=>{
//     getdata(245,()=>{
//     getdata(247);
// });
// });

//   PROMISES catch &then

// const getpromise =()=>{
//     return new Promise ((resolve,reject)=>{
//     console.log("i am a promise");
//     resolve("success");
//     // reject("network error");
// });
// };

// let promise =getpromise()
// promise.then((result)=>{
//     console.log("promise fullfilled",result);
// });

// promise.catch((err)=>{
//     console.log("rejected for",err);
// });



//  promise chaining
// function asyncfunc1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000)
//     })
// }


// function asyncfunc2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("Success");
//         },4000)
//     })
// }


// console.log("fetching data1.....");
// let p1=asyncfunc1();
// p1.then((result)=>{
//     console.log("fetching data2.....");
//     let p2=asyncfunc2();
//     p2.then((result)=>{
//     })
// })


// callback hell ka funcion  promise chaining se
// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data id =",dataid);
//         resolve("success");
//     },2000)
//     })
// }

// console.log("fetching data 1.....");
// getdata(1)
// .then((result)=>{
//     console.log("fetching data 2.....");
//     return getdata(2);
// })
// .then((result)=>{
//     console.log("fetching data 3.....");
//     return getdata(3);
// })
// .then((result)=>{
//     console.log(result);
// })


// async await
//  function api(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weaather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getweatherdata(){
//     await api();
// }

 function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data id =",dataid);
        resolve("success");
    },2000)
    })
}

async function getalldata(){
    console.log("fetching data 1.....");
    await getdata(1);
      console.log("fetching data 2.....");
    await getdata(2);
      console.log("fetching data 3.....");
    await getdata(3);
}


// IIFE
(async function (){
    console.log("fetching data 1.....");
    await getdata(1);
      console.log("fetching data 2.....");
    await getdata(2);
      console.log("fetching data 3.....");
    await getdata(3);
})()