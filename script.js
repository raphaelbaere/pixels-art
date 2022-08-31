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
  const colors = document.querySelectorAll('.color');
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
  }
});
