document.addEventListener("DOMContentLoaded", function() {
  let parrafo = document.getElementById("lorem");
  let buttonResaltar = document.getElementById("highlightBtn");

  buttonResaltar.addEventListener("click", ()=> {
  parrafo.classList.toggle("highlight");
  })
} );