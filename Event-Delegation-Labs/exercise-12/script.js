// Exercise 12: Star Rating
// Goal: Create interactive star rating with hover preview

const container = document.querySelector('.container');

// TODO Part 1: Handle star hover (mouseover) using event delegation
// HINT: Listen on container for 'mouseover' events
// HINT: Check if e.target has class 'star'
// HINT: Get the star's data-value
// HINT: Find the parent .stars element
// HINT: Loop through all stars in that group and add 'hover' class to stars <= data-value

// Your code here for hover:
container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('star')) {
        const hoverValue = parseInt(e.target.getAttribute('data-value'));
        const starsGroup = e.target.closest('.stars');
        const stars = starsGroup.querySelectorAll('.star');
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= hoverValue) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }});


// TODO Part 2: Handle mouse leaving stars (mouseout)
// HINT: Listen for 'mouseout' on container
// HINT: Remove 'hover' class from all stars in the group

// Your code here for mouseout:
container.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('star')) {
        const starsGroup = e.target.closest('.stars');
        const stars = starsGroup.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('hover');
        });
    }
});

// TODO Part 3: Handle star click to set rating
// HINT: Listen for 'click' on container
// HINT: Check if clicked element is a star
// HINT: Get data-value of clicked star
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('star')) {
        const clickedValue = parseInt(e.target.getAttribute('data-value'));
        const starsGroup = e.target.closest('.stars');
        const stars = starsGroup.querySelectorAll('.star');

        // Remove 'active' from all stars
        stars.forEach(star => {
            star.classList.remove('active');
        });
// HINT: Remove 'active' from all stars in that group
// HINT: Add 'active' to stars <= clicked value
// HINT: Update the rating-value display

// Your code here for click:
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= clickedValue) {
                star.classList.add('active');
            }
        });

        // Update the rating value display
        const ratingValueDisplay = starsGroup.nextElementSibling.querySelector('.rating-value');
        ratingValueDisplay.textContent = clickedValue;
    }
});