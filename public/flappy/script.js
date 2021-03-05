/* eslint-disable operator-assignment */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');
  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let i  = 0

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = '220px';
    bird.style.left = '100px';
  }
  let timerId = setInterval(startGame(), 20);
  
  function jump() {
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
  }
  
  


});

