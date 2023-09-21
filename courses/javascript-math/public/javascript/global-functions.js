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
function hideShowContainers(containerToHide, containerToShow) {
  containerToHide.classList.add('hidden');
  containerToShow.classList.remove('hidden');
}

// Creates Cards Elements
function createCardElements(cardsInfoArray, containerToAppend, cardsArray) {
  for (cardInfo of cardsInfoArray) {
    // --------- HTML Elements ---------
    // Card Container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('Card-container');
    cardContainer.setAttribute('id', cardInfo.id);
    // Card Image
    const image = document.createElement('img');
    image.setAttribute('src', cardInfo.image);
    image.setAttribute('alt', cardInfo.imageAlt);
    // Card Name
    const name = document.createElement('p');
    name.classList.add('text-center', 'leading-4', 'font-semibold');
    name.innerText = cardInfo.name;

    // --------- HTML Layout ---------
    // Card Container into Cards Container
    containerToAppend.appendChild(cardContainer);
    // Card Image and Name into Card Container
    cardContainer.append(image, name);
    // Storing every Card Container in an array
    cardsArray.push(cardContainer);
  }
}

// Could be used for several Close Buttons
function addEventsToCloseButtons(closeButtonsArray, containerToHideArray, containerToShowArray) {
  closeButtonsArray.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      setTimeout(() => {
        // Hiding the shown container
        containerToHideArray.forEach(containerToHide => {
          if (!containerToHide.classList.contains('hidden')) {
            containerToHide.classList.add('hidden');
          }
        });
  
        // Validating if "containerToShowArray" is an array or not
        if(Array.isArray(containerToShowArray)) {
          // Showing the corresponding container
          containerToShowArray.forEach(containerToShow => {
            if (containerToShow.classList.contains('hidden')) {
              containerToShow.classList.remove('hidden');
            }
          });
        } else {
          // Showing the desired container
          containerToShowArray.classList.remove('hidden');
        }
      }, 75);
    });
  });
}