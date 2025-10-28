// Exercise 18: Kanban Board
const board = document.querySelector('.board');

// TODO: Handle moving cards using event delegation
// HINT: Listen for clicks on board
// HINT: Check if clicked element has class 'move-btn'
// HINT: Get direction from data-direction
// HINT: Get the card element
// HINT: Get current column and its data-status
// HINT: Determine target column based on direction
// HINT: Find target column element and append card to its .cards div
// HINT: Update buttons on card based on new position

// Your code here:
board.addEventListener('click', function(event) {
    if (event.target.classList.contains('move-btn')) {
        const direction = event.target.getAttribute('data-direction');
        const card = event.target.closest('.card');
        const currentColumn = card.closest('.column');
        const currentStatus = currentColumn.getAttribute('data-status');
        let targetStatus;

        if (direction === 'left') {
            if (currentStatus === 'in-progress') {
                targetStatus = 'todo';
            } else if (currentStatus === 'done') {
                targetStatus = 'in-progress';
            }   
        } else if (direction === 'right') {
            if (currentStatus === 'todo') {
                targetStatus = 'in-progress';
            } else if (currentStatus === 'in-progress') {
                targetStatus = 'done';
            }
        }

        if (targetStatus) {
            const targetColumn = board.querySelector(`.column[data-status="${targetStatus}"] .cards`);
            targetColumn.appendChild(card);
        }
    }
});

