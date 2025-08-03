console.log("hisashiburi dane");


function checkGame(arr){
    const winCombo = [
        [arr[0], arr[1], arr[2]],
        [arr[3], arr[4], arr[5]],
        [arr[6], arr[7], arr[8]],
        [arr[0], arr[3], arr[6]],
        [arr[1], arr[4], arr[7]],
        [arr[2], arr[5], arr[8]],
        [arr[0], arr[4], arr[8]],
        [arr[2], arr[4], arr[6]]
    ];
    for(let nestedArr of winCombo){
        if(nestedArr.every(num => num === "O")){
            return "Player1 WIN";
        } else if(nestedArr.every(num => num === "X")){
            return "Player2 WIN"; 
        } else if(nestedArr.every(num => num !== undefined)){
            return "DRAW";
        }
    }
}
function Gameboard(){
    const gameboard = new Array(9);

    const getBoard = () => gameboard;

    return {getBoard};
}

function screenController(){
    const boardDiv = document.querySelector(".board");
    const game = Gameboard();
    const board = game.getBoard();

    for(let cell of board){
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        
        boardDiv.appendChild(cellDiv);
    }

}

screenController();