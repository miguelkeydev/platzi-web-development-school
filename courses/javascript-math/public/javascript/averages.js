// --------------------------- Functions ---------------------------
function createRandomListContainer(containerToAppend) {
  // --------- HTML Elements ---------
  // Generate Random List Container
  const generateRandomListContainer = document.createElement('div');
  generateRandomListContainer.setAttribute('id', 'generate-random-list-container');
  generateRandomListContainer.classList.add('Flex-center', 'gap-4', 'mt-1');
  // Instructions
  const generateRandomListInstructions = document.createElement('p');
  generateRandomListInstructions.setAttribute('id', 'generate-random-list-instructions');
  generateRandomListInstructions.classList.add('Activity-output', 'w-5/6');
  generateRandomListInstructions.innerText = `Click the button below to generate a list of 25 random numbers between 1 and 20`;
  // Random List Button
  const generateRandomListButton = document.createElement('button');
  generateRandomListButton.setAttribute('id', 'generate-random-list-button');
  generateRandomListButton.classList.add('py-1', 'px-2', 'border-2', 'border-tertiary', 'bg-primary-800', 'text-tertiary', 'rounded-md', 'Clicked__dark');
  generateRandomListButton.innerText = `Generate`;
  // Random List Container
  const randomListContainer = document.createElement('div');
  randomListContainer.setAttribute('id', 'random-list-container');
  randomListContainer.classList.add('hidden', 'Grid-center', 'gap-0', 'w-10/12', 'py-2', 'rounded-lg', 'bg-tertiary');
  // Random List Heading
  const randomListHeading = document.createElement('h2');
  randomListHeading.setAttribute('id', 'random-list-heading');
  randomListHeading.classList.add('Activity-subtitle');
  randomListHeading.innerText = `Random List`;
  // Random List 
  const randomList = document.createElement('p');
  randomList.setAttribute('id', 'random-list');
  randomList.classList.add('Activity-subtitle', 'w-full');

  // --------- HTML Layout ---------
  // Generate Random List container into Averages Activity container
  containerToAppend.appendChild(generateRandomListContainer);
  // Random List Instructions, Button, and Container into Generate Random List container
  generateRandomListContainer.append(generateRandomListInstructions, generateRandomListButton, randomListContainer);
  // Random List Heading and List into Random List Container
  randomListContainer.append(randomListHeading, randomList);
}

function createAveragesOptionsContainer(containerToAppend) {
  // --------- HTML Elements ---------
  // Average Options Container
  const averageOptionsContainer = document.createElement('div');
  averageOptionsContainer.setAttribute('id', 'averages-options-container');
  averageOptionsContainer.classList.add('hidden', 'Flex-wrap');
  // Average Options Heading
  const averageOptionsHeading = document.createElement('h2');
  averageOptionsHeading.classList.add('Activity-subtitle', 'text-sm', 'w-full')
  averageOptionsHeading.innerText = `Choose what do you want to get from the previous list`;

  // --------- HTML Layout ---------
  // Average Options Container into Averages Activity
  containerToAppend.appendChild(averageOptionsContainer);
  // Average Options Heading into Average Options Container
  averageOptionsContainer.appendChild(averageOptionsHeading);
}

function addAveragesOptionsInfo(elementsInfoArray) {
  // Average
  elementsInfoArray.push({
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/average_rp7lx5.png",
    imageAlt: "Average Drawing",
    id: "average-option",
    name: "Average"
  });
  // Median
  elementsInfoArray.push({
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/medianpng_s2bwss.png",
    imageAlt: "Median Drawing",
    id: "median-option",
    name: "Median"
  });
  // Quadratic Mean
  elementsInfoArray.push({
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/quadratic-mean-removebg-preview_csdwfq.png",
    imageAlt: "Quadratic Mean Drawing",
    id: "quadratic-mean-option",
    name: "Quadratic Mean"
  });
  // Moda
  elementsInfoArray.push({
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/moda_mgqiy0.png",
    imageAlt: "Moda Drawing",
    id: "moda-option",
    name: "Moda"
  });
}

