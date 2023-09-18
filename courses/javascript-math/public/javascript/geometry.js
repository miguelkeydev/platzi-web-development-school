// --------------------------- Functions ---------------------------
function createFiguresChoiceContainer(containerToAppend) {
  // --------- HTML Elements ---------
  // Figures Choice container
  const figuresChoiceContainer = document.createElement('div');
  figuresChoiceContainer.setAttribute('id', 'figures-choice');
  figuresChoiceContainer.classList.add('Grid-center');
  // Figures Choice subtitle
  const figuresChoiceSubtitle = document.createElement('h2');
  figuresChoiceSubtitle.classList.add('Activity-subtitle');
  figuresChoiceSubtitle.innerText = `Choose a Figure`;
  // Figures Options container
  const figuresOptionsContainer = document.createElement('div');
  figuresOptionsContainer.setAttribute('id', 'figures-options');
  figuresOptionsContainer.classList.add('flex', 'flex-wrap', 'justify-around', 'gap-y-4')

  // --------- HTML Layout ---------
  // Figures Choice container into Geometry Activity container
  containerToAppend.appendChild(figuresChoiceContainer);
  // Figures Choice subtitle and Figures Options container into Figures Choice container
  figuresChoiceContainer.append(figuresChoiceSubtitle, figuresOptionsContainer)
}

function addFiguresOptionsInfo(elementsInfoArray) {
  // Rectangle Figure Option
  elementsInfoArray.push({
    id: "rectangle-figure",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693609233/Math/rectangle_ntaxsd.png",
    imageAlt: "Rectangle Figure",
    name: ""
  });
  // Triangle Figure Option
  elementsInfoArray.push({
    id: "triangle-figure",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693446327/Math/triangle_pnasp2.png",
    imageAlt: "Triangle Figure",
    name: ""
  });
  // Circle Figure Option
  elementsInfoArray.push({
    id: "circle-figure",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693447968/Math/circle_yauo9n.png",
    imageAlt: "Circle Figure",
    name: ""
  });
}

function createFiguresActivities(elementsInfoArray, arrayToAppend, figuresActivitiesArray, figuresFormsArray, outputsArray) {
  // Creating Geometry Activities container
  const geometryActivitiesContainer = document.createElement('div');
  geometryActivitiesContainer.setAttribute('id', 'geometry-activities');
  geometryActivitiesContainer.classList.add('Grid-center');

  // Geometry Activities container into Geometry Activity
  arrayToAppend.appendChild(geometryActivitiesContainer);

  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    // Figure Activity container
    const figureActivityContainer = document.createElement('div');
    figureActivityContainer.setAttribute('id', `${element}-activity`);
    figureActivityContainer.classList.add('hidden', 'Activity-container__geometry');
    // Figure Activity heading
    const figureActivityHeading = document.createElement('h2');
    figureActivityHeading.classList.add('Activity-subtitle');
    figureActivityHeading.innerText = `Type the measurements of a ${element} in cm`;
    // Figure Activity form
    const figureActivityForm = document.createElement('form');
    figureActivityForm.setAttribute('id', `${element}-form`);
    figureActivityForm.setAttribute('autocomplete', 'off');
    figureActivityForm.classList.add('Grid-center');
    // Figure Activity output
    const figureActivityOutput = document.createElement('p');
    figureActivityOutput.setAttribute('id', `${element}-output`);
    figureActivityOutput.classList.add('Activity-output');
    // Figure Activity close button
    const figureActivityClose = document.createElement('img');
    figureActivityClose.classList.add('Close-button', 'figures-activities-close');
    figureActivityClose.setAttribute('src', 'https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png');
    figureActivityClose.setAttribute('alt', 'Close Icon');

    // --------- HTML Layout ---------
    // Figure Activity container into Geometry Activity container
    geometryActivitiesContainer.appendChild(figureActivityContainer);
    // Heading, Form, Ouput, and Close Button into Figure Activity container
    figureActivityContainer.append(figureActivityHeading, figureActivityForm, figureActivityOutput, figureActivityClose);

    // Storing every Figure Activity, Figure Form, and Output in an array
    figuresActivitiesArray.push(figureActivityContainer);
    figuresFormsArray.push(figureActivityForm);
    outputsArray.push(figureActivityOutput);
  }
}

function addEventsToFiguresOptions(figureOptionsArray, containerToHide, containerToShowArray) {
  figureOptionsArray.forEach(figureOption => {
    figureOption.addEventListener('click', () => {
      // Hiding the "Figure Options" container
      containerToHide.classList.add('hidden');

      // Searching and Showing the compatible activity container
      for (let i = 0; i < containerToShowArray.length; i++) {
        if (figureOption.id.split('-')[0] === containerToShowArray[i].id.split('-')[0]) {
          containerToShowArray[i].classList.remove('hidden');
        }
      }
    });
  });
}

