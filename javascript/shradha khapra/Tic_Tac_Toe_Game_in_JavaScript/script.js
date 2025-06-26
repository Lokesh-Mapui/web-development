let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn=document.querySelector("#newgame-button");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO= true;
let count =0;
const winningpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame =()=>{
    turnO =true;
    count=0;
    enablebtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            box.classList.add("o");
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("x");
            turnO=true;
        }
        box.disabled=true;
        count++;

        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw=()=>{
    msg.innerText=`game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const disablebtn =()=>{
    for (let box of boxes){
        box.disabled =true;
    }
};

const enablebtn =()=>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText ="";
        box.classList.remove("x", "o");
    }
}

const showwinner =(Winner)=>{
    msg.innerText=`congratlations,winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const checkwinner =()=>{
    for(let pattern of winningpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;



        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2&&pos2===pos3){
                showwinner(pos1);
                return true;
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);