
export const saveFavorite = (pokemon) => {

    let arrayfavorito = JSON.parse(localStorage.getItem('favoritos')) || [];

    const isDuplicate = arrayfavorito.some(favPoke => favPoke.id === pokemon.id);

    if (isDuplicate) {
        console.warn(`El Pokémon ${pokemon.name.toUpperCase()} ya está en favoritos.`);
        alert(`¡${pokemon.name.toUpperCase()} ya está en tus favoritos!`); 
        return;
    }

    arrayfavorito.push(pokemon);
    console.log(arrayfavorito);

    localStorage.setItem('favoritos', JSON.stringify(arrayfavorito));

    alert(`¡${pokemon.name.toUpperCase()} se agregó a favoritos!`); 
}
