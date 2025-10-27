const mouseBox = document.getElementById('mouseBox');
const coordsSpan = document.getElementById('coords');

if (mouseBox && coordsSpan) {
  mouseBox.addEventListener('mousemove', (event) => {
    coordsSpan.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
  });
} else {
  console.log("Elements with id 'mouseBox' or 'coords' not found.");
}
