const buscarBtn = document.getElementById('buscarBtn');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonCard = document.getElementById('pokemonCard');

buscarBtn.addEventListener('click', () => {
    const nombrePokemon = pokemonInput.value.toLowerCase().trim();
    if (nombrePokemon === "") {
        alert("Por favor, escribe el nombre o número de un Pokémon.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return response.json();
        })
        .then(data => {
            mostrarPokemon(data);
        })
        .catch(error => {
            alert(error.message);
            pokemonCard.classList.add('oculto');
        });
});

function mostrarPokemon(pokemon) {
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
