import { MostrarPokemons } from "./mostrarPokemons.js";
import { saveFavorite } from "./saveFavorite.js";
import { searchPokemon } from "./searchPokemon.js";
import { updateFavorite } from "./updateFavoriteList.js";

const buscarBtn = document.getElementById("buscarBtn");
const pokemonInput = document.getElementById("pokemonInput");
const pokemonCard = document.getElementById("pokemonCard");
const botonFavoritos = document.getElementById("favoritos");

const botonLimpiar = document.getElementById("limpiar");

document.addEventListener("DOMContentLoaded", async function () {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  console.log("Cargando favoritos...", favoritos);

  MostrarPokemons(favoritos);
});


buscarBtn.addEventListener("click", () => {
  const nombrePokemon = pokemonInput.value.toLowerCase().trim();
  if (nombrePokemon === "") {
    alert("Por favor, escribe el nombre o número de un Pokémon.");
  }

  searchPokemon(nombrePokemon);
});

botonFavoritos.addEventListener("click", () => {
  let currentPoke = JSON.parse(localStorage.getItem("currentPokemon"));
  saveFavorite(currentPoke);
});

botonLimpiar.addEventListener("click", () => {
  updateFavorite()
});