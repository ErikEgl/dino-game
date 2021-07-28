const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

document.addEventListener('keydown', function (event) {
  jump();
});

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 400);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 35 && cactusLeft > 0 && dinoTop >= 125) {
    alert('GAME OVER!');
  }
}, 10);


const startBTN = document.querySelector('.startBTN');
const startScreen = document.querySelector('.startScreen');
const game = document.querySelector('.game');

startBTN.addEventListener("click", function(){
  startScreen.classList.add("displayNone")
  game.classList.remove("displayNone")
});

