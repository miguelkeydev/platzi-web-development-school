const averagesInstructions = document.getElementById('averages-instructions');
const randomListHeading = document.getElementById('random-list-heading');
const randomList = document.getElementById('random-list');
const generateListButton = document.getElementById('generate-list');
let randomArray = [];
const averagesOptionsContainer = document.getElementById('averages-options-container');
const averagesList = [];

function createRandomList() {
  // Setting the array and random list blank
  randomArray = [];
  randomList.innerHTML = "";
  // Hiding the instructions, button, and result
  averagesInstructions.classList.add('hidden');
  generateListButton.classList.add('hidden');
  averagesResultContainer.classList.add('hidden');
  // Making the random list heading, random list and averages options appear
  randomListHeading.classList.remove('hidden');
  randomList.classList.remove('hidden');
  averagesOptionsContainer.classList.remove('hidden');
  averagesOptionsContainer.classList.add('flex');
  // Open Bracket
  const openBracket = document.createElement('span');
  openBracket.classList.add('text-2xl');
  openBracket.innerHTML = "[";
  randomList.append(openBracket);

  // Creating random numbers and adding them to the list
  for (let i = 0; i < 24; i++) {
    const element = randomNumber(1, 21);
    randomList.innerHTML += ` ${element},`;
    randomArray.push(element);
  }
  // Making the last element look different
  const lastNumber = randomNumber(1, 21);
  randomList.innerHTML += ` ${lastNumber} `;
  randomArray.push(lastNumber);
  
  // Closed Bracket
  const closedBracket = document.createElement('span');
  closedBracket.classList.add('text-2xl');
  closedBracket.innerHTML = "]";
  randomList.append(closedBracket);
  return
}

function averageFormula(array) {
  const sumValues = array.reduce((a, b) => a + b);
  return (sumValues / array.length).toFixed(1);
}

function medianFormula(array) {
  let medianPosition;
  let median;
  
  array.sort((a, b) => a - b);

  const isOdd = array.length % 2 !== 0 ? true : false;

  if (isOdd) {
    medianPosition = Math.floor(array.length / 2);
    median = array[medianPosition];
  } else {
    medianPosition = [Math.floor((array.length / 2) - 1), Math.floor(array.length / 2)];
    median = (array[medianPosition[0]] + array[medianPosition[1]]) / 2;
  }
  return median;
}

function quadraticMeanFormula(array) {
  const quadraticValues = array.map(a => a * a);
  const quadraticValuesSum = quadraticValues.reduce((a, b) => a + b);
  
  const quadraticValuesSumDivided = quadraticValuesSum / array.length;

  const quadraticMean = Math.sqrt(quadraticValuesSumDivided).toFixed(1);
  
  return quadraticMean;
}

function modaFormula(array) {
  let arrayRepeatedElements = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

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

function formulas(average, array, output) {
  // Hiding the New List Button and Averages Options Container
  generateListButton.classList.add('hidden');
  averagesOptionsContainer.classList.add('hidden');
  // Making the return button and result paragraph appear
  averagesReturn.classList.remove('hidden');
  averagesResultContainer.classList.remove('hidden');
  // Changing the button text
  generateListButton.innerText = "New list";

  switch (average) {
    // If the user chose Average
    case 'average':
      return output.innerHTML = `The average is ${averageFormula(array)}`
    // If the user chose Median
    case 'median':
      return output.innerHTML = `The median is ${medianFormula(array)}`
    // If the user chose Quadratic Mean
    case 'quadratic-mean':
      return output.innerHTML = `The quadratic mean is ${quadraticMeanFormula(array)}`
    // If the user chose Moda
    case 'moda':
      const moda = modaFormula(array);
      return output.innerHTML = `The moda is ${moda[0]} and it appeared ${moda[1]} times`
  }
}

function returnToOptions() {
  // Hiding the Result Container
  averagesResultContainer.classList.add('hidden');
  // Making the New List button and Averages Options Containear appear
  generateListButton.classList.remove('hidden');
  averagesOptionsContainer.classList.remove('hidden');
}

generateListButton.addEventListener('click', createRandomList);

// Adding Averages Cards
// Average
averagesList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/average_rp7lx5.png",
  imageAlt: "Average Drawing",
  id: "average",
  name: "Average"
});
// Median
averagesList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/medianpng_s2bwss.png",
  imageAlt: "Median Drawing",
  id: "median",
  name: "Median"
});
// Quadratic Mean
averagesList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/quadratic-mean-removebg-preview_csdwfq.png",
  imageAlt: "Quadratic Mean Drawing",
  id: "quadratic-mean",
  name: "Quadratic Mean"
});
// Moda
averagesList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693610921/Math/moda_mgqiy0.png",
  imageAlt: "Moda",
  id: "moda",
  name: "Moda"
});

createCardElements(averagesList, averagesOptionsContainer);

const average = document.getElementById('average');
const median = document.getElementById('median');
const quadraticMean = document.getElementById('quadratic-mean');
const moda = document.getElementById('moda');
const averages = [average, median, quadraticMean, moda]
const averagesReturn = document.getElementById('averages-return');
const averagesResultContainer = document.getElementById('averages-result-container');
const averagesResultMessage = document.getElementById('averages-result-message');

averages.forEach(average => average.addEventListener('click', () => {
  formulas(average.id, randomArray, averagesResultMessage);
}));

averagesReturn.addEventListener('click', returnToOptions);