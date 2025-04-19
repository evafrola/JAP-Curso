//VARIABLES
const PRODUCT_NUMBER = "101";
let productArray = [];

function showProductList() {
  let htmlContent = "";

    for (const item of productArray) {

        htmlContent += `
            <div class="col">
                <div class="card h-100">
                    <img src=" ${item.image}" class="card-img-top" alt="${item.description}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${item.soldCount} Vendidos</li>
                        <li class="list-group-item">${item.currency} ${item.cost}</li>
                    </ul>
                </div>
            </div>
        `
    } 
    document.getElementById("productsContainer").innerHTML = htmlContent;
    }

//Evento que llama al Fetch ejecutado en init pero para mostrar los valores guardados en products, siempre y cuando el status este OK
document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(PRODUCTS_URL + PRODUCT_NUMBER + EXT_TYPE)
    .then((resultObj) => {
        if (resultObj.status === "ok"){
            productArray = resultObj.data.products
            showProductList()
        }
    })
});
