

export function mostrarPokemon(pokemon) {
    console.log(pokemon)
    const nombre = document.getElementById('pokemonNombre');
    const imagen = document.getElementById('pokemonImagen');
    const tipo = document.getElementById('pokemonTipo');
    const peso = document.getElementById('pokemonPeso');

    nombre.textContent = pokemon.name.toUpperCase();
    imagen.src = pokemon.sprites.front_default;
    tipo.textContent = pokemon.types.map(t => t.type.name).join(', ');
    peso.textContent = pokemon.weight / 10; // en kilogramos

    pokemonCard.classList.remove('oculto');
}