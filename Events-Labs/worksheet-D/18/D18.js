const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const valueSpan = document.getElementById('value');

let counter = 0;

const updateValue = () => {
  if (valueSpan) {
    valueSpan.textContent = counter;
  }
};

if (plusBtn && minusBtn && valueSpan) {
  plusBtn.addEventListener('click', () => {
    counter++;
    updateValue();
  });

  minusBtn.addEventListener('click', () => {
    counter--;
    updateValue();
  });
} else {
  console.log("Elements with id 'plus', 'minus', or 'value' not found.");
}
