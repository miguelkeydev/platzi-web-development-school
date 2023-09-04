const activitiesNavbarContainer = document.getElementById("activities-navbar-container");
const activitiesNavbar = document.getElementById("activities-navbar");
const activitiesNavbarElements = [];

const cardsContainer = document.getElementById("cards-container");
const cardsElements = [];

function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

// Creating HTML card container elements
function createCardElements(array, containerToAppend) {
  for (element of array) {
    // Creating HTML Elements
    const container = document.createElement('div');
    container.classList.add('Card-container');
    container.setAttribute('id', element.id);
    const figureImage = document.createElement('img');
    figureImage.setAttribute('src', element.image);
    figureImage.setAttribute('alt', element.imageAlt);
    const figureName = document.createElement('p');
    figureName.classList.add('text-center', 'leading-4');
    figureName.innerText = element.name;
    // HTML Layout
    container.append(figureImage, figureName);
    containerToAppend.appendChild(container);
  }
}

// Creating Navbar Elements
function createActivityNavbarElements() {
  for (element of activitiesNavbarElements) {
    // Creating the HTML elements
    const navbarElement = document.createElement('div');
    navbarElement.classList.add('Navbar-element');
    navbarElement.setAttribute('id', element.id);
    const navbarElementImage = document.createElement('img');
    navbarElementImage.classList.add('h-full');
    navbarElementImage.setAttribute('src', element.image);
    navbarElementImage.setAttribute('alt', element.imageAlt);
    // HTML Layout
    navbarElement.appendChild(navbarElementImage);
    activitiesNavbar.appendChild(navbarElement);
  }
}

// Creating Activity Cards
function createActivityCards() {
  for (activity of cardsElements) {
    // Creating the HTML elements
    const activityCard = document.createElement('div');
    activityCard.classList.add('Activity-card');
    activityCard.setAttribute('id', activity.id);
    const activityImage = document.createElement('img');
    activityImage.classList.add('w-5/6');
    activityImage.setAttribute('src', activity.image);
    activityImage.setAttribute('alt', activity.imageAlt);
    const activityName = document.createElement('p');
    activityName.classList.add('Activity-paragraph');
    activityName.innerText = activity.name;
    // HTML Layout
    activityCard.append(activityImage, activityName);
    cardsContainer.appendChild(activityCard);
  }
}

// Hiding Cards Container when clicking on any activity card
function hideCardsContainer(activity) {
  cardsContainer.classList.add('hidden');
  // Showing Navbar
  activitiesNavbarContainer.classList.remove('hidden');

  // Searching the compatible navbar element and activity container
  for (let i = 0; i < optionsList.length; i++) {
    const activityOption = optionsList[i].id.split('-');
    if (activity[0] === activityOption[0]) {
      // Adding "focused" border to the compatible navbar element
      optionsList[i].classList.add('Navbar-element-border');
      // Making Geometry Container appear
      activitiesContainers[i].classList.remove('hidden');
    }
    // Moving the scrollbar according to the navbar element
    if (activity[0] === 'cdt') {
      activitiesNavbarContainer.scrollLeft = 100;
    } else if (activity[0] === 'geometry') {
      activitiesNavbarContainer.scrollLeft = 0;
    }
  }
}

// Navbar Elements Behavior
function navbarBehavior(element) {
  // Hiding Navbar when clicking on the selected element
  if (element.classList.contains('Navbar-element-border')) {
    // Removing "focused" border
    element.classList.remove('Navbar-element-border');
    // Showing cards container and hiding navbar
    cardsContainer.classList.remove('hidden');
    activitiesNavbarContainer.classList.add('hidden');
    activitiesContainers.forEach(container => {
      container.classList.add('hidden');
    })
  } else { // Removing "focused" border for every element
    optionsList.forEach(option => {
      option.classList.remove('Navbar-element-border');
    })
    // Adding "focused" border to the selected element
    element.classList.add('Navbar-element-border');
    // Hiding all activities containers
    activitiesContainers.forEach(container => {
      container.classList.add('hidden');
    })
    // Matching the selected option with its activity container
    const option = element.id.split('-')[0];
    for (let i = 0; i < activitiesContainers.length; i++) {
      const activityContainer = activitiesContainers[i].id.split('-')[0];
      if (option === activityContainer) {
        activitiesContainers[i].classList.remove('hidden');
      }
    }
  }
  // Moving the scrollbar according to the navbar element
  if (element.id.split('-')[0] === 'cdt') {
    activitiesNavbarContainer.scrollLeft = 100;
  } else if (element.id.split('-')[0] === 'geometry') {
    activitiesNavbarContainer.scrollLeft = 0;
  }
}

