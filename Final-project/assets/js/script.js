const products = document.getElementById("products")




//https://ecomws.didongviet.vn/fe/v1/products/search?q=${document.getElementById("search-input").value}&page=2&limit=10

document.getElementById("search").addEventListener("click", () => {
    fetch('https://ecomws.didongviet.vn/fe/v1/products?page=1&limit=10000&category_ids=3&filterParams=sort_by_outstanding&sort_by_outstanding=true')
        .then(response => response.json())
        .then((brand) => {
            for (let i of brand.data.total) {
                let card = document.createElement("div")
                card.classList.add("card")

                let imgContainer = document.createElement("div")
                imgContainer.classList.add("image-container")

                let image = document.createElement("img")
                image.src = "https://cdn-v2.didongviet.vn/" + i.thumbnail
                imgContainer.appendChild(image)
                card.appendChild(imgContainer)

                let container = document.createElement("div")
                container.classList.add("container")

                let productName = document.createElement("h5")
                productName.classList.add("product-name")
                productName.innerHTML = i.product
                container.appendChild(productName)

                let price = document.createElement("h6")
                price.innerHTML = i.price + "đ"
                container.appendChild(price)
                price.style.color = "red"
                price.style.fontSize = "20px"

                let nomalprice = document.createElement("h6")
                nomalprice.innerHTML = i.list_price + "đ"
                container.appendChild(nomalprice)
                nomalprice.style.textDecoration = "line-through"

                let addButton = document.createElement("button")
                addButton.innerHTML = "THÊM VÀO GIỎ HÀNG"
                addButton.classList.add("addButton")
                container.appendChild(addButton)

                card.appendChild(container)

                document.getElementById("products").appendChild(card)
            }
        })
})

let user = ""

// let SigninSignup = document.getElementById("signin-signup")
// if ((SigninSignup != null) && (!user)) {
//     SigninSignup.addEventListener('click', () => {
//         const dropdown = document.getElementById('dropdown');
//         if (dropdown.style.display == "none") dropdown.style.display = "block"
//         else dropdown.style.display = "none"
//     });
// } else if ((SigninSignup != null) && (user != null)) {
//     SigninSignup.addEventListener('click', () => {
//         const logout = document.getElementById('logout');
//         if (logout.style.display == "none") logout.style.display = "block"
//         else logout.style.display = "none"
//     });
// }
// let logout = document.getElementById('logout')
// if (logout != null) {
//     logout.addEventListener('click', () => {
//         user = ""
//         window.location.href = "./index.html"
//     })
// }

fetch('https://ecomws.didongviet.vn/fe/v1/flash-sales')
    .then(response => response.json())
    .then((image) => {
        for (let i of image.data.data) {
            let card = document.createElement("div")
            card.classList.add("card")

            let imgContainer = document.createElement("div")
            imgContainer.classList.add("image-container")

            let image = document.createElement("img")
            image.src = "https://cdn-v2.didongviet.vn/" + i.thumbnail
            imgContainer.appendChild(image)
            card.appendChild(imgContainer)

            let container = document.createElement("div")
            container.classList.add("container")

            let productName = document.createElement("h5")
            productName.classList.add("product-name")
            productName.innerHTML = i.product
            container.appendChild(productName)

            let price = document.createElement("h6")
            price.innerHTML = i.price + "đ"
            container.appendChild(price)
            price.style.color = "red"
            price.style.fontSize = "20px"

            let nomalprice = document.createElement("h6")
            nomalprice.innerHTML = i.list_price + "đ"
            container.appendChild(nomalprice)
            nomalprice.style.textDecoration = "line-through"

            let addButton = document.createElement("button")
            addButton.innerHTML = "THÊM VÀO GIỎ HÀNG"
            addButton.classList.add("addButton")
            container.appendChild(addButton)

            card.appendChild(container)

            document.getElementById("products").appendChild(card)
        }
    })



/*login-signup*/

let Username = document.getElementById('Username')
let Password = document.getElementById('Password')
let CPassword = document.getElementById('CPassword')
let Signupbutton = document.getElementById('signup-button')
let Signinbutton = document.getElementById('signin-button')

let Info = []

if (Signupbutton != null) {
    Signupbutton.addEventListener('click', (event) => {
        event.preventDefault()
        addinfo()
    })
}

const addinfo = () => {
    const newUser = Username.value
    const newPass = Password.value
    infoList = JSON.parse(localStorage.getItem('infos')) || []
    for (let i = 0; i < infoList.length; i++) {
        if (newUser == infoList[i].user) {
            alert("tài khoản đã có rồi")
            break
        }
    }
    if (!newUser || !newPass || !CPassword.value) return console.log("Nhập vô đi rồi add") || alert("Nhập vô đi rồi add")
    if (newPass != CPassword.value) return alert("Pass sai")
    else {
        Info.push({
            user: newUser,
            pass: newPass
        })
        localStorage.setItem('infos', JSON.stringify(Info))
        window.location.href = "./signup.html"
    }
}

if (Signinbutton != null) {
    Signinbutton.addEventListener('click', () => {
        const User = Username.value
        const Pass = Password.value
        infoList = JSON.parse(localStorage.getItem('infos')) || []
        if (!User || !Pass) return console.log("Nhập vô đi rồi add") || alert("Nhập vô đi rồi add")
        for (let i = 0; i < infoList.length; i++) {
            if ((Pass == infoList[i].pass) && (User == infoList[i].user)) {
                alert("đăng nhập thành công")
                window.location.href = "./index.html"
            } else {
                alert("hay kiểm tra lại")
            }
        }
    })
}