import { mostrarPokemon } from "./mostrarPokemon.js";
import { saveSearched } from "./saveSearched.js"
import { actualizarPokemons } from "./actualizarPokemons.js";

export const searchPokemon = nombrePokemon => {
  console.log('entre a search', nombrePokemon);

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
        })
       .then(data => {
            let pokemonEncontrado = document.getElementById("pokemonEncontrado")
            pokemonEncontrado.innerHTML = ""
            console.log(data);
            localStorage.setItem("currentPokemon", JSON.stringify(data));
            
            pokemonEncontrado.appendChild(mostrarPokemon(data))
            saveSearched(data)
            //Despues de guardar
            actualizarPokemons("searched", "pokemonsBuscados")
        })
        .catch(error => {
            alert(error.message);
            if (document.getElementById('pokemonCard')) {
                 document.getElementById('pokemonCard').classList.add('oculto');
            } else {
                 console.error("El elemento 'pokemonCard' no se encontró en el DOM.");
            }
        });
};