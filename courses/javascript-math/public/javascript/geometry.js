const figuresOptionsContainer = document.getElementById('figures-options');
const figuresElements = [];

// Creating HTML elements for the figures
function createFiguresElements(array) {
  for (element of array) {
    // Creating HTML Elements
    const figureContainer = document.createElement('div');
    figureContainer.classList.add('Figure-container');
    figureContainer.setAttribute('id', element.id);
    const figureImage = document.createElement('img');
    figureImage.setAttribute('src', element.image);
    figureImage.setAttribute('alt', element.imageAlt);
    // HTML Layout
    figureContainer.appendChild(figureImage);
    figuresOptionsContainer.appendChild(figureContainer);
  }
}

// Creating HTML Elements for Figures Containers
function createFiguresContainersElements(arrayContainers, arrayElements) {
  let i = 0;
  for (element of arrayElements) {
    // Creating HTML Elements
    const close = document.createElement('img');
    close.classList.add('Activity-close', 'close-container');
    close.setAttribute('src', 'https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png');
    close.setAttribute('alt', 'Close Icon');
    const heading = document.createElement('h3');
    heading.classList.add('Activity-subtitle');
    heading.innerText = element.heading;
    // HTML Layout 
    arrayContainers[i].prepend(close, heading)
    i++;
  }
}

// Hiding Figures Options Container when clicking on any option
function hideFiguresOptions(selectedOption) {
  figuresOptions.classList.add('hidden');
  // Searching for the compatible activity container
  for (let i = 0; i < figuresContainers.length; i++) {
    const figureContainer = figuresContainers[i].id.split('-');
    // Showing compatible container
    if (selectedOption[0] === figureContainer[0]) {
      figuresContainers[i].classList.remove('hidden');
    }
  }
}

// Closing Figure Container when clicking on Close Icon
function closeFiguresContainer(figuresContainers, inputs) {
  for (container of figuresContainers) {
    container.classList.add('hidden');
    figuresOptions.classList.remove('hidden');
  }
  // Resetting Calculations Information
  for (input of inputs) {
    input.value = undefined;
    input.innerHTML = "";
  }
}

function rectangleCalculation(base, height, message) {
  event.preventDefault()
  // Validating if the required information has been given correctly
  if (base > -1 && base < 1 || height > -1 && height < 1) {
    return message.innerText = "You didn't fill out the form!";
  } else if (base < 0 || height < 0) {
    return message.innerText = "You typed negative numbers!";
  } else if (base > 99 || height > 99) {
    return message.innerText = "You can't type larger measurements than 99!";
  } else {
    const perimeter = (base * 2) + (height * 2);
    const area = base * height;
    message.innerHTML = `The rectangle perimeter is ${perimeter} cm and its area is ${area} cm&sup2;`;
  }
}

function triangleCalculation(base, side1, side2, message) {
  event.preventDefault()
  // Validating if the required information has been given correctly
  if (base > -1 && base < 1 || side1 > -1 && side1 < 1 || side2 > -1 && side2 < 1) {
    return message.innerText = "You didn't fill out the form!";
  } else if (base < 0 || side1 < 0 || side2 < 0) {
    return message.innerText = "You typed negative numbers!";
  } else if (base > 99 || side1 > 99 || side2 > 99) {
    return message.innerText = "You can't type larger measurements than 99!";
  } else {
    const perimeter = base + side1 + side2;
    let height;
    let triangleType;

    // Validating if it's an Equilateral, Isosceles, or Scalene Triangle to get its Height
    if (base === side1 && base === side2) {
      // Equilateral Triangle
      height = (Math.sqrt(3) / 2) * base;
      triangleType = "Equilateral";
    } else if (base !== side1 && side1 === side2) {
      // Isosceles Triangle
      height = Math.sqrt((side1 ** 2) - ((base ** 2) / 4));
      triangleType = "Isosceles";
    } else if (base !== side1 && base !== side2) {
      // Scalene Triangle
      const semiPerimeter = perimeter / 2;
      height = (2 / base) * Math.sqrt(semiPerimeter * (semiPerimeter - base) * (semiPerimeter - side1) * (semiPerimeter - side2));
      triangleType = "Scalene";
    }

    // Validating if the Triangle exists
    if (height === 0 || isNaN(height)) {
      return message.innerText = "The triangle you typed doesn't exist";
    }

    const area = (base * height) / 2;
    message.innerHTML = `Your ${triangleType} Triangle has a Perimeter of ${perimeter} cm, a Height of ${height.toFixed(1)} cm, and an Area of ${area.toFixed(1)} cm&sup2;`;
  }
}

