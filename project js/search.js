function afficherSearch(products){

    let txt = "";

    products.forEach(function(product){

        let prixAchat =(product.prix * (100 - product.reduction) / 100).toFixed(2);

        txt += `

        <li class="list-group-item list-group-item-action">

            <a href="singleproduct.html?id=${product.id}"
            class="text-decoration-none text-dark">

                <div class="d-flex justify-content-between align-items-center">

                    <div>
                      
                        <h6 class="start-0 mb-0 fw-bold">
                            ${product.proNom}
                        </h6>

                    </div>

                    <span class="fw-bold text-success">
                        ${prixAchat} $
                    </span>

                </div>

            </a>

        </li>

        `;

    });

    document.getElementById("searchdisplay").innerHTML = txt;

}

function search(event){

    event.preventDefault();

    let keyword = document.getElementById("searchInput").value.toLowerCase().trim();

    if(keyword === ""){

        document.getElementById("searchdisplay").innerHTML = "";

        return;

    }

    let resultat = data.filter(function(product){

        return product.proNom.toLowerCase().includes(keyword);

    });

    afficherSearch(resultat);

}
