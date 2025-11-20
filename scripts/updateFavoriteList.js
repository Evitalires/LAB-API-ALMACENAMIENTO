export const updateFavorite = ()=>{
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const contenedor = document.getElementById("favoritos");

  contenedor.innerHTML = ""; 

  favoritos.forEach(poke => {
    const div = document.createElement("div");
    div.classList.add("col-4", "col-md-2");

    div.innerHTML = `
      <div class="pokemon-card">
        <img src="${poke.img}" width="100">
        <p class="mt-2">${poke.name}</p>
      </div>
    `;

    contenedor.appendChild(div);
  });
}