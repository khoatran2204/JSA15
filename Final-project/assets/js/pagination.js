let currentPage = 1;
const pageSize = 15;

let shoppingCart = [];

async function fetchData(page) {
  const response = await fetch(
    `https://ecomws.didongviet.vn/fe/v1/products?page=${page}&limit=${pageSize}&category_ids=3&filterParams=sort_by_outstanding&sort_by_outstanding=true`
  );
  const data = await response.json();
  return data;
}

function displayData(data) {
  const products = document.getElementById("products");
  products.innerHTML = "";
  data.data.data.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.src = "https://cdn-v2.didongviet.vn/" + i.thumbnail;
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let productName = document.createElement("h5");
    productName.classList.add("product-name");
    productName.innerHTML = i.product;
    container.appendChild(productName);

    let price = document.createElement("h6");
    price.innerHTML =
      i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    container.appendChild(price);
    price.style.color = "red";
    price.style.fontSize = "20px";

    let nomalprice = document.createElement("h6");
    nomalprice.innerHTML =
      i.list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    container.appendChild(nomalprice);
    nomalprice.style.textDecoration = "line-through";

    let addButton = document.createElement("button");
    addButton.innerHTML = "THÊM VÀO GIỎ HÀNG";
    addButton.classList.add("addButton");
    addButton.addEventListener("click", () => addToCart(i));
    container.appendChild(addButton);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
  });
}


function setupPagination() {
  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      fetchDataAndDisplay();
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < 13) {
      currentPage += 1;
      fetchDataAndDisplay();
    }
  });
}

function updatePagination(currentPage) {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  const firstPage = document.getElementById("first");
  const secondPage = document.getElementById("second");
  const thirdPage = document.getElementById("third");

  if (currentPage == 1) {
    prevButton.classList.add("disabled");
    firstPage.classList.add("active");
    firstPage.innerText = currentPage;
    secondPage.classList.remove("active");
    secondPage.innerText = currentPage + 1;
    thirdPage.innerText = currentPage + 2;
  } else if (currentPage == 13) {
    nextButton.classList.add("disabled");
    firstPage.innerText = currentPage - 2;
    secondPage.classList.remove("active");
    secondPage.innerText = currentPage - 1;
    thirdPage.innerText = currentPage;
    thirdPage.classList.add("active");
  } else {
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
    firstPage.classList.remove("active");
    firstPage.innerText = currentPage - 1;
    secondPage.classList.add("active");
    secondPage.innerText = currentPage;
    thirdPage.innerText = currentPage + 1;
    thirdPage.classList.remove("active");
  }
}

function fetchDataAndDisplay() {
  fetchData(currentPage).then((data) => {
    displayData(data);
    updatePagination(currentPage);
  });
}

document.getElementById("first").addEventListener("click", () => {
  currentPage = parseInt(document.getElementById("first").innerText);
  fetchDataAndDisplay();
});

document.getElementById("second").addEventListener("click", () => {
  currentPage = parseInt(document.getElementById("second").innerText);
  fetchDataAndDisplay();
});

document.getElementById("third").addEventListener("click", () => {
  currentPage = parseInt(document.getElementById("third").innerText);
  fetchDataAndDisplay();
});

fetchDataAndDisplay();
setupPagination();


