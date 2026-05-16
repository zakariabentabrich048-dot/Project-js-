let Homeprod = "";
data.forEach(function(home,i){
    home.prixAchat = (home.prix * (100 - home.reduction) / 100).toFixed(2);

    Homeprod += `<div class="col-md-6 col-lg-4 col-xl-4">

            <div class="card shadow border-0 h-100 product-card position-relative" onclick="openWin(${home.id})">

                <!-- BADGE -->
                <span class="badge bg-danger position-absolute top-0 end-0 m-2 badge-custom">
                    -${home.reduction}%
                </span>

                <!-- IMAGE -->
                <img src="${home.urlImage}" class="card-img-top h-100" alt="Produit">

                <!-- BODY -->
                <div class="card-body d-flex flex-column mt-3">

                    <h5 class="card-title fw-bold">
                        ${home.proNom}
                    </h5>

                    <!-- PRICE -->
                    <div class="mb-2">

                        <span class="fw-bold fs-5 text-dark">
                           ${home.prixAchat} $
                        </span>

                        <span class="old-price ms-2">
                            ${home.prix} $
                        </span>

                    </div>

                    <!-- RATING -->
                    <div class="mb-2 text-warning">

                        <i class="bi bi-star-fill"></i>
                        ${home.rating}

                        <span class="text-muted">
                            (${home.reviews} reviews)
                        </span>

                    </div>

                    <!-- STOCK -->
                    <p class="stock text-success">
                        In Stock (${home.stock})
                    </p>

                    <!-- BUTTONS -->
                    <div class="mt-auto d-grid gap-2">

                        <button class="btn btn-dark"
                        onclick="addToCart(${home.id})">
                        <i class="bi bi-cart-plus"></i> 
                    Add To Cart </button>

                        <button class="btn btn-outline-secondary"
                             onclick="openWin(${home.id})">

                            <i class="bi bi-eye"></i>
                            View Product

                        </button>

                    </div>

                </div>

            </div>

        </div>
    
    `;
});
document.getElementById("Homeprod").innerHTML = Homeprod;

function openWin(id){

    window.location.href = `singleproduct.html?id=${id}`;

}

