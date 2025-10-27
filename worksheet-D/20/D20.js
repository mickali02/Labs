const titleInput = document.getElementById('titleInput');
const titlePreview = document.getElementById('titlePreview');

if (titleInput && titlePreview) {
  titleInput.addEventListener('input', (event) => {
    titlePreview.textContent = event.target.value || 'No Title Provided';
  });
} else {
  console.log("Elements with id 'titleInput' or 'titlePreview' not found.");
}
