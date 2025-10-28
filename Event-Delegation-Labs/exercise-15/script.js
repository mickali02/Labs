// Exercise 15: Modal System
const body = document.body;

// TODO Part 1: Open modals using event delegation
// HINT: Listen on body for clicks
// HINT: Check if clicked has class 'open-modal-btn'
// HINT: Get data-modal attribute and find that modal by ID
// HINT: Add 'active' class to modal

// TODO Part 2: Close modals
// HINT: Check if clicked has class 'close-modal-btn'
// HINT: Find closest .modal and remove 'active' class

// TODO Part 3: Close on backdrop
// HINT: Check if e.target has class 'modal' (clicked backdrop, not content)
// HINT: Remove 'active' class

// Your code here:
body.addEventListener('click', function(e) {
    // Open modals
    if (e.target.classList.contains('open-modal-btn')) {    
        const modalId = e.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
    }   
    // Close modals with close button
    else if (e.target.classList.contains('close-modal-btn')) {
        const modal = e.target.closest('.modal');
        modal.classList.remove('active');
    }
    // Close modals when clicking on the backdrop
    else if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});
