const text = document.getElementById('carta-texto');
const output = document.getElementById('carta-gerada');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function randomClass(n) {
  return Math.floor(Math.random() * n);
}

function counter(count) {
  const counted = document.querySelector('#carta-contador');
  counted.textContent = `${count}`;
}

document.querySelector('#criar-carta').addEventListener('click', () => {
  if (text.value === '' || text.value[0] === ' ') {
    output.textContent = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  const generatedText = text.value.split(' ');
  output.innerHTML = '';
  for (let i = 0; i < generatedText.length; i += 1) {
    const word = document.createElement('span');
    word.textContent = generatedText[i];
    word.classList.add(style[randomClass(3)]);
    word.classList.add(size[randomClass(3)]);
    word.classList.add(rotate[randomClass(2)]);
    word.classList.add(skew[randomClass(2)]);
    output.appendChild(word);
  }
  const count = generatedText.length;
  counter(count);
});
