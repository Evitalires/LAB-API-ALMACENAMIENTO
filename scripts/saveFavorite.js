import { MostrarPokemons } from "./mostrarPokemons.js"

export const saveFavorite = pokemon => {
  let arrayfavorito = JSON.parse(localStorage.getItem('favoritos')) || []

  arrayfavorito.push(pokemon)
  console.log(arrayfavorito)
  localStorage.setItem('favoritos', JSON.stringify(arrayfavorito))

  MostrarPokemons(arrayfavorito)
}