function createRectangleFormInputs() {
  // --------- HTML Elements ---------
  // Base Input
  const baseInput = document.createElement('input');
  baseInput.setAttribute('id', 'rectangle-base');
  baseInput.setAttribute('type', 'number');
  baseInput.setAttribute('placeholder', 'Base');
  baseInput.classList.add('Activity-input');
  // Height Input
  const heightInput = document.createElement('input');
  heightInput.setAttribute('id', 'rectangle-height');
  heightInput.setAttribute('type', 'number');
  heightInput.setAttribute('placeholder', 'Height');
  heightInput.classList.add('Activity-input');
  // Submit Button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('id', 'rectangle-submit');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('Activity-submit');

  // --------- HTML Layout ---------
  figuresActivitiesForms[0].append(baseInput, heightInput, submitButton);

  // Adding the Inputs and to an array
  figuresActivitiesInputs.push(baseInput, heightInput);
}

function addEventsToRectangleSubmit(submitButton, base, height, output) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    rectangleCalculation(base.value, height.value, output);
  });
}

function rectangleCalculation(base, height, output) {
  // Validating if the required information has been given correctly
  switch (true) {
    case base === `` || height === ``:
      return output.innerText = `You didn't fill out the form!`;
    
    case base < 0 || height < 0:
      return output.innerText = "You typed negative numbers!";
    
    case base > 99 || height > 99:
      return output.innerText = `You can't type larger measurements than 99`;
    
    default:
      const perimeter = (base * 2) + (height * 2);
      const area = base * height;
      return output.innerHTML = `The rectangle perimeter is ${perimeter.toFixed(1)} cm and its area is ${area.toFixed(1)} cm&sup2;`;
  }
}

function createTriangleFormInputs() {
  // --------- HTML Elements ---------
  // Base Input
  const baseInput = document.createElement('input');
  baseInput.setAttribute('id', 'triangle-base');
  baseInput.setAttribute('type', 'number');
  baseInput.setAttribute('placeholder', 'Base');
  baseInput.classList.add('Activity-input');
  // Side 1
  const side1Input = document.createElement('input');
  side1Input.setAttribute('id', 'triangle-side1');
  side1Input.setAttribute('type', 'number');
  side1Input.setAttribute('placeholder', 'Side 1');
  side1Input.classList.add('Activity-input');
  // Side 2
  const side2Input = document.createElement('input');
  side2Input.setAttribute('id', 'triangle-side2');
  side2Input.setAttribute('type', 'number');
  side2Input.setAttribute('placeholder', 'Side 2');
  side2Input.classList.add('Activity-input');
  // Submit Button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('id', 'triangle-submit');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('Activity-submit');

  // --------- HTML Layout ---------
  figuresActivitiesForms[1].append(baseInput, side1Input, side2Input, submitButton);

  // Adding the Inputs to an array
  figuresActivitiesInputs.push(baseInput, side1Input, side2Input);
}

function addEventsToTriangleSubmit(submitButton, base, side1, side2, output) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    triangleCalculation(Number(base.value), Number(side1.value), Number(side2.value), output);
  });
}

function triangleCalculation(base, side1, side2, output) {
  // Validating if the required information has been given correctly
  switch (true) {
    case base === 0 || side1 === 0 || side2 === 0:
      return output.innerText = `You didn't fill out the form!`;

    case base < 0 || side1 < 0 || side2 < 0:
      return output.innerText = `You typed negative numbers!`;
    
    case base > 99 || side1 > 99 || side2 > 99:
      return output.innerText = `You can't type larger measurements than 99`;
    
    // Doing the calculation
    default:
      const perimeter = base + side1 + side2;
      let height;
      let triangleType;

      // Validating if it's an Equilateral, Isosceles, or Scalene Triangle to get its Height
      switch (true) {
        // Equilateral Triangle
        case base === side1 && base === side2:
          height = (Math.sqrt(3) / 2) * base;
          triangleType = "Equilateral";
          break;
        // Isosceles Triangle
        case base !== side1 && side1 === side2:
          height = Math.sqrt((side1 ** 2) - ((base ** 2) / 4));
          triangleType = "Isosceles";
          break;
        // Scalene Triangle
        case base !== side1 && base !== side2:
          const semiPerimeter = perimeter / 2;
          height = (2 / base) * Math.sqrt(semiPerimeter * (semiPerimeter - base) * (semiPerimeter - side1) * (semiPerimeter - side2));
          triangleType = "Scalene";
          break;
      }

      // Validating if the Triangle exists
      if (height === 0 || isNaN(height)) {
        return output.innerText = "The triangle you typed doesn't exist";
      }
    
      const area = (base * height) / 2;
      return output.innerHTML = `Your ${triangleType} Triangle has a Perimeter of ${perimeter.toFixed(1)} cm, a Height of ${height.toFixed(1)} cm, and an Area of ${area.toFixed(1)} cm&sup2;`;
  }
}

