let userscor =0;
let compscore =0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#computer-score");

const gencompchoice=()=>{
    let options =["rock", "paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame =()=>{
    msg.innerText ="Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner =(userwin,Userchoice,computerchoice)=>{
    if(userwin===true){
        userscor++;
        userscorepara.innerText=userscor;
        msg.innerText =`you win! your ${Userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText =`you lose. ${computerchoice} beats your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playgame =(Userchoice)=>{
    // generate computer choice
    const computerchoice=gencompchoice();

    if(Userchoice===computerchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(Userchoice==="rock"){
            userwin = computerchoice ==="paper" ? false:true;
        }
        else if(Userchoice==="paper"){
            userwin = computerchoice ==="scissors" ? false:true;
        }
        else{
             userwin = computerchoice ==="rock" ? false:true;
        }
        showwinner(userwin,Userchoice,computerchoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice = choice.getAttribute("id");
        playgame(Userchoice);
    })
})