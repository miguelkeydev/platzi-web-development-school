// Defining objects with their amounts(wallet) and importance(value)
const currencies = [{
    name: 'Dollar',
    wallet: 50,
    value: 100
  },
  {
    name: 'Pound',
    wallet: 35,
    value: 127
  },
  {
    name: 'Euro',
    wallet: 62,
    value: 109
  },
  {
    name: 'Canadian Dollar',
    wallet: 80,
    value: 86
}];

function weighedAverageFormula(obj) {
  // Multiplying every amount by its importance
  const amountAndValue = obj.map(a => a.wallet * a.value);
  // Adding up every amount multiplied by its importance
  const sumAmountAndValue = amountAndValue.reduce((a, b) => a + b);
  // Adding up all currencies' values
  const values = obj.map(a => a.value);
  const sumValues = values.reduce((a, b) => a + b);

  // Making the final division to get the Weighed Average
  return sumAmountAndValue / sumValues;
}