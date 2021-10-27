const res = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
let score = 0;

function randomize() {
  const color = Math.trunc(Math.random() * 255);
  return color;
}

function resText() {
  res.textContent = `(${randomize()}, ${randomize()}, ${randomize()})`;
}

function setColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[
      i
    ].style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
  }
  balls[
    Math.trunc(Math.random() * 6)
  ].style.backgroundColor = `rgb${res.textContent}`;
}

document.querySelector('ul').addEventListener('click', (e) => {
  const teste1 = e.target.classList.contains('ball');
  const teste2 = e.target.style.backgroundColor === `rgb${res.textContent}`;
  if (teste1 && teste2) {
    document.querySelector('#answer').innerText = 'Acertou!';
    score += 3;
    document.querySelector('#score').textContent = score;
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
  }
});

function init() {
  resText();
  setColors();
}

init();

document.querySelector('#reset-game').addEventListener('click', () => {
  init();
  document.querySelector('#answer').innerText = 'Escolha uma cor';
});