// Adding Navbar Options and Activity Cards
// Geometry Option
activitiesNavbarElements.push({
  id: "geometry-option",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995052/Math/geometry_b5mawp.png",
  imageAlt: "Geometry Image"
})
// Percentages Option
activitiesNavbarElements.push({
  id: "percentages-option",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995980/Math/percentages_easmud.png",
  imageAlt: "Percentages Image"
})
// Types of Average Option
activitiesNavbarElements.push({
  id: "averages-option",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262956/Math/statistics_odfqwt.png",
  imageAlt: "Averages Image"
})
// Salaries Option
activitiesNavbarElements.push({
  id: "salaries-option",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262883/Math/salaries_ntvo6n.png",
  imageAlt: "Salaries Image"
})
// CDT Simulator Option
activitiesNavbarElements.push({
  id: "cdt-option",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693263368/Math/cdt_r4c4nf.png",
  imageAlt: "CDT Image"
})

// Percentages Card
cardsElements.push({
  id: "geometry-card",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995052/Math/geometry_b5mawp.png",
  imageAlt: "Geometry Image",
  name: "Geometry"
})
// Percentages Card
cardsElements.push({
  id: "percentages-card",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995980/Math/percentages_easmud.png",
  imageAlt: "Percentages Image",
  name: "Percentages"
})
// Types of Average Card
cardsElements.push({
  id: "averages-card",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262956/Math/statistics_odfqwt.png",
  imageAlt: "Average Image",
  name: "Types of Average"
})
// Salaries Project Card
cardsElements.push({
  id: "salaries-card",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262883/Math/salaries_ntvo6n.png",
  imageAlt: "Average Image",
  name: "Salaries"
})
// CDT Simulator Card
cardsElements.push({
  id: "cdt-card",
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693263368/Math/cdt_r4c4nf.png",
  imageAlt: "CDT Image",
  name: "CDT Simulator"
})

// Creating Navbar Options and Activity Cards in HTML
createActivityCards();
createActivityNavbarElements();

// Declaring variables for HTML Activities Navbar Options Elements
const geometryOption = document.getElementById("geometry-option");
const percentagesOption = document.getElementById("percentages-option");
const averagesOption = document.getElementById("averages-option");
const salariesOption = document.getElementById("salaries-option");
const cdtOption = document.getElementById("cdt-option");
const optionsList = [geometryOption, percentagesOption, averagesOption, salariesOption, cdtOption];
// Declaring variables for HTML Activities Card Elements
const geometryCard = document.getElementById("geometry-card");
const percentagesCard = document.getElementById("percentages-card");
const averagesCard = document.getElementById("averages-card");
const salariesCard = document.getElementById("salaries-card");
const cdtCard = document.getElementById("cdt-card");
const cardsList = [geometryCard, percentagesCard, averagesCard, salariesCard, cdtCard];

const geometryContainer = document.getElementById('geometry-container');
const percentagesContainer = document.getElementById('percentages-container');
const averagesContainer = document.getElementById('averages-container');
const salariesContainer = document.getElementById('salaries-container');
const cdtContainer = document.getElementById('cdt-container');
const activitiesContainers = [geometryContainer, percentagesContainer, averagesContainer, salariesContainer, cdtContainer]

// Adding event listeners to every activity card element
cardsList.forEach(card => card.addEventListener('click', () => {
  hideCardsContainer(card.id.split('-'));
}));
// Adding event listeners to every activity option element of the navbar
optionsList.forEach(option => option.addEventListener('click', () => {
  navbarBehavior(option);
}));