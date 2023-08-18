console.group('Square');
// Square Perimeter
const squareSides = 4;
const squarePerimeter = squareSides * 4;

// Square Area
const squareArea = squareSides * squareSides;

function calculateSquare(side) {
  return {
    perimeter: side * 4,
    area: side * side
  }
}

console.log({
  squareSides,
  squarePerimeter,
  squareArea,
})

console.groupEnd('Square');

console.group('Triangle');

// Triangle Perimeter
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;

// Triangle Area
const triangleArea = (triangleBase * triangleHeight) / 2;

function calculateTriangleHeight(sides, base) {
  if (sides === base) {
    console.warn("It's not a isosceles triangle");
  }

  return Math.sqrt( (Math.pow(sides, 2) ) - ( (Math.pow(base, 2) ) / 4 ) );
}

function calculateScaleneTriangleHeight(base, side1, side2) {
  const semiPerimeter = (side1 + side2 + base) / 2;

  return Math.floor( (2 / base) * Math.sqrt( semiPerimeter * (semiPerimeter - base) * (semiPerimeter - side1) * (semiPerimeter - side2) ) )
}

function calculateTriangle(side1, side2, base, height) {
  return {
    perimeter: side1 + side2 + base,
    area: (base * height) / 2
  }
}

console.log({
  triangleSide1,
  triangleSide2,
  triangleBase,
  triangleHeight,
  trianglePerimeter,
  triangleArea
})

console.groupEnd('Triangle');

console.group('Circle');

// Circle Radius 
const circleRadius = 3;
const circleDiameter = circleRadius * 2;
const pi = 3.1416

const circleCircumference = circleDiameter * pi;
const circleArea = (circleRadius ** 2) * pi;

function calculateCircle(radius) {
  const diameter = radius * 2;
  const radiusSquared = Math.pow(radius, 2);
  
  return {
    circumference: diameter * pi,
    area: radiusSquared * Math.PI.toFixed(5)
  }
}

console.log({
  pi,
  circleRadius,
  circleDiameter,
  circleCircumference,
  circleArea
});

console.groupEnd('Circle');