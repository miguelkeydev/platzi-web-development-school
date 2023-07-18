Boolean(); // false

Boolean(0); // false
Boolean(NaN); // false

Boolean(null); // false
Boolean(undefined); // false

Boolean(""); // false


Boolean(1); // true

Boolean("Hola"); // true

Boolean([]); // true

Boolean(function(){}); // true