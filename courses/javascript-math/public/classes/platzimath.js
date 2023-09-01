const PlatziMath = {};

PlatziMath.averageFormula = function averageFormula(array) {
  const sumValues = array.reduce((accumulatedValue, newValue) => accumulatedValue + newValue);
  const average = sumValues / array.length;

  return "The average is: " + average;
};

PlatziMath.medianFormula = function medianFormula(array) {
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
};

PlatziMath.modaFormula = function modaFormula(array) {
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
};

PlatziMath.weighedAverageFormula = function weighedAverageFormula(obj) {
  // Multiplying every amount by its importance
  const amountAndValue = obj.map(a => a.wallet * a.value);
  // Adding up every amount multiplied by its importance
  const sumAmountAndValue = amountAndValue.reduce((a, b) => a + b);
  // Adding up all currencies' values
  const values = obj.map(a => a.value);
  const sumValues = values.reduce((a, b) => a + b);

  // Making the final division to get the Weighed Average
  return sumAmountAndValue / sumValues;
};

PlatziMath.quadraticMeanFormula = function quadraticMean(array) {
  const quadraticValues = array.map(a => a * a);
  const quadraticValuesSum = quadraticValues.reduce((a, b) => a + b);
  
  const quadraticValuesSumDivided = quadraticValuesSum / array.length;

  const quadraticMean = Math.sqrt(quadraticValuesSumDivided).toFixed(2);
  
  return "The quadratic mean is: " + quadraticMean;
};