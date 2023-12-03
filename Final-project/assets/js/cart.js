
function addToCart(item) {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    for (let i = 0; i < shoppingCart.length; i++) {
        if (item.product == shoppingCart[i].name) {
            window.location.href = 'cart.html';
            number += 1
            return;
        }
    }

    window.location.href = 'cart.html';
    shoppingCart.push({
        products: item.products,
        price: item.price,
        image: item.thumbnail,
      });
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

document.getElementById("shop").addEventListener("click", () => {
    window.location.href = 'cart.html';
});

let totalPrice = 0
let totalItem = 0

function displayCartData() {
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  for (let i = 0; i < shoppingCart.length; i++){
    let cartProduct = document.createElement('div');
    cartProduct.classList.add("product")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.src = "https://cdn-v2.didongviet.vn/" + shoppingCart[i].thumbnail;
    imgContainer.appendChild(image)

    let name = document.createElement("div")
    name.classList.add("name")
    name.innerHTML = shoppingCart[i].products
    document.getElementById("product").appendChild(name)

    let amount = document.createElement('div')
    amount.classList.add("amount")

    let minusButton = document.createElement('p')
    minusButton.classList.add('btn')
    minusButton.innerHTML = "-"
    minusButton.addEventListener("click",()=> {
      number -= 1
    })

    let amountNumber = document.createElement('p')
    amountNumber.classList.add("amountNumber")
    amountNumber.innerHTML = number
    let number = 1
    totalItem += number

    let plusButton = document.createElement('p');
    plusButton.className = "btn"
    plusButton.textContent = "+"
    plus.addEventListener("click",() =>{
      number += 1
    })


    amount.appendChild(minusButton);
    amount.appendChild(amountNumber);
    amount.appendChild(plusButton);

    let productPrice = document.createElement('p');
    productPrice.classList.add("Price")
    let price = shoppingCart[i].price * number
    productPrice.innerHTML = price
    totalPrice += price

    let cancelButton = document.createElement('p');
    cancelButton.classList.add("cancel")
    cancelButton.textContent = 'x';


    cartProduct.appendChild(imgContainer);
    cartProduct.appendChild(productName);
    cartProduct.appendChild(amount);
    cartProduct.appendChild(productPrice);
    cartProduct.appendChild(cancelButton);
    document.getElementsByClassName("left-box").appendChild(cartProduct)
  }
}
displayCartData()

let discount = 0

document.getElementById("total-product").innerHTML = totalItem
document.getElementById("total-price").innerHTML = totalPrice

document.getElementById("discount").addEventListener("change", (event)=>{
  if (event.target.value == a){
    discount = 100000
  }
})

document.getElementById("total-price-discount").innerHTML = totalPrice - discount

document.getElementById("Backbutton").addEventListener("click", () =>{
  window.location.href = 'index.html';
})