function circleCalculation(radius, message) {
  event.preventDefault()
  // Validating if the required information has been given correctly
  if (radius > -1 && radius < 1) {
    return message.innerText = "You didn't fill out the form!";
  } else if (radius < 0) {
    return message.innerText = "You typed negative numbers!";
  } else if (radius > 99) {
    return message.innerText = "You can't type larger measurements than 99!";
  } else {
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;
    const area = (radius ** 2) * Math.PI;
    message.innerHTML = `The diameter of your circle is ${diameter} cm, its circumference is ${circumference.toFixed(1)} cm, and its area is ${area.toFixed(1)} cm&sup2;`;
  }
}

// Adding Figures
// Rectangle Figure
figuresElements.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693446327/Math/rectangle_ravk0h.png",
  imageAlt: "Rectangle Figure",
  id: "rectangle-figure"
})

// Triangle Figure
figuresElements.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693446327/Math/triangle_pnasp2.png",
  imageAlt: "Triangle Figure",
  id: "triangle-figure"
})

// Circle Figure
figuresElements.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693447968/Math/circle_yauo9n.png",
  imageAlt: "Circle Figure",
  id: "circle-figure"
})

createFiguresElements(figuresElements);

const figuresOptions = document.getElementById('figures-choice');
const rectangleFigure = document.getElementById('rectangle-figure');
const triangleFigure = document.getElementById('triangle-figure');
const circleFigure = document.getElementById('circle-figure');
const figuresList = [rectangleFigure, triangleFigure, circleFigure];

const rectangleContainer = document.getElementById('rectangle-container');
const triangleContainer = document.getElementById('triangle-container');
const circleContainer = document.getElementById('circle-container');
const figuresContainers = [rectangleContainer, triangleContainer, circleContainer];

const figuresContainerElements = [];
// Adding Elements for Figures Containers
// Rectangle Container
figuresContainerElements.push({
  id: "rectangle-container",
  heading: "Type the measurements of a Rectangle in cm"
});
// Triangle Container
figuresContainerElements.push({
  id: "triangle-container",
  heading: "Type the measurements of a Triangle in cm"
});
// Circle Container
figuresContainerElements.push({
  id: "circle-container",
  heading: "Type the measurements of a Circle in cm"
});

// Event Listener to make each figure activity appear
figuresList.forEach(figure => {
  figure.addEventListener('click', () => {
    hideFiguresOptions(figure.id.split('-'))
  })
});

createFiguresContainersElements(figuresContainers, figuresContainerElements);

// Rectangle Elements
const rectangleBase = document.getElementById('rectangle-base');
const rectangleHeight = document.getElementById('rectangle-height');
const rectangleSubmit = document.getElementById('rectangle-submit');
const rectangleOutput = document.getElementById('rectangle-output');

// Rectangle Event for Calculation
rectangleSubmit.addEventListener('click', () => {
  rectangleCalculation(rectangleBase.value, rectangleHeight.value, rectangleOutput);
});

// Triangle Elements
const triangleBase = document.getElementById('triangle-base');
const triangleSide1 = document.getElementById('triangle-side1');
const triangleSide2 = document.getElementById('triangle-side2');
const triangleSubmit = document.getElementById('triangle-submit');
const triangleOutput = document.getElementById('triangle-output');

// Triangle Event for Calculation
triangleSubmit.addEventListener('click', () => {
  triangleCalculation(Number(triangleBase.value), Number(triangleSide1.value), Number(triangleSide2.value), triangleOutput);
});

// Circle Elements
const circleRadius = document.getElementById('circle-radius');
const circleSubmit = document.getElementById('circle-submit');
const circleOutput = document.getElementById('circle-output');

// Circle Event for Calculation
circleSubmit.addEventListener('click', () => {
  circleCalculation(Number(circleRadius.value), circleOutput);
});

// Activities Inputs
const calculationsInputs = [rectangleBase, rectangleHeight, rectangleOutput, triangleBase, triangleSide1, triangleSide2, triangleOutput, circleRadius, circleOutput];

// Closing Figure Containers when clicking on Close Icon
const closeCalculation = document.querySelectorAll('.close-container');
closeCalculation.forEach(element => {
  element.addEventListener('click', () => {
    closeFiguresContainer(figuresContainers, calculationsInputs);
  });
});