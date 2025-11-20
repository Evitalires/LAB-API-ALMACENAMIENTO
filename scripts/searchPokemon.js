import { mostrarPokemon } from "./mostrarPokemon.js";

export const searchPokemon =(nombrePokemon)=>{
    console.log("entre a search", nombrePokemon)
 fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
          
            return response.json();

        })
        .then(data => {
           mostrarPokemon(data)
        })
        .catch(error => {
            alert(error.message);
            pokemonCard.classList.add('oculto');
        });
}