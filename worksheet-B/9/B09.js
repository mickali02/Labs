const hoverBox = document.getElementById('hoverBox');

if (hoverBox) {
  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = 'yellow';
  });

  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = ''; // Reset to default or original
  });
} else {
  console.log("Element with id 'hoverBox' not found.");
}
