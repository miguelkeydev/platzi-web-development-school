const clicksPerSecond = [17, 12, 11, 9, 5, 12, 8, 14, 15, 13, 8];

function quadraticMean(array) {
  const quadraticValues = array.map(a => a * a);
  const quadraticValuesSum = quadraticValues.reduce((a, b) => a + b);
  
  const quadraticValuesSumDivided = quadraticValuesSum / array.length;

  const quadraticMean = Math.sqrt(quadraticValuesSumDivided).toFixed(2);
  
  return "The quadratic mean is: " + quadraticMean;
}