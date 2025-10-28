// Exercise 16: Click Tracker
const boxContainer = document.getElementById('box-container');
const totalDisplay = document.getElementById('total');
let totalClicks = 0;

// TODO: Track clicks on boxes
// HINT: Use event delegation on boxContainer
// HINT: Check if clicked element has class 'box'
// HINT: Increment totalClicks and update display
// HINT: Update the count span inside the clicked box

// Your code here:
boxContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('box')) {
        totalClicks++;
        totalDisplay.textContent = totalClicks; 
        const countSpan = event.target.querySelector('.count');
        let boxCount = parseInt(countSpan.textContent);
        boxCount++;
        countSpan.textContent = boxCount;
    }
});
