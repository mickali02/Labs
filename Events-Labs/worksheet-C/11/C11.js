const toggleBtn = document.getElementById('toggleBtn');
const fireBtn = document.getElementById('fireBtn');

const fireHandler = () => {
  console.log('Fired!');
};

let isListenerAttached = false;

if (toggleBtn && fireBtn) {
  toggleBtn.addEventListener('click', () => {
    if (isListenerAttached) {
      fireBtn.removeEventListener('click', fireHandler);
      isListenerAttached = false;
      console.log('Listener removed.');
    } else {
      fireBtn.addEventListener('click', fireHandler);
      isListenerAttached = true;
      console.log('Listener added.');
    }
  });
} else {
  console.log("Elements with id 'toggleBtn' or 'fireBtn' not found.");
}
