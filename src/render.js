// MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB
// Muestra una lista de comidas
export function mostrarComidas(comidas, contenedor) {
    contenedor.innerHTML = "";

    if (comidas.length === 0) {
        contenedor.textContent = "No se han encontrado comidas.";
        return;
    }

    comidas.map(function (comida) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("comida");

        const titulo = document.createElement("h3");
        titulo.textContent = comida.strMeal;

        const imagen = document.createElement("img");
        imagen.src = comida.strMealThumb;
        imagen.alt = comida.strMeal;

        const boton = document.createElement("button");
        boton.textContent = "Ver receta";
        boton.classList.add("ver-receta");
        boton.dataset.id = comida.idMeal;

        tarjeta.append(titulo, imagen, boton);
        contenedor.append(tarjeta);
    });
}

// Muestra una receta completa
export function mostrarReceta(receta, contenedor) {
    contenedor.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = receta.strMeal;

    const imagen = document.createElement("img");
    imagen.src = receta.strMealThumb;
    imagen.alt = receta.strMeal;

    const instrucciones = document.createElement("p");
    instrucciones.textContent = receta.strInstructions;

    contenedor.append(titulo, imagen, instrucciones);
}
