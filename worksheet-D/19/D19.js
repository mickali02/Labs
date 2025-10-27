const swapBtn = document.getElementById('swap');
const photoImg = document.getElementById('photo');

if (swapBtn && photoImg) {
  swapBtn.addEventListener('click', () => {
    if (photoImg.src.includes('img1.jpg')) {
      photoImg.src = 'img2.jpg';
    } else {
      photoImg.src = 'img1.jpg';
    }
  });
} else {
  console.log("Elements with id 'swap' or 'photo' not found.");
}
