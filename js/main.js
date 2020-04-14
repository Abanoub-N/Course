var proName = document.getElementById("proNameInp");
var proPrice = document.getElementById("proPriceInp");
var proCat = document.getElementById("proCategoryInp");
var proDesc = document.getElementById("proDescInp");
var allProducts;

if (localStorage.getItem("allProductStorage") != null) {
  allProducts = JSON.parse(localStorage.getItem("allProductStorage"));
  dispplayData();
} else {
  allProducts = [];
}

function addProduct() {
  var oneProduct = {
    name: proName.value,
    price: proPrice.value,
    category: proCat.value,
    description: proDesc.value,
  };

  allProducts.push(oneProduct);

  localStorage.setItem("allProductStorage", JSON.stringify(allProducts));

  dispplayData();

  clearData();
}

function dispplayData() {
  //Array bt3i elli fih kol el data
  temp = "";
  for (var i = 0; i < allProducts.length; i++) {
    temp +=
      `
        <div class="col-md-4 mb-3 border p-2">
          <div class="item">
            <img class="img-fluid" src="images/1.jpg" alt="" />
            <h2 class="text-center text-primary">` +
      allProducts[i].name +
      `<span class="btn btn-primary mx-2">` +
      allProducts[i].category +
      `</span>
            </h2>
            <p>` +
      allProducts[i].description +
      `</p>
            <p class="btn btn-warning">` +
      allProducts[i].price +
      `</p>
      <button onclick="deleteProduct(` +
      i +
      `)" class="btn btn-danger float-right">Delete</button>
          </div> 
        </div>
    `;
  }

  document.getElementById("myRow").innerHTML = temp;
}

function clearData() {
  document.getElementById("proNameInp").value = "";
  document.getElementById("proPriceInp").value = "";
  document.getElementById("proCategoryInp").value = "";
  document.getElementById("proDescInp").value = "";
}

function searchProduct(term) {
  temp = "";
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.includes(term)) {
      temp +=
        `
      <div class="col-md-4 mb-3 border p-2">
        <div class="item">
          <img class="img-fluid" src="images/1.jpg" alt="" />
          <h2 class="text-center text-primary">` +
        allProducts[i].name +
        `<span class="btn btn-primary mx-2">` +
        allProducts[i].category +
        `</span>
          </h2>
          <p>` +
        allProducts[i].description +
        `</p>
          <p class="btn btn-warning">` +
        allProducts[i].price +
        `</p>
        <button onclick="deleteProduct(` +
        i +
        `)" class="btn btn-danger float-right">Delete</button>
        </div>
      </div>
  `;
    }
  }
  document.getElementById("myRow").innerHTML = temp;
}

function deleteProduct(proIndex) {
  allProducts.splice(proIndex, 1);
  localStorage.setItem("allProductStorage", JSON.stringify(allProducts));
  dispplayData();
}
