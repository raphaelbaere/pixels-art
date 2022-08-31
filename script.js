window.addEventListener('load', () => {
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
});

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
