let filteredProducts = [...data];
let checkboxes = document.querySelectorAll(".form-check-input");
let sortSelect = document.querySelector(".form-select");
let priceRange = document.querySelector(".form-range");

function afficher(list){
    let txt = "";

    list.forEach(function(prod){

        prod.prixAchat = (prod.prix * (100 - prod.reduction) / 100).toFixed(2);

        txt += `

        <div class="col-md-6 col-lg-4">

            <div class="card shadow border-0 h-100 product-card position-relative">

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

                    <div class="mb-2">

                        <span class="fw-bold fs-5">
                            $${prod.prixAchat}
                        </span>

                        <span class="text-decoration-line-through text-secondary ms-2">
                            $${prod.prix}
                        </span>

                    </div>

                    <div class="text-warning mb-2">
                        <i class="bi bi-star-fill"></i>
                        ${prod.rating}
                    </div>

                    <p class="text-success">
                        In Stock (${prod.stock})
                    </p>

                    <div class="mt-auto d-grid gap-2">

                        <button class="btn btn-dark"
                        onclick="addToCart(${prod.id})">

                            <i class="bi bi-cart-plus"></i>
                            Add To Cart

                        </button>

                        <button class="btn btn-outline-secondary"
                        onclick="openWin(${prod.id})">

                            <i class="bi bi-eye"></i>
                            View Product

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;
    });

    document.getElementById("display").innerHTML = txt;
}

afficher(filteredProducts);

function filterProducts(){

    let selectedCategories = [];

    checkboxes.forEach(function(box){

        if(box.checked){

            selectedCategories.push(
                box.nextElementSibling.innerText.trim()
            );

        }

    });

    let maxPrice = Number(priceRange.value);

    filteredProducts = data.filter(function(prod){

        let priceAfterDiscount =
        prod.prix * (100 - prod.reduction) / 100;

        let categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(prod.category);

        let priceMatch =
        priceAfterDiscount <= maxPrice;

        return categoryMatch && priceMatch;

    });

    sortProducts();
}


function sortProducts(){

    let value = sortSelect.value;

    if(value === "Newest"){

        filteredProducts.sort(function(a, b){

            return b.id - a.id;

        });

    }

    else if(value === "Price Low to High"){

        filteredProducts.sort(function(a, b){

            let priceA =
            a.prix * (100 - a.reduction) / 100;

            let priceB =
            b.prix * (100 - b.reduction) / 100;

            return priceA - priceB;

        });

    }

    else if(value === "Price High to Low"){

        filteredProducts.sort(function(a, b){

            let priceA =
            a.prix * (100 - a.reduction) / 100;

            let priceB =
            b.prix * (100 - b.reduction) / 100;

            return priceB - priceA;

        });

    }

    afficher(filteredProducts);
}

checkboxes.forEach(function(box){

    box.addEventListener("change", filterProducts);

});


sortSelect.addEventListener("change", sortProducts);

priceRange.max = 50;
priceRange.value = 50;

priceRange.addEventListener("input", filterProducts);