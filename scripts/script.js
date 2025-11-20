import { saveFavorite } from "./saveFavorite.js";
import { searchPokemon } from "./searchPokemon.js";

const buscarBtn = document.getElementById('buscarBtn');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonCard = document.getElementById('pokemonCard');
const botonFavoritos = document.getElementById('favoritos');

buscarBtn.addEventListener('click', () => {
    const nombrePokemon = pokemonInput.value.toLowerCase().trim();
    if (nombrePokemon === "") {
        alert("Por favor, escribe el nombre o número de un Pokémon.");        return;
    }

   searchPokemon(nombrePokemon)
  
});

botonFavoritos.addEventListener('click', () => {
    let currentPoke = JSON.parse(localStorage.getItem("currentPokemon"))
  saveFavorite(currentPoke);

}       
    
);


