 // MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB
const API_URL = "https://www.themealdb.com/api/json/v1/1";

// Funcion para pedir datos a la API
async function pedirDatos(url) {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error al obtener los datos");
        }

        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        console.error("Error al conectar con la API:", error.message);
        throw error;
    }
}

// Busca comidas por nombre
export async function buscarComidas(nombre) {
    const datos = await pedirDatos(`${API_URL}/search.php?s=${encodeURIComponent(nombre)}`);

    return datos.meals || [];
}

// Busca comidas por pais
export async function buscarPorPais(pais) {
    const datos = await pedirDatos(`${API_URL}/filter.php?a=${encodeURIComponent(pais)}`);

    return datos.meals || [];
}

// Obtiene una comida aleatoria
export async function obtenerComidaAleatoria() {
    const datos = await pedirDatos(`${API_URL}/random.php`);

    return datos.meals ? datos.meals[0] : null;
}

// Obtiene una receta completa por su ID
export async function obtenerReceta(id) {
    const datos = await pedirDatos(`${API_URL}/lookup.php?i=${encodeURIComponent(id)}`);

    return datos.meals ? datos.meals[0] : null;
}
