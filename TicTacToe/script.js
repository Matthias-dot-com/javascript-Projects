const cells = document.querySelectorAll("[data-id]");
const board = document.querySelector("#board");
const restartButton = document.querySelector(".restartBtn");
const winningMessageContainer = document.querySelector("#winningMessage");
const winningText = document.querySelector(".winning-text");

const winingCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 7],
  [2, 4, 6],
];

let xsTurn;
const X = "x";
const O = "o";
startGame();
restartButton.addEventListener("click", startGame);
function startGame() {
  xsTurn = true;
  cells.forEach((cell) => {
    cell.classList.remove(X);
    cell.classList.remove(O);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setHoverClass();

  winningMessageContainer.classList.remove("show");
}

function handleClick(e) {
  let cell = e.target;
  let currentPlayer = xsTurn ? X : O;
  placeMark(cell, currentPlayer);

  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurn();
    setHoverClass();
  }
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

function checkWin(currentPlayer) {
  return winingCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(X) || cell.classList.contains(O);
  });
}

function endGame(draw) {
  if (draw) {
    winningText.innerText = "Draw!";
  } else {
    winningText.innerText = xsTurn ? "X WINS!" : "O WINS!";
  }
  winningMessageContainer.classList.add("show");
}
