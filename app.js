const boxes=document.querySelectorAll(".box");
const msg=document.querySelector("#msg");
const msg_container=document.querySelector(".msg-container");
const new_btn=document.querySelector("#new-btn");
const reset_btn=document.querySelector("#reset-btn");

let turnO=true; //playerO turn
let win_patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,7],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner=()=>{
    for(let patterns of win_patterns)
    {
        let pos1val=boxes[patterns[0]].innerHTML;
        let pos2val=boxes[patterns[1]].innerHTML;
        let pos3val=boxes[patterns[2]].innerHTML; 
        
        if(pos1val!=""  && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
} 


const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations The winner is player${winner}`;
    msg_container.classList.remove("hide");
    disabledBox();
}

const disabledBox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enabledBox=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}

const resetGame=()=>{
    turnO=true;
    msg_container.classList.add("hide");
    enabledBox();
}

new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
