console.log("lokesh");

function sayhello(){
    console.log("i would like to say hello");
}

function saybye(){
    console.log("See You Soon!");
}

setTimeout(() =>{
    sayhello();
}, 2000);

setTimeout(()=>{
    saybye();
},4000);

for (let index = 0; index < 10; index++) {
    console.log(index);
}