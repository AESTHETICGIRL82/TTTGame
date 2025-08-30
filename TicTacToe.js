let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msgg");

let message =document.querySelector("#msg");

let turnO=true;
let count=0;

let winPattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6], 
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

];
const resetGame = () =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

 boxes.forEach((box) => {
     box.addEventListener("click",()=>{
         console.log("btn clicked");
         if(turnO){
            box.innerText="O";
            turnO=false;
         }
         else{
            box.innerText="X";
            turnO=true;
         }
         box.disabled=true;
         count++;

        let isWinner= checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
 });

 const gameDraw=()=>{
  message.innerText ="Game was a Draw";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes=()=> {
  for(let box of boxes) {
    box.disabled=false;
    box.innerText="";
  }
};
 const showWinner=(winner)=>{
   message.innerText=`Congratulations! ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
      disableBoxes();

 };

 const checkWinner =()=>{
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3 ){
                console.log("winner",val1);
                showWinner(val1);
                return true;
            
        }
        }

    }
    return false;
 };
 newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);