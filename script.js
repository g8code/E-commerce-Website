const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}

// // Get all the quantity input fields and remove buttons
// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// const removeButtons = document.getElementsByClassName('btn-danger');

// // Add event listeners to the quantity input fields
// for (let i = 0; i < quantityInputs.length; i++) {
//   quantityInputs[i].addEventListener('change', () => {
//     updateCartItem(i);
//   });
// }

// // Add event listeners to the remove buttons
// for (let i = 0; i < removeButtons.length; i++) {
//   removeButtons[i].addEventListener('click', () => {
//     removeCartItem(i);
//   });
// }

// // Update the cart item's subtotal and the total
// function updateCartItem(index) {
//   const cartRow = document.getElementsByClassName('cart-row')[index];
//   const price = parseFloat(cartRow.getElementsByClassName('cart-price')[0].innerText.replace('$', ''));
//   const quantity = quantityInputs[index].value;
//   const subtotal = price * quantity;
//   cartRow.getElementsByClassName('cart-subtotal')[0].innerText = '$' + subtotal.toFixed(2);
//   updateCartTotal();
// }

// // Remove the cart item and update the total
// function removeCartItem(index) {
//   const cartRow = document.getElementsByClassName('cart-row')[index];
//   cartRow.remove();
//   updateCartTotal();
// }

// // Update the cart's total
// function updateCartTotal() {
//   const cartItems = document.getElementsByClassName('cart-items')[0];
//   const cartRows = cartItems.getElementsByClassName('cart-row');
//   let total = 0;
//   for (let i = 0; i < cartRows.length; i++) {
//     const cartRow = cartRows[i];
//     const subtotal = parseFloat(cartRow.getElementsByClassName('cart-subtotal')[0].innerText.replace('$', ''));
//     total += subtotal;
//   }
//   document.getElementsByClassName('cart-total-price')[1].innerText = '$' + total.toFixed(2);
// }
