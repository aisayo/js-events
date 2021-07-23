const pokeContainer = document.getElementById("poke-container");
const pokeFormContainer = document.getElementById("poke-form-container");

function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";
  
  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;
  
  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;
  
  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = 'Likes: ';
  
  const likesNum = document.createElement("h5");
  likesNum.id = "like-num"
  likesNum.textContent = pokemon.likes

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum);
  pokeContainer.appendChild(pokeCard);
}

function init() {
  pokemons.forEach(renderPoke);
}

init();
