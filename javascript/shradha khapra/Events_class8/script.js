// let btn1 =document.querySelector("button");

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
//     // console.log("button was clicked");
// }
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked - handler1")
// })

// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked - handler2")
// })

// const handler3=()=>{
//     console.log("btn1 was clicked - handler3")
// };
// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked - handler4")
// })

// btn1.removeEventListener("click",handler3);

// let container=document.querySelector("div");
// container.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
//     console.log("you are inside div");
// }


// Q-1)create a toggle button that changes the screen to dark mode when clicked&light mode when clicked again

// let modebtn = document.querySelector("button");
// let currentmode="light";
// modebtn.addEventListener("click",()=>{
//     if(currentmode==="light"){
//         currentmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currentmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }

//     console.log(currentmode);
// })

// implementing through classes

let modebtn = document.querySelector("button");
let body=document.querySelector("body");
let currentmode="light";
modebtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currentmode);
})
