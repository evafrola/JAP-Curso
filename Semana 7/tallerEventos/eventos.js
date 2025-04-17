//Variables
let div = document.querySelector(".el_div");
let btn = document.getElementById("btn");

div.addEventListener("click", (e)=> {
    if (e.target.classList.contains("el_div")) {
        alert("Hola! Soy el div")
    } else {
       alert("Hola!") 
    }
});