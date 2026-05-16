let scrollBtn = document.getElementById("scrollTopBtn");

if(scrollBtn){

    window.onscroll = function () {

        if (document.documentElement.scrollTop > 200) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }
    };

    scrollBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

let header = `<nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
  <div class="container">

    <a class="navbar-brand fw-bold fs-3" href="teetherly.html">Teetherly</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">

      <ul class="navbar-nav mx-auto text-center">

        <li class="nav-item">
          <a class="nav-link fw-semibold" href="teetherly.html">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link fw-semibold" href="shop.html">Shop</a>
        </li>

        <li class="nav-item">
          <a class="nav-link fw-semibold" href="about.html">About Us </a>
        </li>

        <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Support
    </a>

      <ul class="dropdown-menu text-center">
        <li>
          <a class="dropdown-item" href="contactUs.html">Contact Us</a>
        </li>
                    <li><hr class="dropdown-divider"></li>

        <li>
          <a class="dropdown-item" href="/privacy.html">Privacy Policy</a>
        </li>
                    <li><hr class="dropdown-divider"></li>

        <li>
          <a class="dropdown-item" href="/terms.html">Terms & Policy</a>
        </li>
      </ul>
    </li>

    </ul>
  </ul>

      <div class="d-flex align-items-center gap-3">

        <form class="d-flex" onsubmit="search(event)">
          <input class="form-control form-control-sm" type="search" placeholder="Search" id="searchInput">
          <button type="submit" class="btn">
            <i class="bi bi-search"></i>
          </button>
         
        </form> 
          <ul id="searchdisplay" class="list-group position-absolute top-100 start-80 w-45 shadow" style="z-index:999;">

          </ul>  
          

        <a href="wishlist.html" class="text-dark fs-5 position-relative">
          <i class="bi bi-heart"></i>
  <span id="wishlistBadge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">

        0

  </span>

        </a>

        <a href="cart.html" class="text-dark fs-5 position-relative">

          <i class="bi bi-cart"></i>

          <span id="cartBadge"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
          </span>

        </a>

      </div>

    </div>
  </div>
</nav>`;

let footer = `<footer class="bg-dark text-white pt-5 pb-3" id="mainfooter">

  <div class="container">

    <div class="row g-4">

      <div class="col-lg-4">
        <h3 class="fw-bold">Teetherly</h3>

        <p class="text-light">
          Premium teething products made with love, comfort, and safety for your baby.
        </p>
      </div>

      <div class="col-lg-2 col-md-6">
        <h5>Quick Links</h5>

        <ul class="list-unstyled">

          <li>
            <a href="teetherly.html" class="text-light">Home</a>
          </li>

          <li>
            <a href="shop.html" class="text-light">Shop</a>
          </li>

          <li>
            <a href="about.html" class="text-light">About</a>
          </li>

        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h5>Support</h5>

        <ul class="list-unstyled">

          <li>
            <a href="/cantactus.html" class="text-light">Contact Us</a>
          </li>

          <li>
            <a href="/privacy.html" class="text-light">Privacy Policy</a>
          </li>

          <li>
            <a href="/terms.html" class="text-light">Terms & Conditions</a>
          </li>

        </ul>
      </div>

      <div class="col-lg-3">
        <h5>Follow Us</h5>

        <div class="d-flex gap-3 fs-4">

          <a href="#" class="text-light">
            <i class="bi bi-facebook"></i>
          </a>

          <a href="#" class="text-light">
            <i class="bi bi-instagram"></i>
          </a>

          <a href="#" class="text-light">
            <i class="bi bi-twitter-x"></i>
          </a>

          <a href="#" class="text-light">
            <i class="bi bi-pinterest"></i>
          </a>

        </div>
      </div>

    </div>

    <hr class="border-secondary my-4">

    <div class="text-center">
      <p class="mb-0">
        © 2026 Teetherly. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>`;
document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

function afficher(list){
  let txt = "";
  
  list.forEach(function(prod, i){
        prod.prixAchat = (prod.prix * (100 - prod.reduction) / 100).toFixed(2);

        txt += `

        <div class="col-md-6 col-lg-4 col-xl-4">

            <div class="card shadow border-0 h-100 product-card position-relative" onclick="openWin(${prod.id})">

                <!-- BADGE -->
                <span class="badge bg-danger position-absolute top-0 end-0 m-2 badge-custom">
                    -${prod.reduction}%
                </span>

                <!-- IMAGE -->
                <img src="${prod.urlImage}" class="card-img-top" alt="Produit">

                <!-- BODY -->
                <div class="card-body d-flex flex-column mt-3">

                    <h5 class="card-title fw-bold">
                        ${prod.proNom}
                    </h5>

                    <!-- PRICE -->
                    <div class="mb-2">

                        <span class="fw-bold fs-5 text-dark">
                           ${prod.prixAchat} $
                        </span>

                        <span class="old-price ms-2">
                            ${prod.prix} $
                        </span>

                    </div>

                    <!-- RATING -->
                    <div class="mb-2 text-warning">

                        <i class="bi bi-star-fill"></i>
                        ${prod.rating}

                        <span class="text-muted">
                            (${prod.reviews} reviews)
                        </span>

                    </div>

                    <!-- STOCK -->
                    <p class="stock text-success">
                        In Stock (${prod.stock})
                    </p>

                    <!-- BUTTONS -->
                    <div class="mt-auto d-grid gap-2">

                        <button class="btn btn-dark"
                        onclick="addToCart(${prod.id})">
                        <i class="bi bi-cart-plus"></i> 
                    Add To Cart </button>

                        <button class="btn btn-outline-secondary"
                             onclick="openWin(${prod.id})">

                            <i class="bi bi-eye"></i>
                            View Product

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `
    })

    document.getElementById("display").innerHTML = txt;
}

function openWin(id){

    window.location.href = `singleproduct.html?id=${id}`;

}

function addToCart(id, qty = 1){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = data.find(function(prod){

        return prod.id === id;

    });

    let existingProduct = cart.find(function(item){

        return item.id === id;

    });

    if(existingProduct){

        existingProduct.qty += qty;

    }
    else{

        cart.push({

            id: product.id,
            proNom: product.proNom,
            prix: product.prix,
            reduction: product.reduction,
            urlImage: product.urlImage,
            qty: qty

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();

    alert(product.proNom + " added to cart");

}

function updateCartBadge(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalQty = 0;

    cart.forEach(function(item){

        totalQty += item.qty;

    });

    let badge = document.getElementById("cartBadge");

    if(badge){

        badge.innerText = totalQty;

    }

}
if(document.getElementById("display")){

    afficher(data);

}

updateCartBadge();
