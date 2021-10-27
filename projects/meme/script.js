const memeContainer = document.getElementById('meme-image-container');
const imgInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

imgInput.addEventListener('change', (e) => {
  memeImage.src = URL.createObjectURL(e.target.files[0]);
});

// source : https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

document.querySelector('#text-input').addEventListener('keyup', () => {
  const str = document.getElementById('text-input');
  memeText.textContent = str.value;
  console.log('hoi');
});

document.querySelector('#fire').addEventListener('click', () => {
  memeContainer.style = 'border: 3px dashed red;';
  console.log('tutu');
});
document.querySelector('#water').addEventListener('click', () => {
  memeContainer.style = 'border: 5px double blue;';
});
document.querySelector('#earth').addEventListener('click', () => {
  memeContainer.style = 'border: 6px groove green;';
});

document.querySelector('#meme-1').addEventListener('click', () => {
  memeImage.src = './imgs/meme1.png';
  memeText.textContent = '#FarofaSupremacy';
});

document.querySelector('#meme-2').addEventListener('click', () => {
  memeImage.src = './imgs/meme2.png';
  memeText.textContent = '#MarioComunista';
});

document.querySelector('#meme-3').addEventListener('click', () => {
  memeImage.src = './imgs/meme3.png';
  memeText.textContent = '#Friday';
});

document.querySelector('#meme-4').addEventListener('click', () => {
  memeImage.src = './imgs/meme4.png';
  memeText.textContent = '#Tutu';
});
