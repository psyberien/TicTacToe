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
    const playerWon = document.querySelector(".winner");
    const playerOne = prompt("Enter player one name", "Player One Name");
    const playerTwo = prompt("Enter player two name", "Player Two Name");
    const game = gameController(playerOne, playerTwo);
    

    updateScreen();
    function updateScreen(){
            boardDiv.replaceChildren();

            const board = game.getBoard();
            const activePlayer = game.getActivePlayer();

            playerTurnDiv.textContent = `${activePlayer.name}'s turn`;
            playerTurnDiv.style.color = "white";
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
                if(board[index] === undefined && playerTurnDiv.style.color !== "green"){
                    board[index] = activePlayer.value;
                    game.switchPlayerTurn();
                    updateScreen();
                    checkGame(board, activePlayer);
                }   
            })
        })
    }

    function checkGame(arr, player){
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
    const activePlayer = game.getActivePlayer()

    for(let nestedArr of winCombo){
        if(nestedArr.every(num => num === "X")){
                playerTurnDiv.textContent = `${player.name} won`;
                playerTurnDiv.style.color = "green";
                return;
            } else if(nestedArr.every(num => num === "O")){
                playerTurnDiv.textContent = `${player.name} won`;
                playerTurnDiv.style.color = "green";
                return;
            }
        }

        if(newArr.every(num => num !== undefined)){
            playerTurnDiv.textContent = `DRAW`;
            playerTurnDiv.style.color = "green";
        }
    }
}


const myButton = document.querySelector(".startBtn");
myButton.addEventListener("click", function(event){
    displayController();
})
