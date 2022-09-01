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
  if (localStorage.getItem('pixelBoard')) {
    let everyPixel = JSON.parse(localStorage.getItem('pixelBoard'));
    let pixel = document.querySelectorAll('.pixel')
    for (let index of pixel) {
      console.log(everyPixel.hasOwnProperty(index.id))
      if (everyPixel.hasOwnProperty(index.id)) {
        index.style.backgroundColor = everyPixel[index.id]
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
definePixelBoardWidth('5');
createPixelBoard('5');

const colors = document.querySelectorAll(".color")

for (let index of colors) {
  index.addEventListener('click', (event) => {
  let cadaCor = event.target
   removeSelected()
   if (!cadaCor.classList.contains("selected")) {
    cadaCor.classList.add("selected")
   }
  })
}

function removeSelected() {
  const colors = document.querySelectorAll(".color")
  for (let index of colors) {
    index.classList.remove("selected")
  }
}
const selectPixel = document.querySelectorAll(".pixel")
  const everyPixel = {};
  for (let index of selectPixel) {
  index.addEventListener("click", (event) => {
  let cadaPixel = event.target
  const selected = document.querySelector(".selected")
  cadaPixel.style.backgroundColor = selected.style.backgroundColor
  let cadaPixelId = event.target.id;
  everyPixel[cadaPixelId] = cadaPixel.style.backgroundColor;
  localStorage.setItem('pixelBoard' , JSON.stringify(everyPixel))
})
}

const buttonClearBoard = document.querySelector('#clear-board')

buttonClearBoard.addEventListener('click', () => {
  const selectPixel = document.querySelectorAll('.pixel')
  for (let index of selectPixel) {
    index.style.backgroundColor = "rgb(255,255,255)"
  }
})