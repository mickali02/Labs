const colorInput = document.getElementById('color');
const colorBox = document.getElementById('colorBox');

if (colorInput && colorBox) {
  colorInput.addEventListener('input', (event) => {
    colorBox.style.backgroundColor = event.target.value;
  });
} else {
  console.log("Elements with id 'color' or 'colorBox' not found.");
}
