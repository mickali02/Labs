// Exercise 10: Image Gallery
// Goal: Click thumbnails to change the main image using event delegation

const thumbnailContainer = document.getElementById('thumbnail-container');
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');

// TODO: Add ONE event listener to thumbnail-container
// HINT: Check if clicked element has class 'thumbnail'
// HINT: Get data-image and data-caption attributes from clicked thumbnail
// HINT: Update featuredImage.src with the data-image value
// HINT: Update imageCaption.textContent with the data-caption value
// HINT: Remove 'active' class from all thumbnails
// HINT: Add 'active' class to clicked thumbnail

// Your code here:
thumbnailContainer.addEventListener('click', function(event) {
    const clickedElement = event.target;    
    if (clickedElement.classList.contains('thumbnail')) {
        const newImageSrc = clickedElement.getAttribute('data-image');
        const newCaption = clickedElement.getAttribute('data-caption');
        featuredImage.src = newImageSrc;
        imageCaption.textContent = newCaption;
        const thumbnails = thumbnailContainer.getElementsByClassName('thumbnail');
        for (let thumb of thumbnails) {
            thumb.classList.remove('active');
        }   
        clickedElement.classList.add('active');
    }
});
