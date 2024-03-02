const sound = new Audio("./assets/ColbyandIsaacMotorcycleNoises.wav");
const motorcycle = document.getElementById("motorcycle");

function playSound() {
  sound.play();
}

function moveBike() {
  motorcycle.classList.remove("park-motorcycle");
  motorcycle.classList.add("move-motorcycle");
  sound.play();
}

let animationCount = 0;

motorcycle.addEventListener("animationend", function () {
  animationCount++;
  if (animationCount == 4) {
    motorcycle.classList.remove("move-motorcycle");
    motorcycle.classList.add("park-motorcycle");
    animationCount = 0;
  }
});
