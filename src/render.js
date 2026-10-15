// MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB

// Muestra una lista de comidas
export function mostrarComidas(comidas, contenedor, pais = "") {
    contenedor.innerHTML = ""; // Limpia el contenido anterior

    // Comprueba si no hay comidas (ej. Peru)
    if (comidas.length === 0) {
        contenedor.textContent = "No se han encontrado comidas.";
        return;
    }

    // Recorre todas las comidas
    comidas.forEach(function (comida) { // Para todas las comidas:
        const tarjeta = document.createElement("article"); // Crea una tarjeta para la comida
        tarjeta.classList.add("comida"); // Añade la clase comida para aplicar el CSS

        const titulo = document.createElement("h3"); // Nombre
        titulo.textContent = comida.strMeal;

        const imagen = document.createElement("img"); // Imagen
        imagen.src = comida.strMealThumb;

        const datos = document.createElement("p"); // Datos
        datos.classList.add("datos-comida");

        const area = comida.strArea || pais; // Pais
        const categoria = comida.strCategory; // Categoria

        // Algunas veces no se porque solo me da la categoria y no el pais asique para aunque sea me imprima solo la categoria y ya
        if (area && categoria) {
            datos.textContent = "País: " + area + " | Categoría: " + categoria;
        } else if (area) {
            datos.textContent = "País: " + area;
        } else if (categoria) {
            datos.textContent = "Categoría: " + categoria;
        } else {
            datos.textContent = "No se sabe el pais ni la categoria";
        }

        tarjeta.append(titulo, imagen, datos); // Añado todo a la tarjeta
        contenedor.append(tarjeta); // Añado la tarjeta al contenedor
    });
}
