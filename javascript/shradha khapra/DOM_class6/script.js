// alert("You Want TO Enter The Dark Web !");
// console.dir(window.document);

//   document.getElementById("heading");
//   console.log(heading);

// let heading=document.getElementById("myid");
// console.log(heading);

// let headings=document.getElementsByClassName("heading-class");
// console.log(headings);

// let paras=document.getElementsByTagName("p");
// console.log(paras);

// let elements=document.querySelector("p");
// console.log(elements);


// let allelements=document.querySelectorAll(".heading-class");
// console.log(allelements);

// let div= document.querySelector("div");
// console.dir(div);

// Q-1)create a H2 heading element with text-"hello javascript".Append "from apna gang students" to this text using js
//  let h2=document.querySelector("h2");
//  console.dir(h2.innerText);  
//  h2.innerText =h2.innerText + " from apna gang students";
//  console.log(h2.innerText);


//  Q-2)creates 3 divs with common class name-"box" .access them & add some unique text to each them
let divs= document.querySelectorAll(".box");
// divs[0].innerText="new unique value1";
// divs[1].innerText="new unique value2";
// divs[2].innerText="new unique value3";

let index=1;
for(div of divs){
    div.innerText=`new uniue value ${index}`;
    index++;
}