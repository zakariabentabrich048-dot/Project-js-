let header = `<nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
  <div class="container">

    <a class="navbar-brand fw-bold fs-3" href="teetherly.html">Teetherly</a>


  </div>
</nav>`;

document.getElementById("header").innerHTML = header;


function displayCheckoutSummary() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let itemsContainer = document.getElementById("checkoutItems");
    let subtotalElement = document.getElementById("checkoutSubtotal");
    let shippingElement = document.getElementById("checkoutShipping");
    let totalElement = document.getElementById("checkoutTotal");

    if (cart.length === 0) {
        itemsContainer.innerHTML = "<p class='text-muted'>Your cart is empty.</p>";
        return;
    }

    let txt = "";
    let subtotal = 0;

    cart.forEach(function(item) {
        let finalPrice = (item.prix * (100 - item.reduction) / 100).toFixed(2);
        let itemSubtotal = finalPrice * item.qty;
        
        subtotal += itemSubtotal;

        txt += `
        <div class="d-flex justify-content-between mb-2">
            <span>
                ${item.proNom} <span class="text-muted">× ${item.qty}</span>
            </span>
            <span>$${itemSubtotal.toFixed(2)}</span>
        </div>
        `;
    });

    itemsContainer.innerHTML = txt;

    let shippingCost = 0;
    if (subtotal < 30) {
        shippingCost = 0.00;
        shippingElement.innerText = "$" + shippingCost.toFixed(2);
    } else {
        shippingCost = 0;
        shippingElement.innerText = "Free";
        shippingElement.classList.add("text-success"); 
    }

    let total = subtotal + shippingCost;

    subtotalElement.innerText = "$" + subtotal.toFixed(2);
    totalElement.innerText = "$" + total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("checkoutItems")) {
        displayCheckoutSummary();
    }
});

