// B1: Truy cap phan tu Cart Modal
let cartModalOverLay = document.querySelector(".cart-modal-overlay");
let cartBtn = document.querySelector(".cart-btn");
let closeBtn = document.querySelector("#close-btn");
// console.log(closeBtn);


// B2: Them su kien mo Cart Modal
cartBtn.addEventListener("click", () => {
  cartModalOverLay.style.transform = "translateX(0)";
});

// B3: Them su kien dong Cart Modal
closeBtn.addEventListener("click", () => {
  cartModalOverLay.style.transform = "translateX(-200%)";
});

cartModalOverLay.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-modal-overlay") == true) {
    cartModalOverLay.style.transform = "translateX(-200%)";
  }
});


// B4: Them san pham vao trong gio hang
let addToCart = document.querySelectorAll(".add-to-cart");
addToCart.forEach((item) => {
  // Item -> Chinh la tung cai nut trong ds button addToCart
  item.addEventListener("click", () => {
    addToCartClicked(item);
    cartModalOverLay.style.transform = "translateX(0)";
  });
})


let addToCartClicked = (buttonAdd) => { //Hinh anh, va gia tien cua tung san pham
  let parentButtonAdd = buttonAdd.parentElement;

  let price = parentButtonAdd.querySelector(".product-price").innerHTML;
  let image = parentButtonAdd.querySelector(".product-image").src;

  // Them pirce & image len popup gio hang
  addItemToCart(price, image);
}

// Hien thi san pham len tren Popup Gio hang
let productWrapRows = document.querySelector(".product-rows");

let addItemToCart = (price, image) => {
  let HTML =
    `
      <img class="cart-image" src=${image} alt="">
      <span class="cart-price">${price}</span>
      <input class="product-quantity" type="number" value="1">
      <button class="remove-btn">Remove</button>
  `;

  // Tao ra the HTML ao <div class="product-row"></div>
  let productRow = document.createElement("div");
  productRow.classList.add("product-row");

  // Them noi dung cho HTML ao 
  productRow.innerHTML = HTML;

  // Truy cap phan tu lay ra tat cac hinh anh co san truoc day
  let cartImage = document.querySelectorAll(".cart-image");

  let issAdd = false;
  cartImage.forEach((img)=>{
    if(img.src == image) {
      alert("San pham da ton tai trong gio hang roi! Ban muon thay doi thi vao trong gio hang.");
      issAdd = true;
    }
  });

  if(issAdd) {
    return null;
  }
  // Hien thi ra giao dien popup
  productWrapRows.append(productRow);


  // Xoa 1 item trong popup cart
  let removeBtn = document.querySelectorAll(".remove-btn");
  // console.log(removeBtn);
  removeBtn.forEach((value)=>{
    // value chinh nut button xoa
    value.addEventListener("click",()=>{
      removeCart(value);
    });
  });
}

// Xoa cac san pham da them
let removeCart = (btnRemove) => {
  let productRemove =  btnRemove.parentElement;
  productRemove.remove();
  // console.log(productRemove);
}