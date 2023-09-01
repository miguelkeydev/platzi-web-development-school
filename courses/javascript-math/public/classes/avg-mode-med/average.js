let agesArray = [10, 23, 43, 24, 28, 21, 20, 32, 32, 28, 26, 18, 15, 28, 52, 13, 17, 21, 43];

function averageFormula(array) {
  const sumValues = array.reduce((accumulatedValue, newValue) => accumulatedValue + newValue);
  const average = sumValues / array.length;

  return "The average is: " + average;
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

  return "The median is: " + median;
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
  
  return "The moda is: " + moda[0] + " and it appeared " + moda[1] + " times";
}