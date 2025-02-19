// Retrieve the cart from sessionStorage or initialize an empty array
let shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

// Function to update the cart UI
function updateCartUI() {
    const outputElement = document.getElementById('section-3-output');
    if (shoppingCart.length === 0) {
        outputElement.innerText = 'Cart is empty.';
    } else {
        outputElement.innerText = 'Cart: ' + shoppingCart.join(', ');
    }
}

// Function to save the cart to sessionStorage
function saveCartToSession() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-product-id');
        
        if (!shoppingCart.includes(productId)) {
            shoppingCart.push(productId);
            saveCartToSession(); // Save cart after updating
        }

        updateCartUI();
    });
});

// Initialize cart UI on page load
updateCartUI();
