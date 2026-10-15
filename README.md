<!-- MISION 2 - ASYNC ODYSSEY / HUGO COBOS GUTIERREZ INSO3ºB -->
## Uso de IA
He usado ChatGPT como herramienta de apoyo principalmente para la parte de JavaScript, ya que la parte de html y css es exactamente la misma
que la de la mision 1, simplemente adaptada a una nueva idea, cambiando los nombres de las clases y demas, pero es la misma estructura.
Me he centrado en hacer una practica orientada a la API de TheMealBD, que era uno de los ejemplos a usar.

La primera cosa para la cual he usado la IA ha sido saber como separar el js en los distintos modulos y que debia contener cada uno, asi como la estructura de carpetas que tenia que seguir

Tambien he pedido ayuda para hacer la parte bonus de localStorage que he comprobado despues que funcionaba correctamente, como, y porque.
Despues de esto tuve que solucionar el error del boton aleatorio junto a la IA para que no devolviera siempre la misma comida. 

Por ultimo, he necesitado ayuda para a la hora de filtar las comidas deseadas, sea por nombre, pais, o comida aleatoria, ocultar la lista de paises del menu inicial. Esto se soluciono facil con listaComidas.style.display = "none";
Y luego para un boton que me devolviera a solo las banderas, o lo que seria la pagina principal por asi decirlo.

Ejemplos de prompts reales:

* "como separo el JavaScript y donde lo meto, en que cartetas"
* "hay que añadir una caché en localStorage para no repetir peticiones ya hechas"
* "como hago para que se quiten las banderas cuando quiero enseñar las comidas"
* "y ahora necesito un boton que vuelva a donde las banderas"

No he usado nada fuera de lo impartido en clase, me he centrado en hacer una practica que entiendo y de la cual podia ir aprendiendo por
el camino sea de la presentacion del tema 2 como de ChatGPT con mis dudas

## Autopsia
1. Al igual que en la Mision 1. Para el buscador he decidido utilizar un evento "input" para que las comidas se filtren mientras escribo el nombre a tiempo real en la funcion del js. Descarte utilizar un boton de buscar cuando terminas de escribir porque de esta forma es mas rapida y mas visual.

2. Para mostrar las comidas de cada pais, he utilizado una peticion para obtener la lista de comidas y despues otras peticiones para conseguir sus detalles, como la categoria y el pais. He usado Promise.all() para esperar a que terminen todas las peticiones de detalles.