const input1 = document.querySelector('#calculate-1');
const input2 = document.querySelector('#calculate-2');
const button = document.querySelector('#calculate-button');
const resultContainer = document.querySelector('#result-container');

function inputOnChange() {
	console.log("The input has changed!");
}

function btnOnClick() {
  let sumResult = Number(input1.value) + Number(input2.value);
  
  let resultParagraph = document.createElement('p');
  resultParagraph.innerHTML = `${input1.value} + ${input2.value} = ${sumResult}`;
  resultContainer.append(resultParagraph);
}