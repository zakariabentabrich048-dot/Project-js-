let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

    let txt = "";

    let total = 0;

    cart.forEach(function(item, index){

        let finalPrice =
        (item.prix * (100 - item.reduction) / 100).toFixed(2);

        let subtotal = finalPrice * item.qty;

        total += subtotal;

        txt += `

        <div class="col-12">

            <div class="card shadow-sm p-3">

                <div class="row align-items-center">

                    <div class="col-md-2">

                        <img src="${item.urlImage}"
                        class="img-fluid rounded">

                    </div>

                    <div class="col-md-3">

                        <h5>${item.proNom}</h5>

                    </div>

                    <div class="col-md-2">

                        $${finalPrice}

                    </div>

                    <div class="col-md-2">

                        Qty: ${item.qty}

                    </div>

                    <div class="col-md-2 fw-bold">

                        $${subtotal.toFixed(2)}

                    </div>

                    <div class="col-md-1">

                        <button class="btn btn-danger"
                        onclick="removeItem(${index})">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    document.getElementById("cartItems").innerHTML = txt;

    document.getElementById("cartTotal").innerText =
    "$" + total.toFixed(2);

}

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();

    displayCart();

}

displayCart();