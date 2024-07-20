const cells = document.querySelectorAll("[data-id]");
const board = document.querySelector("#board");
const button = document.querySelector(".restartBtn");
const winningMessageContainer = document.querySelector("#winningMessage");
const winningText = document.querySelector(".winning-text");

const WiningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let xsTurn;
const X = "x";
const O = "o";
startGame();
function startGame() {
  xsTurn = true;
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setHoverClass();
}

function handleClick(e) {
  let cell = e.target;
  let currentPlayer = xsTurn ? X : O;
  placeMark(cell, currentPlayer);
  //checkWin;
  //checkDraw;
  switchTurn();
  setHoverClass();
}

function placeMark(cell, player) {
  cell.classList.add(player);
}

function switchTurn() {
  xsTurn = !xsTurn;
}

function setHoverClass() {
  if (xsTurn) {
    board.classList.remove(O);
    board.classList.add(X);
  } else {
    board.classList.remove(X);
    board.classList.add(O);
  }
}
