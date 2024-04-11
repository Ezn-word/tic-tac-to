
let player1 ="X";
let arr = Array(9).fill(null);

function checkWinner(){
    if(
 ( arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2] ) ||    
 ( arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5] ) ||    
 ( arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8] ) ||
 ( arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ) ||
 ( arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6] ) ||
 ( arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6] ) ||
 ( arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] ) ||  
 ( arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] )  
    ) {
document.write(`winner is a ${player1}. Congratulations you win the game.`);

    }

    if(!arr.some((e) => e === null)){
        document.write(`the game gones to be draw!. try again!`)
    }
};

function handleClick(el) { 
const id = Number(el.id);
if(arr[id] !== null) return;
arr[id] = player1;
el.innerText = player1;
checkWinner();
player1 = player1 === "X" ? "O" : "X";
 
}