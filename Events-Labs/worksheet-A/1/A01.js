const btn1 = document.getElementById('btn1');

if (btn1) {
  btn1.addEventListener('click', (event) => {
    console.log(event.type);
  });
} else {
  console.log("Button with id 'btn1' not found.");
}
