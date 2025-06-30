const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";




const dropdowns=document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
let i=0;
for(let select of dropdowns){
    for (currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value= currcode;
             if (select.name==="from" &&currcode==="USD"){
                newoption.selected="selected";
            }else if (select.name==="to" &&currcode==="INR"){
                newoption.selected="selected";
                }
        select.append(newoption);
    }
}

dropdowns.forEach((select) => {
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
});

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtvalue=amount.value;
    if(amtvalue===""||amtvalue<1){
        amtvalue=1;
        amount.value="1";
    }

    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(url);
    let data= await response.json();
    console.log(data);

})