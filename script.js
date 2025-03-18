let boxes=document.querySelectorAll(".box");
let new_btn=document.querySelector("#new-btn");
let rst_btn=document.querySelector("#reset-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;  // playerO
//-----------winnpattern--------------------

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

//-------------box task---------
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerHTML="O";
            turnO=false;
            console.log("clicked");
        }
        else{
            box.innerHTML="X";
            turnO=true;
            //console.log("clicked");   
        }

        box.disabled=true;
        checkWinner();
    })
})


//-------------checkWinner---------------

let checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
               if(pos1val===pos2val && pos2val===pos3val)
               {
                    console.log("winner",pos1val);
                    showWinner(pos1val);
               }
        }
    }
}

//---------------show winner------------------

let showWinner=(winner)=>{
       msg.innerHTML=`Congratulations , Winner is player ${winner}`;
       msg_container.classList.remove("hide");
       disabledBox();
}

//-----------------box disable and enabled----------

let disabledBox=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

let enabledBox=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}

//------------------reset game-------

let resetGame=()=>{
    turnO=true;
    enabledBox();
    msg_container.classList.add("hide");
}

rst_btn.addEventListener("click",resetGame);
new_btn.addEventListener("click",resetGame);
