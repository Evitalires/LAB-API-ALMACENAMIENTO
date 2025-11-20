import { mostrarPokemon } from "./mostrarPokemon.js";

export const mostrarPokemons = (pokemons, contenedor) => {
    // Asegurarse de que pokemons es un array y no es null
    if (!Array.isArray(pokemons)) {
        console.warn("MostrarPokemons recibió algo que no es un array:", pokemons);
        return; 
    }
    
    let contenedorPokemons = document.getElementById(contenedor);
    contenedorPokemons.innerHTML = ''; // Limpiar el contenido existente antes de mostrar los nuevos

    pokemons.forEach(pokemon => {
        if (pokemon) { // Verificar que el objeto pokemon no sea nulo/undefined
            let nuevoPokemonCard = mostrarPokemon(pokemon);
            contenedorPokemons.appendChild(nuevoPokemonCard); // 
        }
    });
}