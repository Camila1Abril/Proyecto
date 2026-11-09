
const tarjetas = document.querySelectorAll(".card");

const respuestasCorrectas = ["b", "a", "c", "a", "c"];

tarjetas.forEach(function(tarjeta, indice) {

    const boton = tarjeta.querySelector(".Comprobar");

    boton.addEventListener("click", function() {

        const respuesta = tarjeta.querySelector('input[type="radio"]:checked');

        if (respuesta === null) {
            alert("Por favor, seleccioná una respuesta.");
        }
        else if (respuesta.value === respuestasCorrectas[indice]) {
            alert("¡Correcto! ¡Muy bien!");
        }
        else {
            alert("¡Incorrecto! Intentalo nuevamente.");
        }

    });

});
