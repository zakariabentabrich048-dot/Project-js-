function addToWishlist(id){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let product = data.find(function(prod){

        return prod.id === id;

    });

    let existingProduct = wishlist.find(function(item){

        return item.id === id;

    });

    if(existingProduct){

        alert("Product already in wishlist");

    } else {

        wishlist.push(product);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        updateWishlistBadge();

        alert(product.proNom + " added to wishlist");

    }

    if(document.getElementById("wishlist")){

        displayWishlist();

    }

}

function removeWishlist(id){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(function(item){

        return item.id !== id;

    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistBadge();

    if(document.getElementById("wishlist")){

        displayWishlist();

    }

}

function displayWishlist(){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let txt = "";

    if(wishlist.length === 0){

        txt = `
        
        <div class="container text-center py-5">

            <i class="bi bi-heart display-1 text-danger"></i>

            <h3 class="mt-4">
                Your wishlist is empty
            </h3>

            <a href="shop.html" class="btn btn-dark mt-3">
                Continue Shopping
            </a>

        </div>
        
        `;

    } else {

        txt += `
        
        <div class="container">
            <div class="row g-4">
        
        `;

        wishlist.forEach(function(prod){

            prod.prixAchat = (
                prod.prix * (100 - prod.reduction) / 100
            ).toFixed(2);

            txt += `
            
            <div class="col-md-6 col-lg-4">

                <div class="card shadow border-0 h-100 position-relative">

                    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
                        -${prod.reduction}%
                    </span>

                    <img src="${prod.urlImage}"
                    class="card-img-top"
                    alt="${prod.proNom}">

                    <div class="card-body d-flex flex-column">

                        <h5 class="fw-bold">
                            ${prod.proNom}
                        </h5>

                        <p class="mb-1">

                            <span class="fw-bold fs-5">
                                $${prod.prixAchat}
                            </span>

                            <span class="text-decoration-line-through text-secondary ms-2">
                                $${prod.prix}
                            </span>

                        </p>

                        <p class="text-muted">
                            ${prod.shortDescription}
                        </p>

                        <div class="mt-auto d-grid gap-2">

                            <button class="btn btn-dark"
                            onclick="addToCart(${prod.id})">

                                <i class="bi bi-cart-plus"></i>
                                Add To Cart

                            </button>

                            <button class="btn btn-outline-danger"
                            onclick="removeWishlist(${prod.id})">

                                <i class="bi bi-trash"></i>
                                Remove

                            </button>

                            <button class="btn btn-outline-secondary"
                            onclick="openWin(${prod.id})">

                                <i class="bi bi-eye"></i>
                                View Product

                            </button>

                        </div>

                    </div>

                </div>

            </div>`;

        });

        txt += `
            </div>
        </div>
        `;

    }

    let wishlistContainer = document.getElementById("wishlist");

    if(wishlistContainer){

        wishlistContainer.innerHTML = txt;

    }

}

function openWin(id){
    window.location.href = `singleproduct.html?id=${id}`;
}

function updateWishlistBadge(){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    let badges = document.querySelectorAll("#wishlistBadge");

    badges.forEach(function(badge){

        badge.innerText = wishlist.length;

    });

}

document.addEventListener("DOMContentLoaded", function(){

    updateWishlistBadge();

    if(document.getElementById("wishlist")){

        displayWishlist();

    }

});