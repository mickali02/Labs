const onceBtn = document.getElementById('onceBtn');

if (onceBtn) {
  // Option 1: Using { once: true }
  onceBtn.addEventListener('click', () => {
    console.log('This button was clicked once (using { once: true })');
  }, { once: true });

  // Option 2: Removing the listener inside its own handler
  // const clickHandler = () => {
  //   console.log('This button was clicked once (removing listener inside handler)');
  //   onceBtn.removeEventListener('click', clickHandler);
  // };
  // onceBtn.addEventListener('click', clickHandler);
} else {
  console.log("Button with id 'onceBtn' not found.");
}
