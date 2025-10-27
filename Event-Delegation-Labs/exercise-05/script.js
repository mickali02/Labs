// Exercise 5: Add Items Dynamically
// Goal: Add new items AND delete them using event delegation

const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');

// TODO Part 1: Add event listener to the "Add Item" button
// HINT: Get the input value, create a new <li> element with class "item"
// HINT: The new item should have the same structure as existing items:
//       <li class="item">
//         <span>Item Name</span>
//         <button class="delete-btn">×</button>
//       </li>
// HINT: Append the new item to itemList
// HINT: Clear the input after adding

// Your code here for Part 1:
addBtn.addEventListener('click', function() {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        const span = document.createElement('span');
        span.textContent = itemName;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = '×';

        newItem.appendChild(span);
        newItem.appendChild(deleteBtn);
        itemList.appendChild(newItem);

        itemInput.value = '';
    }
});


// TODO Part 2: Add ONE event listener to itemList for deleting items
// HINT: This should work for both existing items AND newly added items
// HINT: Check if clicked element has class 'delete-btn'


// HINT: Remove the parent item element
// Your code here for Part 2:
itemList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const itemToDelete = e.target.closest('.item');
        if (itemToDelete) {
            itemToDelete.remove();
        }
    }
});