function createAveragesResultContainer(containerToAppend) {
  // --------- HTML Elements ---------
  // Averages Result Container
  const averagesResultContainer = document.createElement('div');
  averagesResultContainer.setAttribute('id', 'averages-result-container');
  averagesResultContainer.classList.add('hidden', 'Flex-center', 'flex-row', 'text-lg', 'text-center', 'leading-5', 'w-10/12', 'p-1', 'rounded-md', 'bg-tertiary');
  // Return to Options Button
  const averagesReturnButton = document.createElement('img');
  averagesReturnButton.setAttribute('id', 'averages-return');
  averagesReturnButton.setAttribute('src', 'https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png');
  averagesReturnButton.setAttribute('alt', 'Close Icon');
  averagesReturnButton.classList.add('w-8', 'p-2');
  // Averages Result
  const averagesResultOutput = document.createElement('p');
  averagesResultOutput.setAttribute('id', 'averages-result-output');

  // --------- HTML Layout ---------
  // Averages Result Container into Averages Activity
  containerToAppend.appendChild(averagesResultContainer);
  // Return to Options Button and Averages Result Output into Averages Result Container
  averagesResultContainer.append(averagesReturnButton,averagesResultOutput);
}

function generateRandomList() {
  // Resetting the Numbers Array and Random List
  randomNumbersArray = [];
  randomList.innerHTML = "";

  // Hiding the Random List Instructions and Button. Showing the Random List and the Averages Options containers
  hideShowContainers(generateRandomListInstructions, randomListContainer);
  hideShowContainers(generateRandomListButton, averagesOptionsContainer);

  // Creating random numbers and adding them to the list
  for (let i = 0; i < 24; i++) {
    const element = randomNumber(1, 21);
    randomList.innerText += ` ${element},`;
    randomNumbersArray.push(element);
  }
  // Making the last element look different
  const lastNumber = randomNumber(1, 21);
  randomList.innerText += ` ${lastNumber}`;
  randomNumbersArray.push(lastNumber);

  // Creating the Brackets for the List
  const openBracket = document.createElement('span');
  openBracket.classList.add('text-2xl');
  openBracket.innerText = `[ `;
  randomList.prepend(openBracket);
  const closedBracket = document.createElement('span');
  closedBracket.classList.add('text-2xl');
  closedBracket.innerText = ` ]`;
  randomList.append(closedBracket);
}

function addEventsToAverageOptions(averageOptions, output) {
  averageOptions.forEach(averageOption => averageOption.addEventListener('click', () => {
    // Hiding the Generate List Button
    generateRandomListButton.classList.add('hidden');
    // Hiding the Averages Options Container and Showing the Result Container
    hideShowContainers(averagesOptionsContainer, averagesResultContainer);
    // Changing the "Generate Random List" button text
    generateRandomListButton.innerText = `New list`;
    
    // Validating which Average Option was chosen and doing the calculation
    formulas(averageOption.id, output);
  }));
}

function formulas(averageOption, output) {
  switch (averageOption) {
    // If the user chose Average
    case 'average-option':
      return output.innerText = `The average is ${averageFormula(randomNumbersArray)}`;
    // If the user chose Median
    case 'median-option':
      return output.innerText = `The median is ${medianFormula(randomNumbersArray)}`;
    // If the user chose Quadratic Mean
    case 'quadratic-mean-option':
      return output.innerText = `The quadratic mean is ${quadraticMeanFormula(randomNumbersArray)}`;
    // If the user chose Moda
    case 'moda-option':
      const moda = modaFormula(randomNumbersArray);
      return output.innerText = `The moda is ${moda[0]} and it appeared ${moda[1]} times`;
  }
}

