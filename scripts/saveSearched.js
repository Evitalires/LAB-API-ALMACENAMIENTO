export const saveSearched = (pokemon)=>{

let arraySearched = JSON.parse(localStorage.getItem('searched')) || [];

arraySearched.unshift(pokemon);
console.log(arraySearched);
localStorage.setItem('searched', JSON.stringify(arraySearched));
}