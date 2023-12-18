// B1: Truy cap phan tu Cart Modal
let cartModalOverLay = document.querySelector(".cart-modal-overlay");
let cartBtn = document.querySelector(".cart-btn");
let closeBtn = document.querySelector("#close-btn");
console.log(closeBtn);


// B2: Them su kien mo Cart Modal
cartBtn.addEventListener("click", () => {
  cartModalOverLay.style.transform = "translateX(0)";
});

// B3: Them su kien dong Cart Modal
closeBtn.addEventListener("click",()=>{
  // alert("123");
  cartModalOverLay.style.transform = "translateX(-200%)";
});