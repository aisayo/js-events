// trigger an onclick event for the add pokemon button

const pokeBttn = document.getElementById("pokemon-bttn");
const pokeFormContainer = document.getElementById('pokemon-form-container')
const pokeList = document.getElementById('pokemon-thumbnails-list')
// pokeBttn.addEventListener('click', () => {
//     event.target.remove()
// })
pokeFormContainer.addEventListener("click", clickEvent);

function clickEvent (event) {
    console.log(event.target.id)
    if (event.target.id === "pokemon-bttn"){
        handleClick(event)
    } else if (event.target.id === "add-poke"){
        handleSubmit(event)
    }
}



function handleClick(event) {
  event.target.remove();
  pokeFormContainer.innerHTML = `
  <form id="pokemon-form">
    <input type=text id="poke-thumbnail">
    <input id="add-poke" type="submit" value="add Pokemon">
  </form>
  `
}

// Manipulate DOM upon submission

// const pokemonForm = document.getElementById('pokemon-form')
// pokemonForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    let poke = document.getElementById('poke-thumbnail').value
    pokeList.innerHTML += `
    <li><img src="${poke}"></li>
    `
}
