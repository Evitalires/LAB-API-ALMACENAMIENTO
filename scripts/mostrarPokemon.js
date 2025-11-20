
export function mostrarPokemon(pokemon) {
    console.log(pokemon)
    const nuevoPokemon = document.createElement("div");
    nuevoPokemon.className = "pokemonCard card"

    const nombrePokemon = document.createElement("h2")
    nombrePokemon.className = ("pokemonNombre")
    nombrePokemon.textContent = pokemon.name.toUpperCase();

    const imagenPokemon = document.createElement("img");
    imagenPokemon.className = "pokemonImagen";
    imagenPokemon.alt = `Imagen del Pokémon ${pokemon.name}`
    imagenPokemon.src = pokemon.sprites.front_default;

    const descripcionPokemon = document.createElement("div")
    let tipo = pokemon.types.map(t => t.type.name).join(', ');
    let peso =  pokemon.weight / 10; // en kilogramos
    descripcionPokemon.innerHTML = `
        <p><strong>Tipo:</strong> <span class="pokemonTipo">${tipo}</span></p>
        <p><strong>Peso:</strong> <span class="pokemonPeso">${peso}</span> kg</p>
    `
    //Juntando el card pokemon
    nuevoPokemon.appendChild(nombrePokemon)
    nuevoPokemon.appendChild(imagenPokemon)
    nuevoPokemon.appendChild(descripcionPokemon)

    console.log(nuevoPokemon);
    return nuevoPokemon;
}