function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const logoutButton = document.getElementById('logout');
    const signupButton = document.getElementById("signup")
    const loginButton = document.getElementById("login")
    if (currentUser) {
        logoutButton.style.display = 'block';
        loginButton.style.display = "none"
        signupButton.style.display = "none"
    } else {
        logoutButton.style.display = 'none';
        loginButton.style.display = "block"
        signupButton.style.display = "block"
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginStatus();
    window.location.href = 'index.html';
});

document.getElementById("login").addEventListener("click",() =>{
    window.location.href = "signin.html"
})

document.getElementById("signup").addEventListener("click",() =>{
    window.location.href = "signup.html"
})

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];

if (currentUser.username != null){
    document.getElementById("user").innerHTML = currentUser.username
}
else{
    document.getElementById("user").innerHTML = "No user"
}


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