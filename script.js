// Shows the two different players as a string
let computerChoice = "";
let userChoice = "";
// Game starts
start();
// Add event listeners + call user selection
function start() {
  computerChoice = "";
  userChoice = "";
  document.querySelector(".rock").addEventListener("click", getUserSelection);
  document.querySelector(".paper").addEventListener("click", getUserSelection);
  document
    .querySelector(".scissors")
    .addEventListener("click", getUserSelection);
}
// Contains the user selection + removes animtions + hids text
function getUserSelection(selected) {
  document
    .querySelector("#player1")
    .classList.remove("shake", "rock", "paper", "scissors");
  document
    .querySelector("#player2")
    .classList.remove("shake", "rock", "paper", "scissors");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  userChoice = selected.target.className;
  makeRandomComputerChoice();
}
// Generates 4 random number + assign a choice for the computer + ends the animation
function makeRandomComputerChoice() {
  let randomNumber = Math.round(Math.random() * 2 + 1);
  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  showAnimations();
  document
    .querySelector("#player1")
    .addEventListener("animationend", determineWinner);
}
// Add shake animations + disables buttons
function showAnimations() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#buttons").classList.add("disabled");
}
// Removes animition + shows players choices + determinds the result
function determineWinner() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.add(userChoice);
  document.querySelector("#player2").classList.add(computerChoice);
  document.querySelector("#buttons").classList.remove("disabled");
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      showWin();
    } else if (computerChoice === "paper") {
      showDraw();
    } else {
      showLose();
    }
  } else if (userChoice === "rock") {
    if (computerChoice === "rock") {
      showDraw();
    } else if (computerChoice === "paper") {
      showLose();
    } else {
      showWin();
    }
  } else {
    if (computerChoice === "rock") {
      showLose();
    } else if (computerChoice === "paper") {
      showWin();
    } else {
      showDraw();
    }
  }
}
// Showcases the winner
function showWin() {
  document.querySelector("#win").classList.remove("hidden");
  start();
}
// Showcases the loser
function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
  start();
}
// Showcases it is a draw
function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
  start();
}
