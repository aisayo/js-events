// Propagation is split in 2 models: Bubbling and Capturing

// Bubbling means that the event propagates from the item 
// that was clicked (the child) up to all its parent tree, 
// starting from the nearest one.


// Capturing is the opposite: the outer event handlers are 
// fired before the more specific handler

// By default all events bubble


// You can try this. Just copy and paste into index.js
// Then click on the button while console is open
// You can read the logs in order of bubbling.

let form = document.getElementById("pokemon-form-container")
let bttn = document.getElementById("add-bttn")
let p = document.getElementById("p-tag")

bttn.addEventListener('click', (e) => {
  console.log('bttn')
  // e.stopPropagation() // This will stop the propagating from happening
})
form.addEventListener('click', () => {console.log('form')})
p.addEventListener('click', () => {console.log('p')})