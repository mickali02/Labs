const makeBtn = document.getElementById('makeBtn');
const btnArea = document.getElementById('btnArea');
let buttonCounter = 1;

if (makeBtn && btnArea) {
  makeBtn.addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.textContent = `New ${buttonCounter}`;
    newButton.addEventListener('click', (event) => {
      console.log(event.target.textContent);
    });
    btnArea.appendChild(newButton);
    buttonCounter++;
  });
} else {
  console.log("Elements with id 'makeBtn' or 'btnArea' not found.");
}
