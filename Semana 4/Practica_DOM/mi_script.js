document.addEventListener('DOMContentLoaded', function () {

    //Variables
    let parrafo = document.getElementById("info");
    let enlaces = document.getElementsByTagName("a");
    let contador = 0;
    let todosLosParrafo = document.getElementsByTagName("p")

    // Muestra en el párrafo "info", el número de enlaces de la página :
    parrafo.innerHTML += "<strong>Numero de enlaces de la pagina web:</strong> " + enlaces.length + "<br>"

    // Muestra en el párrafo "info", la dirección del penúltimo enlace de la página :
    parrafo.innerHTML += "<strong>Direccion a la que enlaza el penultimo enlace: </strong>" + enlaces[enlaces.length - 2].href + "<br>"
    
    // Muestra en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "http://prueba/") {
            contador++
        }
    };
    parrafo.innerHTML += "<strong> Numero de enlaces que enlazan a prueba: </strong>" + contador + "<br>"
    
    // Muestra en el párrafo "info", el número de enlaces del tercer párrafo :
    parrafo.innerHTML += "<strong>Numero de enlaces del tercer parrafo: </strong>" + todosLosParrafo[2].childElementCount
});

