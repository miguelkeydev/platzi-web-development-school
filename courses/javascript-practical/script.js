const input1 = document.querySelector('#value-1');
const input2 = document.querySelector('#value-2');
const button = document.querySelector('#calculate');
const result = document.querySelector('#sum-result');
const form = document.querySelector('#form');

const mouseover = document.querySelector('#mouseover');
const randomNumberParagraph = document.querySelector('#random-number');
const tryAgainParagraph = document.querySelector('#try-again');

form.addEventListener('submit', sumValues);

function sumValues(event) {
  console.log({ event });
  event.preventDefault();

  const sumResult = Number(input1.value) + Number(input2.value);
  result.innerHTML = `${input1.value} + ${input2.value} = ${sumResult}`;
}

mouseover.addEventListener('mouseover', mouseoverFunction);
mouseover.addEventListener('mouseout', mouseoutFunction);
window.addEventListener('resize',  function(){
  randomNumberParagraph.innerHTML = Math.random();
});

function mouseoverFunction() {
  const randomNumber = Math.floor(Math.random() * (10 + 10) - 10);
  randomNumberParagraph.innerText = `You got a random number: ${randomNumber}`;
  tryAgainParagraph.innerText = '';
}

function mouseoutFunction() {
  tryAgainParagraph.innerText = 'This happened because you removed the mouse from the first paragraph. Try again!';
}