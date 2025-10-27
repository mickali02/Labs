const btnA = document.getElementById('btnA');

if (btnA) {
  btnA.addEventListener('click', () => {
    console.log('first');
  });

  btnA.addEventListener('click', () => {
    console.log('second');
  });
} else {
  console.log("Button with id 'btnA' not found.");
}
