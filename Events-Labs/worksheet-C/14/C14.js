const typeField = document.getElementById('typeField');
const countSpan = document.getElementById('count');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let counter = 0;

const keydownHandler = () => {
  counter++;
  if (countSpan) {
    countSpan.textContent = counter;
  }
};

if (typeField && countSpan && startBtn && stopBtn) {
  startBtn.addEventListener('click', () => {
    typeField.addEventListener('keydown', keydownHandler);
    console.log('Keydown listener added.');
  });

  stopBtn.addEventListener('click', () => {
    typeField.removeEventListener('keydown', keydownHandler);
    console.log('Keydown listener removed.');
  });
} else {
  console.log("One or more elements ('typeField', 'count', 'start', 'stop') not found.");
}
