const addItemBtn = document.getElementById('addItem');
const itemsList = document.getElementById('items');
let itemNumber = 1;

if (addItemBtn && itemsList) {
  addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemNumber}`;
    newItem.addEventListener('click', (event) => {
      console.log(event.target.textContent);
    });
    itemsList.appendChild(newItem);
    itemNumber++;
  });
} else {
  console.log("Elements with id 'addItem' or 'items' not found.");
}
