function infor(item){
    window.location.href = 'infor.html';
    fetchInfor(item).then((infor) => {
        displayIata(infor);
    });
}

async function fetchInfor(item) {
    const response = await fetch(
      `https://ecomws.didongviet.vn/fe/v1/products/${item.slug}`
    );
    const infor = await response.json();
    return infor;
}

function fetchDataAndDisplay() {
    fetchData(currentPage).then((data) => {
      displayData(data);
    });
  }

function displayInfor(infor){
    console.log("123")
}