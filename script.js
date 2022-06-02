"use strict";
let startBtn = document.getElementById("startBtn");
let startArea = document.getElementById("start");
let selectDiffBtn = document.getElementById("selectLevel");
let selectDifficultyArea = document.getElementById("diffcultySelect");
let gameArea = document.getElementById("gameArea");
let diffShow = document.getElementById("dif");
let checkQuessBtn = document.getElementById("submitAns");
let guessNum = document.getElementById("guessNumber");
let textShow = document.getElementById("highLow");
let resetBtn = document.getElementById("resetGame");
let difficulty = "";
let helloWorld = "";
let gameStatus = false;
let count = 0;
startBtn.addEventListener("click", () => {
  selectDifficultyArea.style.display = "flex";
  startArea.style.display = "none";
});
selectDiffBtn.addEventListener("click", () => {
  selectDifficultyArea.style.display = "none";
  startArea.style.display = "none";
  gameArea.style.display = "flex";
  difficulty = document.getElementById("levelSelect").value;
  if (difficulty == "Easy") diffShow.innerText = `Between 1 - 10`;
  if (difficulty == "Medium") diffShow.innerText = `Between 1 - 100`;
  if (difficulty == "Hard") diffShow.innerText = `Between 1 - 1000`;
  randomNumGen();
});
function randomNumGen() {
  if (difficulty == "Easy") {
    helloWorld = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
  if (difficulty == "Medium") {
    helloWorld = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
  if (difficulty == "Hard") {
    helloWorld = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  }
}
guessNum.addEventListener("focus", () => {
  if (!gameStatus) {
    textShow.style.color = "black";
    textShow.innerText = "Enter A Guess Number Below";
    gameArea.classList.remove("animate__headShake");
    gameArea.classList.remove("animate__bounce");
  }
});

checkQuessBtn.addEventListener("click", () => {
  count++;
  if (guessNum.value == helloWorld) {
    gameStatus = true;
    if (count == 1) {
      checkQuessBtn.innerText = `You Guessed In ${count} Count⚡`;
    } else {
      checkQuessBtn.innerText = `You Guessed In ${count} Counts`;
    }
    textShow.innerText = "Hurray! You Won The Game 🥳🎉";
    textShow.style.color = "green";
    resetBtn.style.display = "block";
    gameArea.classList.add("animate__bounce");
    guessNum.setAttribute("disabled", "true");
    guessNum.style.border = "1.5px solid black";
    guessNum.style.color = "black";
    checkQuessBtn.setAttribute("disabled", "true");
  } else if (guessNum.value > helloWorld) {
    gameArea.classList.remove("animate__fadeIn");
    gameArea.classList.add("animate__headShake");
    textShow.innerText = "Lower Number Please!";
  } else if (guessNum.value < helloWorld) {
    gameArea.classList.remove("animate__fadeIn");
    gameArea.classList.add("animate__headShake");
    textShow.innerText = "Higher Number Please";
  }
});
