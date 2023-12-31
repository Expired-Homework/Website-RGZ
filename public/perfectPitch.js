const gameMenu = document.getElementById("gameMenu");
const game = document.getElementById("game");
const timerLabel = document.getElementById("timer");
const scoreLabel = document.getElementById("score");
const notes = [
  new Audio("./assets/sounds/A.wav"),
  new Audio("./assets/sounds/B.wav"),
  new Audio("./assets/sounds/C.wav"),
  new Audio("./assets/sounds/D.wav"),
  new Audio("./assets/sounds/E.wav"),
  new Audio("./assets/sounds/F.wav"),
  new Audio("./assets/sounds/G.wav"),
];

let gameState = false;
let answer = null;
let score = null;
let sec = null;
let timer = null;

function startGame() {
  score = 0;
  sec = 59;
  timerLabel.innerText = `Timer: 60s`;
  scoreLabel.innerText = `Score: ${score}`;

  gameMenu.classList.add("hide");
  game.classList.remove("hide");
  playNewNote();
  clearInterval(timer);
  timerStart();
  gameState = true;
}

function quitGame() {
  game.classList.add("hide");
  gameMenu.classList.remove("hide");
  gameState = false;
}

function playNewNote() {
  answer = Math.floor(Math.random() * 7);
  console.log(answer);
  notes[answer].play();
}

function repeatNote() {
  notes[answer].play();
}

function checkAnswer(guess) {
  if (gameState) {
    if (guess == answer) {
      alert("Correct");
      score++;
      scoreLabel.innerText = `Score: ${score}`;
    } else {
      alert("Wrong");
    }
    //Play next note
    playNewNote();
  }
}

function timerStart() {
  timer = setInterval(function () {
    timerLabel.innerText = `Timer: ${sec}s`;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      gameState = false;
    }
  }, 1000);
}
