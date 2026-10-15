// MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB
// Filtra las comidas por su nombre
export function filtrarComidas(comidas, nombre) {
    return comidas.filter(function (comida) {
        return comida.strMeal.toLowerCase().includes(nombre.toLowerCase());
    });
}

// Obtiene los ingredientes y sus cantidades de una receta
export function obtenerIngredientes(receta) {
    const ingredientes = [];

    for (let i = 1; i <= 20; i++) {
        const ingrediente = receta["strIngredient" + i];
        const cantidad = receta["strMeasure" + i];

        if (ingrediente && ingrediente.trim() !== "") {
            ingredientes.push({
                ingrediente: ingrediente,
                cantidad: cantidad
            });
        }
    }

    return ingredientes;
}