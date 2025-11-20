import { MostrarPokemons } from "./mostrarPokemons.js";

export const updateFavorite = ()=>{
localStorage.removeItem("favoritos");

MostrarPokemons()
 
}