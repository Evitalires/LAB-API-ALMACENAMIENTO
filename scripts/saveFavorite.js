


export const saveFavorite = (pokemon)=>{
console.log("estoy en favorito", pokemon)
let arrayfavorito=JSON.parse(localStorage.getItem('favoritos')) ||[];

arrayfavorito.push(pokemon);
console.log(arrayfavorito);
localStorage.setItem('favoritos', JSON.stringify(arrayfavorito));

//en un array strinfgFy
// Guardarlo en el localstorage

}