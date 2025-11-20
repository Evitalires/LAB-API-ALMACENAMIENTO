// vamos a recibir unarray de pokemos y de aqui
// llamo a la funcion mostrarPokemon
import { mostrarPokemon } from "./mostrarPokemon";

export const MostrarPokemons = (pokemons) => {
    console.log(typeof pokemons);
    let contenedorPokemons = document.getElementById("contenedorPokemons");

    pokemons.forEach(pokemon => {
        let nuevoPokemon = mostrarPokemon(pokemon);
        contenedorPokemons.appendChild(nuevoPokemon)
    });
}