function createcircleFormInputs() {
  // --------- HTML Elements ---------
  // Radius Input
  const radiusInput = document.createElement('input');
  radiusInput.setAttribute('id', 'circle-radius');
  radiusInput.setAttribute('type', 'number');
  radiusInput.setAttribute('placeholder', 'Radius');
  radiusInput.classList.add('Activity-input');
  // Submit Button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('id', 'circle-submit');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('Activity-submit');

  // --------- HTML Layout ---------
  figuresActivitiesForms[2].append(radiusInput, submitButton);

  // Adding the Inputs to an array
  figuresActivitiesInputs.push(radiusInput);
}

function addEventsToCircleSubmit(submitButton, radius, output) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    circleCalculation(Number(radius.value), output);
  });
}

function circleCalculation(radius, output) {
  // Validating if the required information has been given correctly
  switch (true) {
    case radius === 0:
      return output.innerText = "You didn't fill out the form!";
    
    case radius < 0:
      return output.innerText = "You typed negative numbers!";
    
    case radius > 99:
      return output.innerText = "You can't type larger measurements than 99";
    
    default:
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;
    const area = (radius ** 2) * Math.PI;

    return output.innerHTML = `The diameter of your circle is ${diameter} cm, its circumference is ${circumference.toFixed(1)} cm, and its area is ${area.toFixed(1)} cm&sup2;`;
  }
}

// Could be used for several Close Buttons
function addEventsToCloseFiguresActivities(closeButtonsArray, containerToHideArray, containerToShow, activitiesInputs, activitiesOutputs) {
  closeButtonsArray.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      // Hiding every Figure Activity container
      containerToHideArray.forEach(figureActivity => figureActivity.classList.add('hidden'));

      // Showing the Figures Options container
      containerToShow.classList.remove('hidden');
    
      // Resetting Calculations Information
      for (input of activitiesInputs) {
        input.value = ``;
      }

      // Resetting Calculations Outputs
      for (output of activitiesOutputs) {
        output.innerText = ``;
      }
    });
  });
}

// ------------------------- Procedure -------------------------
const geometryActivityContainer = activitiesContainersElements[0];

// --------------- Figures Choice ---------------
// Creating the "Figures Choice" container
createFiguresChoiceContainer(geometryActivityContainer);
const figuresChoiceContainer = document.getElementById('figures-choice');
const figuresOptionsContainer = document.getElementById('figures-options');
// Adding the Figures Options information
const figuresOptionsInfo = [];
addFiguresOptionsInfo(figuresOptionsInfo);
// Creating and Storing the Figures Options Cards
const figuresOptionsElements = [];
createCardElements(figuresOptionsInfo, figuresOptionsContainer, figuresOptionsElements);

// --------------- Figures Containers ---------------
// Adding the Figures containers information
const figuresActivitiesInfo = ['rectangle', 'triangle', 'circle'];
// Creating and Storing the Figures Containers, Figures Forms and Outputs
const figuresActivitiesElements = [];
const figuresActivitiesForms = [];
const figuresActivitiesOutputs = [];
createFiguresActivities(figuresActivitiesInfo, geometryActivityContainer, figuresActivitiesElements, figuresActivitiesForms, figuresActivitiesOutputs);

// Figures Activities Inputs
const figuresActivitiesInputs = [];

// Adding eventListeners to every Figure Option
addEventsToFiguresOptions(figuresOptionsElements, figuresChoiceContainer, figuresActivitiesElements);

// Adding eventListeners to every Close Button
const figuresActivitiesCloseButtons = document.querySelectorAll('.figures-activities-close');
addEventsToCloseFiguresActivities(figuresActivitiesCloseButtons, figuresActivitiesElements, figuresChoiceContainer, figuresActivitiesInputs, figuresActivitiesOutputs);

// --------------- Rectangle Activity ---------------
createRectangleFormInputs();

// Form Elements
const rectangleBase = document.getElementById('rectangle-base');
const rectangleHeight = document.getElementById('rectangle-height');
const rectangleSubmit = document.getElementById('rectangle-submit');
const rectangleOutput = document.getElementById('rectangle-output');

// Adding eventListeners to Submit Button
addEventsToRectangleSubmit(rectangleSubmit, rectangleBase, rectangleHeight, rectangleOutput);

// --------------- Triangle Activity ---------------
createTriangleFormInputs();

// Form Elements
const triangleBase = document.getElementById('triangle-base');
const triangleSide1 = document.getElementById('triangle-side1');
const triangleSide2 = document.getElementById('triangle-side2');
const triangleSubmit = document.getElementById('triangle-submit');
const triangleOutput = document.getElementById('triangle-output');

// Adding eventListeners to Submit Button
addEventsToTriangleSubmit(triangleSubmit, triangleBase, triangleSide1, triangleSide2, triangleOutput);

// --------------- Circle Activity ---------------
createcircleFormInputs();

// Form Elements
const circleRadius = document.getElementById('circle-radius');
const circleSubmit = document.getElementById('circle-submit');
const circleOutput = document.getElementById('circle-output');

// Adding eventListeners to Submit Button
addEventsToCircleSubmit(circleSubmit, circleRadius, circleOutput);