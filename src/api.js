// MISION 1 - EL DESPERTAR DEL DOM / HUGO COBOS GUTIERREZ INSO3ºB
const buscador = document.querySelector("#buscador");
const peliculas = document.querySelectorAll(".pelicula");
const botonesComprar = document.querySelectorAll(".comprar");

const botonTodos = document.querySelector("#todos");
const botonAccion = document.querySelector("#accion");
const botonRomance = document.querySelector("#romance");
const botonAventura = document.querySelector("#aventura");

const cantidad = document.querySelector("#incrementar");
const botonVaciar = document.querySelector("#vaciar");
const mensaje = document.querySelector("#mensaje");

let numeroPeliculas = 0; // Numero de peliculas en el carrito

// BUSCADOR
buscador.addEventListener("input", function () { // Ejecuta la funcion cuando escribimos en el buscador

    const texto = buscador.value.toLowerCase(); // texto = lo que escribas en minusculas

    for (const pelicula of peliculas) { // Bucle para las peliculas

        const nombre = pelicula.querySelector("h3").textContent.toLowerCase(); // Nombre de la pelicula

        if (nombre.includes(texto)) { // Comprueba si el nombre contiene el texto buscado
            pelicula.classList.remove("oculto"); // Muestra la pelicula
        } else {
            pelicula.classList.add("oculto"); // Oculta la pelicula
        }
    }
});

// MOSTRAR TODAS
botonTodos.addEventListener("click", function () {

    for (const pelicula of peliculas) {
        pelicula.classList.remove("oculto"); // Todas las peliculas visibles
    }
});

// FILTRAR ACCION
botonAccion.addEventListener("click", function () {
    mostrarCategoria("accion"); // Llama a la funcion con el parametro de la categoria
});

// FILTRAR ROMANCE
botonRomance.addEventListener("click", function () {
    mostrarCategoria("romance");
});

// FILTRAR AVENTURA
botonAventura.addEventListener("click", function () {
    mostrarCategoria("aventura");
});

// FUNCION PARA MOSTRAR UNA CATEGORIA
function mostrarCategoria(categoria) { // Recibe la categoria

    for (const pelicula of peliculas) {

        const categorias = pelicula.getAttribute("categoria"); // Obtiene las categorias de la peliculas

        if (categorias.includes(categoria)) { // Comprueba si la pelicula pertenece a la categoria
            pelicula.classList.remove("oculto");
        } else {
            pelicula.classList.add("oculto");
        }

    }

}

// AÑADIR AL CARRITO
for (const boton of botonesComprar) { // Recorre todos los botones de comprar

    boton.addEventListener("click", function () {
        numeroPeliculas = numeroPeliculas + 1; // Suma una pelicula
        cantidad.textContent = numeroPeliculas; // Actualiza el numero
        mensaje.textContent = "Pelicula añadida al carrito."; // Mensaje
    });

}

// VACIAR CARRITO
botonVaciar.addEventListener("click", function () {

    numeroPeliculas = 0; // Pone el numero de peliculas a cero
    cantidad.textContent = numeroPeliculas; // Actualiza el numero
    mensaje.textContent = "El carrito esta vacío."; // Mensaje

});

// MODO OSCURO
document.addEventListener("keydown", function (event) {
    
    if (event.key === "ñ" || event.key === "Ñ") { // Si se pulsa la letra ñ
        document.body.classList.toggle("oscuro"); // Añade o quita la clase "oscuro"
    }

});