/*
Exercise 14: Managing a Shopping Cart

Description: 

Implement functionality to add product ids to a shopping cart array when 
the buttons with class 'add-to-cart-button' are clicked. 

Rely on the buttons `data-product-id` html attributes to grab their product IDs

Display the list of product IDs in the #section-3-output div.
*/
// Shopping cart array
const shoppingCart = [];

// Function to update the cart UI
function updateCartUI() {
    const outputElement = document.getElementById('section-3-output');
    if (shoppingCart.length === 0) {
        outputElement.innerText = 'Cart is empty.';
    } else {
        outputElement.innerText = 'Cart: ' + shoppingCart.join(', ');
    }
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-product-id');
        
        if (!shoppingCart.includes(productId)) {
            shoppingCart.push(productId);
        }

        updateCartUI(); // Update the UI after adding to the cart
    });
});

// Initialize cart UI
updateCartUI();