function averageFormula(arrayToCalculate) {
  const sumValues = arrayToCalculate.reduce((a, b) => a + b);
  return (sumValues / arrayToCalculate.length).toFixed(1);
}

function medianFormula(arrayToCalculate) {
  let medianPosition;
  let median;
  
  arrayToCalculate.sort((a, b) => a - b);

  const isOdd = arrayToCalculate.length % 2 !== 0 ? true : false;

  if (isOdd) {
    medianPosition = Math.floor(arrayToCalculate.length / 2);
    median = arrayToCalculate[medianPosition];
  } else {
    medianPosition = [Math.floor((arrayToCalculate.length / 2) - 1), Math.floor(arrayToCalculate.length / 2)];
    median = (arrayToCalculate[medianPosition[0]] + arrayToCalculate[medianPosition[1]]) / 2;
  }
  return median;
}

function quadraticMeanFormula(arrayToCalculate) {
  const quadraticValues = arrayToCalculate.map(a => a * a);
  const quadraticValuesSum = quadraticValues.reduce((a, b) => a + b);
  
  const quadraticValuesSumDivided = quadraticValuesSum / arrayToCalculate.length;

  const quadraticMean = Math.sqrt(quadraticValuesSumDivided).toFixed(1);
  
  return quadraticMean;
}

function modaFormula(arrayToCalculate) {
  let arrayRepeatedElements = {};

  for (let i = 0; i < arrayToCalculate.length; i++) {
    const element = arrayToCalculate[i];

    if (arrayRepeatedElements[element]) {
      arrayRepeatedElements[element] += 1;
    } else {
      arrayRepeatedElements[element] = 1;
    }
  }

  const arrayRepeatedElementsArrays = Object.entries(arrayRepeatedElements);

  const arrayOrganizedByRepetitions = arrayRepeatedElementsArrays.sort((a, b) => b[1] - a[1]);

  const moda = [arrayOrganizedByRepetitions[0][0], arrayOrganizedByRepetitions[0][1]];
  
  return moda;
}

function closeAveragesResult() {
  // Hiding the Result Container and Showing the Averages Options container
  hideShowContainers(averagesResultContainer, averagesOptionsContainer);
  // Showing the New List button 
  generateRandomListButton.classList.remove('hidden');
}

// ------------------------- Procedure -------------------------
const averagesActivityContainer = activitiesContainersElements[2];

// --------------- Random List ---------------
// Creating Random List Container
createRandomListContainer(averagesActivityContainer);

// Random List Elements
const generateRandomListInstructions = document.getElementById('generate-random-list-instructions');
const generateRandomListButton = document.getElementById('generate-random-list-button');
const randomListContainer = document.getElementById('random-list-container');
const randomListHeading = document.getElementById('random-list-heading');
const randomList = document.getElementById('random-list');

// --------------- Averages Options ---------------
// Creating the "Averages Options" container
createAveragesOptionsContainer(averagesActivityContainer);
const averagesOptionsContainer = document.getElementById('averages-options-container');
// Adding the Averages Options information
const averagesOptionsInfo = [];
addAveragesOptionsInfo(averagesOptionsInfo);
// Creating and Storing the "Averages Options" Cards
const averagesOptionsElements = [];
createCardElements(averagesOptionsInfo, averagesOptionsContainer, averagesOptionsElements);

// --------------- Result ---------------
// Creating the "Result" container
createAveragesResultContainer(averagesActivityContainer);

// Result Elements
const averagesResultContainer = document.getElementById('averages-result-container');
const averagesResultOutput = document.getElementById('averages-result-output');
const averagesReturnButton = document.getElementById('averages-return');

let randomNumbersArray = [];
// Adding eventListeners to "Generate Random List" button
generateRandomListButton.addEventListener('click', generateRandomList);

// Adding eventListeners to every Average Option
addEventsToAverageOptions(averagesOptionsElements, averagesResultOutput);

// Adding eventListeners to the Return Button
averagesReturnButton.addEventListener('click', closeAveragesResult);