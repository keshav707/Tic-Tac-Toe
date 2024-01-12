let boxes = document.querySelectorAll(".boxes"); 

var isFoundWinner = false;

let ar = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let Value0 = true;


let id2 = document.querySelector(".winner");
const Winner = (box) => {
    for(let val of ar){
        let v = boxes[val[0]].value;
        let v2 = boxes[val[1]].value;
        let v3 = boxes[val[2]].value;
        if(v !== "" && v2 !== "" && v3 != ""){
            if(v === v2 && v2 === v3){
                id2.innerText = `Winner is ${box.value}`;
                id2.classList.remove("hide");
                isFoundWinner = true;

                for(let i of boxes ){

                    i.disabled = true;
                }
            }
        }
    }
}


const Restart = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.value = "";
        id2.innerText = "";
        id2.classList.add("hide");
        len = 0;
        isFoundWinner = false;
    }
}

let NewGame = document.querySelector(".NewGame");
NewGame.addEventListener("click",Restart);


let reset = document.querySelector(".reset");
reset.addEventListener("click", Restart);



var len = 0;
boxes.forEach( (box) => {
    box.addEventListener("click" , ()=>{
        if(Value0){
            box.value = 0;
            box.style.color = "#8E0505";
            Value0 = false;
            box.disabled = true;

        }
        else {
            box.value = 'X';
            box.style.color = "#D24545";
            Value0 = true;
            box.disabled = true;
        }

        Winner(box);
        
        console.log("sdkfjiojf9fjie");
        len++;
        if(len == 9 && !isFoundWinner){
            alert("Game Over");
            if(confirm("do you want to restart")){
                Restart();
            }
        }
    })
});
