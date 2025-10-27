const keyInput = document.getElementById('keyInput');
const lastKeySpan = document.getElementById('lastKey');

if (keyInput && lastKeySpan) {
  keyInput.addEventListener('keydown', (event) => {
    lastKeySpan.textContent = event.key;
  });
} else {
  console.log("Elements with id 'keyInput' or 'lastKey' not found.");
}
