// MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB

// Filtra las comidas por su nombre comparando el input con el strMeal
export function filtrarComidas(comidas, nombre) {
    return comidas.filter(function (comida) {
        return comida.strMeal.toLowerCase().includes(nombre.toLowerCase());
    });
}

// Cuenta las comidas encontradas
// Suma 1 por cada comida mediante un reduce
export function contarComidas(comidas) {
    return comidas.reduce(function (total) {
        return total + 1;
    }, 0);
}