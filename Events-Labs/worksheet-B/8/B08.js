const nameInput = document.getElementById('name');
const lenSpan = document.getElementById('len');

if (nameInput && lenSpan) {
  nameInput.addEventListener('input', (event) => {
    lenSpan.textContent = event.target.value.length;
  });
} else {
  console.log("Elements with id 'name' or 'len' not found.");
}
