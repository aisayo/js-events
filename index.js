const pokeContainer = document.getElementById("poke-container");
const pokeFormContainer = document.getElementById("poke-form-container");

function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  const pokeImg = document.createElement("img");
  const pokeName = document.createElement("h3");
  const pokeLikes = document.createElement("h5");
  const likesNum = document.createElement("h3");
  const likesBttn = document.createElement("button");

  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;
  pokeName.textContent = pokemon.name;
  pokeLikes.textContent = 'Likes: ';
  likesBttn.id = "like-bttn";
  likesNum.id = "like-num"
  likesNum.textContent = pokemon.likes
  likesBttn.textContent = "<3";
  likesBttn.addEventListener("click", increaseLikes);

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn);
  pokeContainer.appendChild(pokeCard);
}

function increaseLikes(event) {
    const likes = event.target.previousElementSibling
    likes.textContent = parseInt(likes.textContent) + 1
    // grab the current likes number
    // increment it 
    // change likes element text to new #


}

function createBttn() {
  const bttn = document.createElement("button");
  bttn.id = "new-bttn";
  bttn.textContent = "Add Pokemon";
  bttn.addEventListener("click", pokeForm);
  pokeFormContainer.appendChild(bttn);
}

function pokeForm(event) {
  // event handler
  const bttn = event.target;
  bttn.remove();

  const form = document.createElement("form");
  form.id = "poke-form";
  form.addEventListener("submit", createPoke);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name-input";
  const nameLabel = document.createElement("label");
  nameLabel.textContent = " Poke Name: ";

  const imgInput = document.createElement("input");
  imgInput.type = "text";
  imgInput.id = "img-input";
  const imgLabel = document.createElement("label");
  imgLabel.textContent = " Poke img: ";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";

  form.append(nameLabel, nameInput, imgLabel, imgInput, submit);
  pokeFormContainer.appendChild(form);
}

function createPoke(event) {
  event.preventDefault();
  const form = event.target;
  const poke = {
    id: 6,
    name: form.querySelector("#name-input").value,
    img: form.querySelector("#img-input").value,
    likes: 0,
  };
  renderPoke(poke);
}

function init() {
  pokemons.forEach(renderPoke);
  createBttn();
}

init();
