// function addToCart(item) {
//     // Check if the item is already in the cart
//     const existingItem = shoppingCart.find((cartItem) => cartItem.id === item.id);
  
//     if (existingItem) {
//       // If the item is already in the cart, increment its quantity
//       existingItem.quantity += 1;
//     } else {
//       // If the item is not in the cart, add it with a quantity of 1
//       shoppingCart.push({
//         id: item.product_id,
//         name: item.product,
//         price: item.price,
//         quantity: 1,
//       });
//       localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
//     }
  
//     // Update the shopping cart button with the new cart information
//     updateShoppingCartButton();
//   }
  
//   function updateShoppingCartButton() {
//     const cartButton = document.getElementById("shop");
//     // Calculate the total quantity of items in the cart
//     const totalQuantity = shoppingCart.reduce(
//       (total, item) => total + item.quantity,0
//     );
//     // Update the button text with the total quantity
//     cartButton.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> ${totalQuantity}`;
//   }
  
//   function showCartSummary() {
//     // Create a modal or a popup to display the cart contents
//     // You can customize this part based on your design preferences
  
//     // For simplicity, let's use a simple alert for now
//     let cartSummary = "Cart Summary:\n";
//     shoppingCart.forEach((item) => {
//       cartSummary += `${item.name} x ${item.quantity}\n`;
//     });
  
//     alert(cartSummary);
//   }

//   document.addEventListener("DOMContentLoaded", () => {
//     updateShoppingCartButton();
//   });
//   document.getElementById("shop").addEventListener("click", showCartSummary);

function addToCart(item) {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    console.log(shoppingCart)
    for (let i = 0; i < shoppingCart.length; i++) {
        if (item.product == shoppingCart[i]) {
            return;
        }
    }

    shoppingCart.push({
        id: item.product_id,
        name: item.product,
        price: item.price,
      });
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

    updateShoppingCartButton();
  }