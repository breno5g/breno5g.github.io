const colorPalette = [
  { color: '#f54242' },
  { color: '#54f542' },
  { color: '#4287f5' },
  { color: '#f1f1f1' },
  { color: '#4229f5' },
  { color: '#183f55' },
  { color: '#ff87f5' },
  { color: '#42fff5' },
  { color: '#9997f5' },
  { color: '#a9f9f9' },
  { color: '#119099' },
];

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const canvas = document.getElementById('pixel-board');
let selectedColor = '#000000';

function setColors() {
  for (let i = 1; i <= 3; i += 1) {
    const randomColor = Math.trunc(Math.random() * colorPalette.length);
    colors[i].style.backgroundColor = colorPalette[randomColor].color;
    colors[i].setAttribute('value', colorPalette[randomColor].color);
  }
}

setColors();

function selectColor(e) {
  selectedColor = e.target.getAttribute('value');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function canvasSize(e) {
  if (e.value === '') {
    alert('Board inválido!');
    return false;
  }
  if (e.value < 5) {
    e.value = 5;
  } else if (e.value > 50) e.value = 50;
  canvas.innerHTML = '';
  for (let i = 0; i < e.value * e.value; i += 1) {
    const pixel = document.createElement('pixel');
    pixel.classList.add('pixel');
    canvas.style = `grid-template-columns: repeat(${e.value}, 40px);`;
    canvas.appendChild(pixel);
  }
}

document.querySelector('#generate-board').addEventListener('click', (e) => {
  canvasSize(e.target.previousElementSibling);
});

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

canvas.onclick = (e) => {
  e.target.style.backgroundColor = selectedColor;
};

function clearBoard() {
  for (let i = 0; i < canvas.children.length; i += 1) {
    pixels[i].style.backgroundColor = '#fff';
  }
}

document.querySelector('#clear-board').addEventListener('click', clearBoard);
