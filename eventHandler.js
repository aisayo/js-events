// An event handler is a function that will react on an event
// Second argument of addEventListener is an event handler
// Inside the event handler function,logic is used to perform some
// type of dom manipulation. 

// Event handler pattern:
// 1. Select the element being manipulated
// 2. Modify DOM accordingly i.e. append, remove

// Submission event handler pattern:
// 1. Listen for an on submit event
// 2. Prevent default submit behavior
// 3. Manipulate DOM accordingly
// 4. Clear and remove form

// Example:

// Event is an object containing important properties and methods
// 1. Target: The DOM element that triggered event
// 2. Type: What type of event was triggered
// 3. stopPropagation(): stops propagation of the event in the DOM

// Event gets passed to event handler as first parameter

function handleClick(){
    console.log("this is using addEventListener")
    console.log('the event is:', event)
    console.log('the event type is:', event.type)
    console.log('the event target is:', event.target)
}