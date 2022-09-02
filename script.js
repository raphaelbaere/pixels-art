function createPixelBoard(largura) {
  const pixelBoard = document.querySelector('#pixel-board');
  const larguraEmNumero = parseInt(largura, 10);
  for (let index = 1; index <= larguraEmNumero * larguraEmNumero; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = index;
    pixelBoard.appendChild(pixel);
  }
}

function definePixelBoardWidth(largura) {
  const larguraEmNumero = parseInt(largura, 10);
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.width = `${larguraEmNumero * 40}px`;
}

function selecionaPixel() {
  return document.querySelectorAll('.pixel');
}

function pintaQuadradinho() {
  const everyPixel = {};
  for (const index of selecionaPixel()) {
    index.addEventListener('click', (event) => {
      const cadaPixel = event.target;
      const selected = document.querySelector('.selected');
      cadaPixel.style.backgroundColor = selected.style.backgroundColor;
      const cadaPixelId = event.target.id;
      everyPixel[cadaPixelId] = cadaPixel.style.backgroundColor;
      localStorage.setItem('pixelBoard', JSON.stringify(everyPixel));
    });
  }
}

window.onload = () => {
  if (localStorage.getItem('colorPalette')) {
    const colors = document.querySelectorAll('.color');
    const hexColors = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index = 1; index < colors.length; index += 1) {
      switch (index) {
      case 1:
        colors[index].style.backgroundColor = hexColors[index];
        break;
      case 2:
        colors[index].style.backgroundColor = hexColors[index];
        break;
      case 3:
        colors[index].style.backgroundColor = hexColors[index];
        break;
      default:
      }
    }
  }
  if (localStorage.getItem('boardSize')) {
    const boardSize = localStorage.getItem('boardSize');
    definePixelBoardWidth(boardSize);
    createPixelBoard(boardSize);
    selecionaPixel();
    pintaQuadradinho();
  } else {
    definePixelBoardWidth('5');
    createPixelBoard('5');
    selecionaPixel();
    pintaQuadradinho();
  }
  if (localStorage.getItem('pixelBoard')) {
    const everyPixel = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixel = document.querySelectorAll('.pixel');
    for (const index of pixel) {
      console.log(everyPixel.hasOwnProperty(index.id));
      if (everyPixel.hasOwnProperty(index.id)) {
        index.style.backgroundColor = everyPixel[index.id];
      }
    }
  }
};

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    const gerador = letters[Math.floor(Math.random() * 16)];
    color += gerador;
  }
  return color;
}

const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', () => {
  const colorPalette = {};
  const colors = document.querySelectorAll('.color');
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
    colorPalette[index] = colors[index].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
  }
});

function deletePixelBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (const index of pixelBoard) {
    index.remove();
  }
}

const inputss = document.querySelector('#board-size');
const bottaoo = document.querySelector('#generate-board');
bottaoo.addEventListener('click', () => {
  if (inputss.value.length === 0) {
    alert('Board inválido!');
  }
  deletePixelBoard();
  if (inputss.value < 5) {
    inputss.value = 5;
  } else if (inputss.value > 50) {
    inputss.value = 50;
  }
  localStorage.setItem('boardSize', inputss.value.toString());
  definePixelBoardWidth(inputss.value);
  createPixelBoard(inputss.value);
  selecionaPixel();
  pintaQuadradinho();
});

const colors = document.querySelectorAll('.color');

function removeSelected() {
  for (const index of colors) {
    index.classList.remove('selected');
  }
}

for (const index of colors) {
  index.addEventListener('click', (event) => {
    const cadaCor = event.target;
    removeSelected();
    if (!cadaCor.classList.contains('selected')) {
      cadaCor.classList.add('selected');
    }
  });
}

const everyPixel = {};
for (const index of selecionaPixel()) {
  index.addEventListener('click', (event) => {
    const cadaPixel = event.target;
    const selected = document.querySelector('.selected');
    cadaPixel.style.backgroundColor = selected.style.backgroundColor;
    const cadaPixelId = event.target.id;
    everyPixel[cadaPixelId] = cadaPixel.style.backgroundColor;
    localStorage.setItem('pixelBoard', JSON.stringify(everyPixel));
  });
}

const buttonClearBoard = document.querySelector('#clear-board');
buttonClearBoard.addEventListener('click', () => {
  const selectPixel = document.querySelectorAll('.pixel');
  localStorage.removeItem('pixelBoard');
  for (const index of selectPixel) {
    index.style.backgroundColor = 'rgb(255,255,255)';
  }
});
