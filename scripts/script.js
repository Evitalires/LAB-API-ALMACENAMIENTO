import { saveFavorite } from "./saveFavorite.js";
import { searchPokemon } from "./searchPokemon.js";
import { actualizarPokemons } from "./actualizarPokemons.js";

const buscarBtn = document.getElementById("buscarBtn");
const pokemonInput = document.getElementById("pokemonInput");
const botonFavoritos = document.getElementById("favoritos");
const borrarDatos = document.getElementById("borrarDatos");

borrarDatos.addEventListener("click", (e) => {
    localStorage.clear();
    let pokemonsBuscados = document.getElementById("pokemonsBuscados")
    pokemonsBuscados.innerHTML = "";
    let favoritosMostrar = document.getElementById("favoritosMostrar")
    favoritosMostrar.innerHTML = "" 
})

document.addEventListener("DOMContentLoaded", function () {
    actualizarPokemons("searched", "pokemonsBuscados")
    actualizarPokemons("favoritos", "favoritosMostrar")
});


buscarBtn.addEventListener("click", () => {
  const nombrePokemon = pokemonInput.value.toLowerCase().trim();
  if (nombrePokemon === "") {
    alert("Por favor, escribe el nombre o número de un Pokémon.");
  }
  else {
    searchPokemon(nombrePokemon);
    actualizarPokemons("searched", "pokemonsBuscados")
  }
});

botonFavoritos.addEventListener("click", () => {
  let currentPoke = JSON.parse(localStorage.getItem("currentPokemon"));
  saveFavorite(currentPoke);
  actualizarPokemons("favoritos", "favoritosMostrar")
});

botonLimpiar.addEventListener("click", () => {
  updateFavorite()
});