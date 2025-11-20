import { mostrarPokemons } from "./mostrarPokemons.js";

export const actualizarPokemons = (item, contenedor) => {
    let AllPokemon = JSON.parse(localStorage.getItem(item));
    mostrarPokemons(AllPokemon, contenedor);
    console.log("Actualizados poquemos post busquedad");
   
}