// Declarative
function firstFunction() {
  return 3;
}

// Expression
let secondFunction = function(a, b) {
	return a + b;
}

secondFunction(3, 18); // Result will be 21

function greetStudents(student) {
  console.log(`Hi ${student}`)
}

greetStudents("Maria Paula") // Hi Maria Paula