// Exercise 8: Tab Navigation
// Goal: Switch between tabs using event delegation

const tabButtons = document.getElementById('tab-buttons');

// TODO: Add ONE event listener to tab-buttons container
// HINT: Check if clicked element has class 'tab-btn'
// HINT: Get the data-tab attribute from the clicked button
// HINT: Remove 'active' class from all tab buttons and tab panes
// HINT: Add 'active' class to the clicked button
// HINT: Add 'active' class to the matching tab pane with the same data-tab value

// Your code here:
tabButtons.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('tab-btn')) {
        const tabId = clickedElement.getAttribute('data-tab');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const tabButtons = document.querySelectorAll('.tab-btn');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        clickedElement.classList.add('active');

        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.querySelector(`.tab-pane[data-tab="${tabId}"]`).classList.add('active');
    }
});
