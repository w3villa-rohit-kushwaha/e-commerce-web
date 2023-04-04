var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    1804: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },
});

let slidee = document.querySelectorAll(".swiper-slide");
let productList = document.querySelector("#product-list-3");

// fetch JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < slidee.length && i < data.products.length; i++) {
        const product = data.products[i];
      
        // Update the swiper slide with the product image
        slidee[i].innerHTML = ` <div class="card m-4" style="width:323px">
        <img src="${product.image_url}" class="card-img-top" width="100%" height="300px">
        <button type="button" class="btn btn-info btn-block mb-1">${product.category}</button>
      </div>
    `;
      
        // Create a new HTML element for each product and add it to the product list
        const productElement = document.createElement("div");
      
        
        productList.appendChild(productElement);
      }
  });
