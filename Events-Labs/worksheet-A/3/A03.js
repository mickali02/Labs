const btn3 = document.getElementById('btn3');

if (btn3) {
  btn3.addEventListener('dblclick', () => {
    btn3.textContent = 'Double Clicked!';
  });
} else {
  console.log("Button with id 'btn3' not found.");
}
