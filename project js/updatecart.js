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

    cart.forEach(function(item){

        totalQty += item.qty;

    });

    let badge = document.getElementById("cartBadge");

    if(badge){

        badge.innerText = totalQty;

    }

}

updateCartBadge();
function buyNow(id) {  
    let currentQty = (typeof quantity !== 'undefined') ? quantity : 1;   
    addToCart(id, currentQty);

    window.location.href = "checkout.html";
}
