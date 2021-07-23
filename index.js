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
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.id = "like-num";
  likesNum.textContent = pokemon.likes;

  const bttn = document.createElement("button");
  bttn.id = "like-bttn";
  bttn.textContent = "<3";
  bttn.addEventListener("click", increaseLike);

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, bttn);
  pokeContainer.appendChild(pokeCard);
}

function increaseLike(e) {
  const likesElement = e.target.previousElementSibling;
  likesElement.textContent = parseInt(likesElement.textContent) + 1;
}

function init() {
  pokemons.forEach(renderPoke);
  // pokemons.forEach((pokemon) => renderPoke(pokemon));
}

init();
