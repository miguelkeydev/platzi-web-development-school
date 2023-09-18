// ------------------------ Global Functions ------------------------
// Returns a Random Number
function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

// Returns "true" if it's a float number
function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

// Hides the first argument and shows the second one
function hideShowContainers(toHide, toShow) {
  toHide.classList.add('hidden');
  toShow.classList.remove('hidden');
}

// Creates Cards Elements
function createCardElements(array, containerToAppend, cardsArray) {
  for (element of array) {
    // --------- HTML Elements ---------
    // Card Container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('Card-container');
    cardContainer.setAttribute('id', element.id);
    // Card Image
    const image = document.createElement('img');
    image.setAttribute('src', element.image);
    image.setAttribute('alt', element.imageAlt);
    // Card Name
    const name = document.createElement('p');
    name.classList.add('text-center', 'leading-4', 'font-semibold');
    name.innerText = element.name;

    // --------- HTML Layout ---------
    // Card Container into Cards Container
    containerToAppend.appendChild(cardContainer);
    // Card Image and Name into Card Container
    cardContainer.append(image, name);
    // Storing every Card Container in an array
    cardsArray.push(cardContainer);
  }
}