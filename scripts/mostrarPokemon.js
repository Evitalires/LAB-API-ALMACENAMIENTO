export function mostrarPokemon(pokemon) {
  const nuevoPokemon = document.createElement("div");
  nuevoPokemon.className = "pokemonCard";

  const nombrePokemon = document.createElement("h2");
  nombrePokemon.className = "pokemonNombre";
  nombrePokemon.textContent = pokemon.name.toUpperCase();

  const imagenPokemon = document.createElement("img");
  imagenPokemon.className = "pokemonImagen";
  imagenPokemon.src = pokemon.sprites.front_default;
  imagenPokemon.alt = `Imagen del Pokémon ${pokemon.name}`;

  const descripcionPokemon = document.createElement("div");
  let tipo = pokemon.types.map(t => t.type.name).join(', ');
  let peso = pokemon.weight / 10;

  descripcionPokemon.innerHTML = `
      <p><strong>Tipo:</strong> <span class="pokemonTipo">${tipo}</span></p>
      <p><strong>Peso:</strong> <span class="pokemonPeso">${peso}</span> kg</p>
  `;

  nuevoPokemon.appendChild(nombrePokemon);
  nuevoPokemon.appendChild(imagenPokemon);
  nuevoPokemon.appendChild(descripcionPokemon);

  return nuevoPokemon;
}
