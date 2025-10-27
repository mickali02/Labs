const btn2 = document.getElementById('btn2');

if (btn2) {
  btn2.addEventListener('click', (event) => {
    console.log(event.target.textContent);
  });
} else {
  console.log("Button with id 'btn2' not found.");
}
