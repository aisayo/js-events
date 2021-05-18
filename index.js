let form = document.getElementById("pokemon-form-container")
let bttn = document.getElementById("add-bttn")
let p = document.getElementById("p-tag")

bttn.addEventListener('click', (e) => {
  console.log('bttn')
  // e.stopPropagation()
})
form.addEventListener('click', () => {console.log('form')})
p.addEventListener('click', () => {console.log('p')})


// p.addEventListener('click', alert('p'))
// form.addEventListener('click', alert('form'))

// // Trigger a change when the + bttn is clicked

// // Select the button
// const addBttn = document.getElementById('add-bttn')
// const pokeFormContainer = document.getElementById('pokemon-form-container')
// const pokeList = document.getElementById('pokemon-thumbnails-list')
// // Add an event listener that will listen for a 'click'

// addBttn.addEventListener('click', handleClick)

// function handleClick() {
//   // add form in place of button
//   pokeFormContainer.innerHTML = `
//   <form id="poke-form">
//     <input id="poke-input" type="text" />
//     <input id="submit-poke" type="submit" value="Add Pokemon"/>
//   </form>
//   `

//   const pokeForm = document.getElementById("poke-form")
//   pokeForm.addEventListener('submit', handleSubmit)
// }

// function handleSubmit (event) {
//   event.preventDefault()
//   const poke = document.getElementById('poke-input').value
//   // manipulate DOM to include new Poke
//   pokeList.innerHTML += `
//   <li><img src=${poke}></li>
//   `
//   // remove the form
//   // pokeFormContainer.innerHTML = "" 
//   pokeFormContainer.innerHTML = `${addBttn}`
//   // re-insert + button 

//   addBttn.addEventListener('click', handleClick)


// }