const url ="https://catfact.ninja/fact";
const factpara =document.querySelector("#fact");
const btn = document.querySelector("#button");

// api call
 
// const getfacts = async()=>{
//     console.log("getting data......")
//     let response = await fetch(url);
//     console.log(response);
//     let data=await response.json()
//     factpara.innerText= data.fact;
// };

// api call through promise chaining

function getfacts(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
         factpara.innerText= data.fact;
    })
}


btn.addEventListener("click",getfacts);