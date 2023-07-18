// Implicit Coercion
let a = 4 + "7"; // 47 String
let b = 4 * "7"; // 28 Number

// Explicit Coercion

let c = 19;
let d = c + " years old";
let e = String(c); // Using the 'String' method

typeof c // Number
typeof e // String

let f = Number(e); //Using the 'Number' method

typeof f // Number