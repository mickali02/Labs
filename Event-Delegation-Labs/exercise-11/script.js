// Exercise 11: Todo with Categories
// Goal: Add todos to categories, mark complete, delete - all with event delegation

const todoContainer = document.getElementById('todo-container');
const todoInput = document.getElementById('todo-input');
const categorySelect = document.getElementById('category-select');
const addBtn = document.getElementById('add-btn');

// TODO Part 1: Add new todos
// HINT: Get input value and selected category
// HINT: Find the category element with matching data-category attribute
// HINT: Create new todo item with complete and delete buttons
// HINT: Append to that category's .todo-list

addBtn.addEventListener('click', () => {
    // Your code here:
    const todoText = todoInput.value.trim();
    const selectedCategory = categorySelect.value;

    if (todoText && selectedCategory) {
        const categoryElement = todoContainer.querySelector(`[data-category="${selectedCategory}"]`);
        if (categoryElement) {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;
            categoryElement.querySelector('.todo-list').appendChild(todoItem);
            todoInput.value = '';
        }
    }
});

// TODO Part 2: Handle todo actions using event delegation on todoContainer
// HINT: Listen for clicks on todoContainer
// HINT: If complete-btn clicked: toggle 'completed' class on parent .todo-item
// HINT: If delete-btn clicked: remove the parent .todo-item

// Your code here:
todoContainer.addEventListener('click', (event) => {    
    const clickedElement = event.target;    
    if (clickedElement.classList.contains('complete-btn')) {
        const todoItem = clickedElement.parentElement;
        todoItem.classList.toggle('completed');

        // visually show it’s done (JS only)
        if (todoItem.classList.contains('completed')) {
            todoItem.style.textDecoration = 'line-through';
            todoItem.style.opacity = '0.6';
        } else {
            todoItem.style.textDecoration = 'none';
            todoItem.style.opacity = '1';
        }
    } else if (clickedElement.classList.contains('delete-btn')) {
        const todoItem = clickedElement.parentElement;
        todoItem.remove();
    }

});