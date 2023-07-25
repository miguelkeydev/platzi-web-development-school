let components = ["monitor", "headphones", "mouse", "keyboard", "speakers"];

// Adding Elements to the end
let moreComponents = components.push("webcam", "microphone", "cpu");

// Removing the last element
let removeComponents = components.pop("cpu") // cpu
removeComponents = components.pop("mouse") // microphone

// Adding Elements to the beginning
let firstComponents = components.unshift("graphic card");

// Removing the first element
let removeFirstComponents = components.shift("graphic card");

// Position
let position = components.indexOf("mouse")