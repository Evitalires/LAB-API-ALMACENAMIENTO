// vamos a recibir unarray de pokemos y de aqui
// llamo a la funcion mostrarPokemon
import { mostrarPokemon } from "./mostrarPokemon.js";

export const MostrarPokemons = (pokemons) => {
   const contenedor = document.getElementById("contenedorPokemons");
  contenedor.innerHTML = "";

  pokemons.forEach(pokemon => {
    contenedor.appendChild(mostrarPokemon(pokemon));
  });
}