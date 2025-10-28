// Exercise 13: Accordion Menu
// Goal: Toggle sections open/close, only one open at a time

const accordion = document.getElementById('accordion');

// TODO: Add event listener to accordion using event delegation
// HINT: Listen for clicks on accordion
// HINT: Check if click was on accordion-header (use closest)
// HINT: Remove 'active' class from ALL accordion-items
// HINT: Add 'active' class to clicked item's parent accordion-item
// HINT: If clicking the already-active item, just remove active from all

// Your code here:
accordion.addEventListener('click', function(e) {
    // Find if the click was on an accordion-header or inside it
    const header = e.target.closest('.accordion-header');
    if (!header) return; // Click was outside headers, do nothing

    const item = header.parentElement; // The parent accordion-item
    const isActive = item.classList.contains('active');

    // Remove 'active' from all items
    const allItems = accordion.querySelectorAll('.accordion-item');
    allItems.forEach(i => i.classList.remove('active'));

    // If it wasn’t already active, activate it
    if (!isActive) {
        item.classList.add('active');
    }
});