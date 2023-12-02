// search

document.getElementById("search").addEventListener("click", ()=> {
    let searchInput = document.getElementById("search-input").value.toLowerCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")

    productsName.forEach((item,index) =>{
        if (item.innerText.toLowerCase().includes(searchInput)){
            cards[index].classList.remove("hide")
        }
        else{
            cards[index].classList.add("hide")
        }
    })
})


