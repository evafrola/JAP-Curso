const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const navbar_pc = getElementById("navbar_pc");

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

 //Función que se ejecuta teniendo en cuenta el tamaño del documento del usuario
 function changeDocument () {
  if(document.documentElement.clientWidth <= 640){
      //Se les agrega una clase que quita la visualización del elemento en la pagina
      navbar_pc.classList.add("hidden");
  }}

  //Función para remover la clase invisible y devuelve el contenido al documento, se elimina el menu desplegable de la barra de navegación
  function removeChange() {
    if (document.documentElement.clientWidth > 640) {
        navbar_pc.classList.remove("invisibility");
    }
  }

  //Evento que detecta un cambio en el tamaño de ventana y ejecuta las funciones
  window.addEventListener("resize", () => {
    changeDocument()
    removeChange()
  })

  //Funcion para cambiar ciertas imágenes en el dark mode
  function changeImgDarkMode() {
    if (condition) {
      
    }
  }
