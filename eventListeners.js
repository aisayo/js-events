// Event Listeners

// functions that bind a type of event to an element 

// Creating event listeners(there are a few ways, these are the two most common):

//----------------------------------------------------------------------

// HTML-attribute aka 'in-line'

// In-line event handlers begin with `on` then the event type i.e `onClick`
// This is a preffered method if there is not a lot of code
// associated with the event.
// This method of event handling poses issues when multiple
// event handlers are necessary for one element.

// <button onClick="alert('I was clicked!')">Click me!</button>

<button id="click-bttn" onClick="handleInlineClick()">Click me!</button>

function handleInlineClick(){
    console.log("this:", this)
    console.log('the event is:', event)
    console.log('the event type is:', event.type)
    console.log('the event target is:', event.target)
}

//----------------------------------------------------------------------

// addEventListener

// Can be called on element, document and window
// This is the modern way of attaching event listeners

// The syntax to add a handler:
// element.addEventListener(event, handler, [options]);

// Example:

<button id="click-bttn">Click me!</button>

const clickBttn = document.getElementById('click-bttn')
// clickBttn.addEventListener('click', () => {console.log('clicked')})
clickBttn.addEventListener('click', handleClick)

clickBttn.addEventListener("click", () => {
    console.log("arrow function clicked.")
    console.log('this', this); // Window
  });
  
  clickBttn.addEventListener("click", function(){
    console.log("function declaration clicked.");
    console.log('this', this);
  });