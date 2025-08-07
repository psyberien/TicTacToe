console.log("hisashiburi dane");

function Gameboard(){
    const gameboard = new Array(9);

    const getBoard = () => gameboard;

    return {getBoard};
}

function gameController(playerOneName, playerTwoName) {
    const board = Gameboard();
    X = "X";
    O = "O";

    const players = [{
        name: playerOneName,
        value: X
    },
    {
        name: playerTwoName,
        value: O
    }];

    let activePlayer  = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer =  () => activePlayer;



    return {switchPlayerTurn, getActivePlayer, getBoard: board.getBoard};
}

function displayController(){
    const boardDiv = document.querySelector(".board");
    const playerTurnDiv = document.querySelector(".turn");
    const game = gameController("Gojo", "Sukuna");
    

    updateScreen();
    function updateScreen(){
            boardDiv.replaceChildren();

            const board = game.getBoard();
            const activePlayer = game.getActivePlayer();

            playerTurnDiv.textContent = `${activePlayer.name}'s turn`;
            for(let cell of board){
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            if(cell != undefined){
                cellDiv.textContent = cell.valueOf();
            }
            cellDiv.style.fontSize = "69px";
            cellDiv.style.fontWeight = "bold";
            boardDiv.appendChild(cellDiv);
        }

        const cells = document.querySelectorAll(".cell");

        cells.forEach((cell , index) => {
            cell.addEventListener("click", ()=> {
                board[index] = activePlayer.value;
                game.switchPlayerTurn();
                console.log(board);
                console.log(`${index}`);
                updateScreen();
                checkGame(board);
            })
        })
    }

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
    const newArr = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]];

    for(let nestedArr of winCombo){
        if(nestedArr.every(num => num === "X")){
            console.log(`Player1 WIN`);
            } else if(nestedArr.every(num => num === "O")){
                console.log(`Player2 WIN`); 
            }
        }

        if(newArr.every(num => num !== undefined)){
            console.log("DRAWWWWW");
        }
    }
}


const myButton = document.querySelector(".startBtn");
myButton.addEventListener("click", function(event){
    displayController();
})