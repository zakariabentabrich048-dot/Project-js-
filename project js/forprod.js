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
        <h3 class="fw-bold text-white">Teetherly</h3>
        <p class="text-secondary">
          Premium teething products made with love, comfort, and safety for your baby.
        </p>
      </div>

      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold mb-3">Quick Links</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="teetherly.html" class="text-secondary text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="shop.html" class="text-secondary text-decoration-none">Shop</a></li>
          <li class="mb-2"><a href="about.html" class="text-secondary text-decoration-none">About</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h6 class="fw-bold mb-3">Support</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="contactus.html" class="text-secondary text-decoration-none">Contact Us</a></li>
          <li class="mb-2"><a href="privacy.html" class="text-secondary text-decoration-none">Privacy Policy</a></li>
          <li class="mb-2"><a href="terms.html" class="text-secondary text-decoration-none">Terms & Conditions</a></li>
        </ul>
      </div>

      <div class="col-lg-3">
        <h6 class="fw-bold mb-3">Follow Us</h6>
        <div class="d-flex gap-3 fs-5">
          <a href="#" class="text-secondary"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-pinterest"></i></a>
        </div>
      </div>

    </div>

    <hr class="border-secondary my-4">

    <div class="text-center text-secondary">
      <p class="mb-0" style="font-size: 0.9rem;">
        &copy; 2026 Teetherly. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>`;


document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const page = data.find(function(prod){
    return prod.id === productId;
});

if(!page){
    document.getElementById("Productdetail").innerHTML = "<h2 class='text-center mt-5 py-5'>Product Not Found</h2>";
} else {

page.prixAchat = (page.prix * (100 - page.reduction) / 100).toFixed(2);

document.getElementById("Productdetail").innerHTML = `
<section class="container py-5">
    <div class="row g-5 align-items-start">

        <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="p-2 border rounded bg-white">
                <img src="${page.urlImage}" class="product-image rounded img-fluid w-100" alt="${page.proNom}">
            </div>
        </div>

        <div class="col-lg-6">
            <span class="badge bg-danger mb-2 px-3 py-2 fs-6">-${page.reduction}% OFF</span>
            <h1 class="fw-bold display-6 mb-2">${page.proNom}</h1>

            <p class="text-muted small mb-3">
                SKU: <span class="text-dark fw-medium">${page.sku}</span> &nbsp;|&nbsp; Category: <span class="text-dark fw-medium">${page.category}</span>
            </p>

            <div class="mb-3 text-warning">
                <i class="bi bi-star-fill"></i> <span class="text-dark fw-bold">${page.rating}</span>
                <span class="text-muted ms-1">(${page.reviews} Reviews)</span>
            </div>

            <div class="mb-4 bg-light p-3 rounded d-flex align-items-center gap-3">
                <span class="fs-2 fw-bold text-success">$${page.prixAchat}</span>
                <span class="text-decoration-line-through text-muted fs-5">$${page.prix}</span>
            </div>

            <p class="text-secondary mb-4 lh-lg">${page.shortDescription}</p>
            
            <label class="fw-bold text-muted small d-block mb-2">QUANTITY</label>
            <div class="d-flex align-items-center gap-1 mb-4 border rounded bg-white" style="width: max-content;">
                <button class="btn btn-link text-dark px-3 py-2 text-decoration-none shadow-none" onclick="decreaseQty()"><i class="bi bi-dash-lg"></i></button>
                <span id="qty" class="fs-5 fw-bold px-3" style="min-width: 40px; text-align: center;">1</span>
                <button class="btn btn-link text-dark px-3 py-2 text-decoration-none shadow-none" onclick="increaseQty()"><i class="bi bi-plus-lg"></i></button>
            </div>

            <div class="row g-2 mb-4">
                <div class="col-sm-6">
                    <button class="btn btn-dark btn-lg w-100 py-3 fw-semibold" onclick="addToCart(${page.id}, quantity)">
                        <i class="bi bi-cart-plus me-2"></i> Add To Cart
                    </button>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-success btn-lg w-100 py-3 fw-semibold" onclick="buyNow(${page.id})">
                        Buy It Now
                    </button>
                </div>
                <div class="col-12">
                    <button class="btn btn-outline-secondary w-100 py-2" onclick="addToWishlist(${page.id})">   
                         <i class="bi bi-heart me-2"></i> Add to Wishlist
                    </button>
                </div>
            </div>

            <div class="accordion mt-5" id="productAccordion">
                <div class="accordion-item border-0 border-bottom mb-2">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-semibold bg-transparent shadow-none px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapse">
                            <i class="bi bi-truck me-2 text-primary"></i> Shipping Information
                        </button>
                    </h2>
                    <div id="shippingCollapse" class="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div class="accordion-body text-muted px-0 pb-3 small lh-lg">
                            Orders are processed within 24 hours. Delivery usually takes 1-3 business days.<br>
                            <strong>Free shipping</strong> available in the USA on orders over $30.
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-0">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-semibold bg-transparent shadow-none px-0" type="button" data-bs-toggle="collapse" data-bs-target="#descriptionCollapse">
                            <i class="bi bi-card-text me-2 text-primary"></i> Product Description
                        </button>
                    </h2>
                    <div id="descriptionCollapse" class="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div class="accordion-body text-muted px-0 pb-3 small lh-lg">
                            ${page.longDescription}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`;
}

function openWin(id){
    window.location.href = `singleproduct.html?id=${id}`;
}

function addToCart(id, qty = 1){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = data.find(function(prod){ return prod.id === id; });
    let existingProduct = cart.find(function(item){ return item.id === id; });

    if(existingProduct){
        existingProduct.qty += qty;
    } else {
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

function buyNow(id) {
    let currentQty = (typeof quantity !== 'undefined') ? quantity : 1;
    addToCart(id, currentQty);
    window.location.href = "checkout.html";
}

let quantity = 1;

function increaseQty(){
    quantity++;
    document.getElementById("qty").innerText = quantity;
}

function decreaseQty(){
    if(quantity > 1){
        quantity--;
        document.getElementById("qty").innerText = quantity;
    }
}

function updateCartBadge(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQty = 0;
    cart.forEach(function(item){ totalQty += item.qty; });
    let badge = document.getElementById("cartBadge");
    if(badge){ badge.innerText = totalQty; }
}

updateCartBadge();
displayRelatedProducts();

function displayRelatedProducts(){
    let related = data.filter(function(prod){
        return prod.category === page.category && prod.id !== page.id;
    });

    let txt = "";
    related.forEach(function(prod){
        prod.prixAchat = (prod.prix * (100 - prod.reduction) / 100).toFixed(2);
        txt += `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow-sm border-0 h-100 product-card position-relative" style="cursor: pointer;">
                <span class="badge bg-danger position-absolute top-0 end-0 m-2">-${prod.reduction}%</span>
                <img src="${prod.urlImage}" class="card-img-top p-2 rounded" alt="${prod.proNom}" onclick="openWin(${prod.id})">
                <div class="card-body d-flex flex-column">
                    <h6 class="fw-bold mb-1 text-dark text-truncate" onclick="openWin(${prod.id})">${prod.proNom}</h6>
                    <p class="mb-3 small">
                        <span class="fw-bold text-success">$${prod.prixAchat}</span>
                        <span class="text-decoration-line-through text-muted ms-2">$${prod.prix}</span>
                    </p>
                    <div class="mt-auto d-grid gap-2">
                        <button class="btn btn-sm btn-dark" onclick="addToCart(${prod.id})">
                            <i class="bi bi-cart-plus me-1"></i> Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    
    let relatedContainer = document.getElementById("relatedProducts");
    if (relatedContainer) { relatedContainer.innerHTML = txt; }
}

let card = document.getElementById("card");
if(card) { card.addEventListener("click", openWin); }