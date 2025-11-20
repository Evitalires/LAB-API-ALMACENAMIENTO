// vamos a recibir unarray de pokemos y de aqui
// llamo a la funcion mostrarPokemon
import { mostrarPokemon } from "./mostrarPokemon.js";

export const MostrarPokemons = (pokemons) => {
    console.log("dentro de todos", pokemons[1])
let P = Array.from(pokemons)
    console.log(typeof pokemons, typeof P);
    let contenedorPokemons = document.getElementById("contenedorPokemons");

    P.forEach((e)=>
    {
        console.log(e)
        mostrarPokemon(e)
    })

    Object.values(pokemons).forEach((pokemon) => {
        console.log(pokemon)
        // let nuevoPokemon = mostrarPokemon(pokemon);
        // contenedorPokemons.appendChild(nuevoPokemon);
    });

    // pokemons.forEach(pokemon => {
    //     console.log("---",pokemon)
    //     let nuevoPokemon = mostrarPokemon(pokemon);
    //     contenedorPokemons.appendChild(nuevoPokemon)
    // });
}