// MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB

// Importa las funciones
import {
    buscarComidas,
    buscarPorPais,
    obtenerComidaAleatoria
} from "./api.js";
import {
    filtrarComidas,
    contarComidas
} from "./logica.js";
import {
    mostrarComidas
} from "./render.js";

const buscador = document.querySelector("#buscador");
const listaComidas = document.querySelector("#lista-comidas");
const resultados = document.querySelector("#resultados");
const mensaje = document.querySelector("#mensaje");
const botonAleatorio = document.querySelector("#boton");
const botonesPais = document.querySelectorAll("#lista-comidas .recetas");

// Comidas que se estan viendo
let comidasActuales = [];

// Lista de paises pero con el dormato que necesita la api
const paises = {
    "España": "Spanish",
    "Italia": "Italian",
    "Japon": "Japanese",
    "China": "Chinese",
    "Peru": "Peruvian", //Vacio, es para ver que funciona
    "Vietnam": "Vietnamese"
};

// Boton para volver a los paises
function crearBotonVolver() {
    const volver = document.createElement("button"); // Creo un boton
    volver.textContent = "Volver a los países";

    volver.addEventListener("click", function () {
        resultados.innerHTML = "";
        listaComidas.style.display = "grid"; // Vuelve a mostrar los paises
        mensaje.textContent = "";
        buscador.value = "";
        comidasActuales = [];
    });

    resultados.append(volver); // Añado el boton a los resultados
}

// Buscar comidas por nombre
buscador.addEventListener("input", async function () {
    const nombre = buscador.value.trim(); // trim quita los espacios de los extremos

    // Si el buscador esta vacio muestro los paises
    if (nombre === "") {
        listaComidas.style.display = "grid";
        resultados.innerHTML = "";
        mensaje.textContent = "";
        comidasActuales = [];
        return;
    }

    // Oculto los paises y empieza a cargar
    listaComidas.style.display = "none";
    resultados.innerHTML = "";
    mensaje.textContent = "Cargando comidas...";

    try {
        const comidas = await buscarComidas(nombre); // Busca comidas en la API
        comidasActuales = filtrarComidas(comidas, nombre); // Filtra las comidas por nombre

        mostrarComidas(comidasActuales, resultados); // Muestra las comidas
        mensaje.textContent = "Comidas encontradas: " + contarComidas(comidasActuales);

        crearBotonVolver();
    } catch (error) { // En caso de error
        mensaje.textContent = "Error al cargar las comidas.";
    }
});

// Buscar comidas por pais
botonesPais.forEach(function (boton) { // Por cada boton de los paises
    boton.addEventListener("click", async function () {
        const pais = boton.parentElement.querySelector("h3").textContent; // Nombre del pais

        // Oculto los paises
        listaComidas.style.display = "none";
        resultados.innerHTML = "";
        mensaje.textContent = "Cargando comidas...";

        try {
            const comidas = await buscarPorPais(paises[pais]); // Busco las comidas de ese pais
            comidasActuales = comidas;

            mostrarComidas(comidasActuales, resultados, paises[pais]); // Y las muestro

            mensaje.textContent = "Comidas encontradas: " + contarComidas(comidasActuales);

            crearBotonVolver();
        } catch (error) {
            mensaje.textContent = "Error al cargar las comidas."; // Muestra un mensaje si falla la busqueda
        }
    });
});

// Comida aleatoria
botonAleatorio.addEventListener("click", async function () {
    listaComidas.style.display = "none";
    resultados.innerHTML = "";
    mensaje.textContent = "Cargando comida aleatoria...";

    try {
        const comida = await obtenerComidaAleatoria();

        comidasActuales = comida ? [comida] : []; // Guarda la comida en una lista o deja la lista vacia si no hay ninguna

        mostrarComidas(comidasActuales, resultados); // Muestra la comida
        mensaje.textContent = "";

        crearBotonVolver();
    } catch (error) {
        mensaje.textContent = "Error al cargar la comida.";
    }
});