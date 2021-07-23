const pokeContainer = document.getElementById("poke-container");
const pokeFormContainer = document.getElementById("poke-form-container");

function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  const pokeImg = document.createElement("img");
  const pokeName = document.createElement("h3");
  const pokeLikes = document.createElement("h5");

  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;
  pokeName.textContent = pokemon.name;
  pokeLikes.textContent = `Likes: ${pokemon.likes}`;

  pokeCard.append(pokeImg, pokeName, pokeLikes);
  pokeContainer.appendChild(pokeCard);
}


function init() {
  pokemons.forEach(renderPoke);
}

init();
