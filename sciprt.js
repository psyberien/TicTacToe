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

function gameBoard(){
    const gameboard = new Array(6);
}