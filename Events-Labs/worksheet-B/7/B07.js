const multiButtons = document.querySelectorAll('.multi');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

if (multiButtons.length > 0) {
  multiButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
} else {
  console.log("No buttons with class 'multi' found.");
}
