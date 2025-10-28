// Exercise 9: Shopping Cart
// Goal: Add items to cart, update quantities, calculate total

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');

let cart = []; // Array to store cart items: {name, price, quantity}

// TODO Part 1: Handle "Add to Cart" clicks using event delegation on productList
// HINT: Get product data using data-name and data-price attributes
// HINT: Check if item already exists in cart array
// HINT: If exists, increase quantity; if not, add new item with quantity 1
// HINT: Call updateCartDisplay() after modifying cart

// Your code here for Part 1:
productList.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productElement = event.target.closest('.product');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        updateCartDisplay();
    }
});


// TODO Part 2: Handle cart actions (increase, decrease, remove) using event delegation on cartItems
// HINT: Use data-name attribute to identify which item was clicked
// HINT: For increase (+): find item in cart and increment quantity
// HINT: For decrease (-): find item and decrement quantity (remove if quantity becomes 0)
// HINT: For remove: filter out the item from cart array
// HINT: Call updateCartDisplay() after each action

// Your code here for Part 2:
cartItems.addEventListener('click', function(event) {
    const itemName = event.target.getAttribute('data-name');
    if (event.target.classList.contains('increase')) {
        const item = cart.find(i => i.name === itemName);
        if (item) {
            item.quantity += 1;
            updateCartDisplay();
        }
    } else if (event.target.classList.contains('decrease')) {
        const item = cart.find(i => i.name === itemName);
        if (item) {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.name !== itemName);
            }
            updateCartDisplay();
        }
    } else if (event.target.classList.contains('remove')) {
        cart = cart.filter(i => i.name !== itemName);
        updateCartDisplay();
    }
});


// TODO Part 3: Create updateCartDisplay() function
// HINT: Clear cartItems innerHTML
// HINT: Loop through cart array and create HTML for each item
// HINT: Each cart item should have: name, quantity controls (+/-), remove button
// HINT: Calculate total by summing (price * quantity) for all items
// HINT: Update totalPriceDisplay

function updateCartDisplay() {
    // Your code here:
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal; 
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}
            <button class="increase" data-name="${item.name}">+</button>
            <button class="decrease" data-name="${item.name}">-</button>
            <button class="remove" data-name="${item.name}">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    totalPriceDisplay.textContent = total.toFixed(2);
}
