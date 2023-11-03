let turn = "X";
let gameOver = false;

function makeMove(cell) {
    if (cell.innerHTML !== "" || gameOver) {
        return;
    }
    cell.innerHTML = turn;
    checkWin();
    toggleTurn();
}

function checkWin() {
    let board = document.getElementsByClassName("cell");
    let winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winningConditions) {
        let a = board[condition[0]].innerHTML;
        let b = board[condition[1]].innerHTML;
        let c = board[condition[2]].innerHTML;
        if (a === b && b === c && a !== "") {
            gameOver = true;
            document.getElementById("message").innerHTML = `${turn} Kazandı!`;
            return;
        }
    }
    let fullBoard = true;
    for (let cell of board) {
        if (cell.innerHTML === "") {
            fullBoard = false;
            break;
        }
    }
    if (fullBoard) {
        gameOver = true;
        document.getElementById("message").innerHTML = "Berabere!";
    }
}

function toggleTurn() {
    turn = turn === "X" ? "O" : "X";
}

function resetBoard() {
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    turn = "X";
    gameOver = false;
    document.getElementById("message").innerHTML = "";
}

function redirectToAnotherPage() {
    window.location.href = "home.html";
}