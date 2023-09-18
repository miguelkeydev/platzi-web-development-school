// --------------------------- Functions ---------------------------
function createActivitiesChoices(containerToAppend) {
  // --------- HTML Elements ---------
  // Activities Choices Container
  const activitiesChoicesContainer = document.createElement('section');
  activitiesChoicesContainer.setAttribute('id', 'activities-choices-container');
  // Activities Navbar Container
  const activitiesNavbarContainer = document.createElement('div');
  activitiesNavbarContainer.setAttribute('id', 'activities-navbar-container');
  activitiesNavbarContainer.classList.add('hidden', 'w-full', 'h-10', 'px-2', 'overflow-x-auto', 'Scrollbar-hide');
  // Activities Navbar
  const activitiesNavbar = document.createElement('nav');
  activitiesNavbar.setAttribute('id', 'activites-navbar');
  activitiesNavbar.classList.add('flex', 'gap-4', 'w-fit', 'h-full');
  // Activities Cards Container
  const activitiesCardsContainer = document.createElement('div');
  activitiesCardsContainer.setAttribute('id', 'activities-cards-container');
  activitiesCardsContainer.classList.add('grid', 'grid-cols-2', 'justify-center', 'gap-x-4', 'w-full', 'h-full');

  // --------- HTML Layout ---------
  // Activities Choices Container into Main Container
  containerToAppend.prepend(activitiesChoicesContainer);
  // Activities Navbar and Activities Cards containers into Activities Choices Container
  activitiesChoicesContainer.append(activitiesNavbarContainer, activitiesCardsContainer);
  // Activities Navbar into Activities Navbar Container
  activitiesNavbarContainer.appendChild(activitiesNavbar);
}

function addActivitiesNavbarOptionsInfo(elementsInfoArray) {
  // Geometry Option
  elementsInfoArray.push({
    id: "geometry",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995052/Math/geometry_b5mawp.png",
    imageAlt: "Geometry"
  });
  // Percentages Option
  elementsInfoArray.push({
    id: "percentages",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995980/Math/percentages_easmud.png",
    imageAlt: "Percentages"
  });
  // Types of Average Option
  elementsInfoArray.push({
    id: "averages",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262956/Math/statistics_odfqwt.png",
    imageAlt: "Averages"
  });
  // Salaries Option
  elementsInfoArray.push({
    id: "salaries",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262883/Math/salaries_ntvo6n.png",
    imageAlt: "Salaries"
  });
  // CDT Calculator Option
  elementsInfoArray.push({
    id: "cdt",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693263368/Math/cdt_r4c4nf.png",
    imageAlt: "CDT"
  });
}

function createActivitiesNavbarOptions(elementsInfoArray, containerToAppend, navbarOptionsArray) {
  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    // Navbar Option
    const navbarOption = document.createElement('div');
    navbarOption.classList.add('Navbar-element');
    navbarOption.setAttribute('id', `${element.id}-option`);
    // Navbar Option Image
    const navbarOptionImage = document.createElement('img');
    navbarOptionImage.classList.add('h-full');
    navbarOptionImage.setAttribute('src', element.image);
    navbarOptionImage.setAttribute('alt', `${element.imageAlt} Image`);
    // --------- HTML Layout ---------
    // Navbar Option into Navbar
    containerToAppend.appendChild(navbarOption);
    // Navbar Option Image into Navbar Option
    navbarOption.appendChild(navbarOptionImage);

    // Storing every Navbar Option in an array
    navbarOptionsArray.push(navbarOption);
  }
}

function addActivitiesCardsOptionsInfo(elementsInfoArray) {
  // Geometry Card
  elementsInfoArray.push({
    id: "geometry",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995052/Math/geometry_b5mawp.png",
    imageAlt: "Geometry",
    name: "Geometry"
  });
  // Percentages Card
  elementsInfoArray.push({
    id: "percentages",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692995980/Math/percentages_easmud.png",
    imageAlt: "Percentages",
    name: "Percentages"
  });
  // Types of Average Card
  elementsInfoArray.push({
    id: "averages",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262956/Math/statistics_odfqwt.png",
    imageAlt: "Average",
    name: "Types of Average"
  });
  // Salaries Project Card
  elementsInfoArray.push({
    id: "salaries",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693262883/Math/salaries_ntvo6n.png",
    imageAlt: "Average",
    name: "Salaries Analysis "
  });
  // CDT Calculator Card
  elementsInfoArray.push({
    id: "cdt",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693263368/Math/cdt_r4c4nf.png",
    imageAlt: "CDT",
    name: "CDT Calculator"
  });
}

function createActivitiesCardsOptions(elementsInfoArray, containerToAppend, activitiesCardsOptionsArray) {
  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    // Activity Card Container
    const activityCard = document.createElement('div');
    activityCard.classList.add('Activity-card');
    activityCard.setAttribute('id', `${element.id}-card`);
    // Activity Card Image
    const activityImage = document.createElement('img');
    activityImage.classList.add('w-5/6');
    activityImage.setAttribute('src', element.image);
    activityImage.setAttribute('alt', `${element.imageAlt} Image`);
    // Activity Card Name
    const activityName = document.createElement('p');
    activityName.classList.add('Activity-card__paragraph');
    activityName.innerText = element.name;
    
    // --------- HTML Layout ---------
    // Activity Card Container into Activities Cards Container
    containerToAppend.appendChild(activityCard);
    // Activity Card Image and Name into Activity Card Container
    activityCard.append(activityImage, activityName);
    // Storing every Activity Card in an array
    activitiesCardsOptionsArray.push(activityCard);
  }
}

function addActivitiesContainersInfo(elementsInfoArray) {
  // Geometry Container
  elementsInfoArray.push({
    id: "geometry",
    heading: "Basic geometry formulas"
  });
  // Percentages Container
  elementsInfoArray.push({
    id: "percentages",
    heading: "Calculate a discount"
  });
  // Averages Container
  elementsInfoArray.push({
    id: "averages",
    heading: "Types of averages"
  });
  // Salaries Container
  elementsInfoArray.push({
    id: "salaries",
    heading: "Salaries analysis"
  });
  // Percentages Container
  elementsInfoArray.push({
    id: "cdt",
    heading: "CDT Calculator"
  });
}

function createActivitiesContainers(elementsInfoArray, containerToAppend, activitiesContainersArray) {
  for (element of elementsInfoArray) {
    // --------- HTML Elements --------
    // Activity Container
    const activityContainer = document.createElement('section');
    activityContainer.setAttribute('id', `${element.id}-activity`);
    activityContainer.classList.add('hidden', 'Activity-container');
    // Activity Heading
    const activityHeading = document.createElement('h1');
    activityHeading.classList.add('Activity-heading');
    activityHeading.innerText = element.heading;
    
    // --------- HTML Layout ---------
    // Activiy Container into Activities Container
    containerToAppend.appendChild(activityContainer);
    // Activity Heading into Activity Container
    activityContainer.appendChild(activityHeading);
    // Storing every Activity Container in an array
    activitiesContainersArray.push(activityContainer);
  }
}

function addEventsToActivitiesCardsOptions(cardsArray, navbarOptionsArray) {
  cardsArray.forEach(card => {
    card.addEventListener('click', () => {
      // Hiding the "Activities Cards Container" and Showing the "Activities Navbar"
      hideShowContainers(activitiesCardsContainer, activitiesNavbarContainer)

      // Storing the first part of the ID of the Card
      const activityCard = card.id.split('-')[0];
      // Searching the compatible navbar element and activity container
      for (let i = 0; i < navbarOptionsArray.length; i++) {
        const activityNavbarOption = navbarOptionsArray[i].id.split('-')[0];
        if (activityCard === activityNavbarOption) {
          // Adding "focused" border to the compatible navbar element
          navbarOptionsArray[i].classList.add('Navbar-element-border');
          // Making the Activity Container appear
          activitiesContainers[i].classList.remove('hidden');
          activitiesContainersElements[i].classList.remove('hidden');

          // Moving the scrollbar according to the activity clicked
          if (activityCard === 'cdt') {
            activitiesNavbarContainer.scrollLeft = 100;
          } else if (activityCard === 'geometry') {
            activitiesNavbarContainer.scrollLeft = 0;
          }
        }
      }
    });
  });
}

function addEventsToActivitiesNavbarOptions(navbarOptionsArray, activitiesContainers) {
  navbarOptionsArray.forEach(navbarOption => {
    navbarOption.addEventListener('click', () => {
      // Hiding Navbar when clicking on the already selected element
      if (navbarOption.classList.contains('Navbar-element-border')) {
        // Removing "focused" border
        navbarOption.classList.remove('Navbar-element-border');
        // Hiding the "Activities Navbar" and Showing the "Cards Container"
        hideShowContainers(activitiesNavbarContainer, activitiesCardsContainer);

        // Hiding the opened "Activity Container"
        activitiesContainers.forEach(container => {
          if (!container.classList.contains('hidden')) {
            container.classList.add('hidden');
          }
        });
      } else {
        // Removing "focused" border if an option has it
        activitiesNavbarOptionsElements.forEach(navbarOption => {
          if (navbarOption.classList.contains('Navbar-element-border')) {
            navbarOption.classList.remove('Navbar-element-border');
          }
        });

        // Adding "focused" border to the selected element
        navbarOption.classList.add('Navbar-element-border');
        // Hiding opened "Activities Container"
        activitiesContainers.forEach(container => {
          if (!container.classList.contains('hidden')) {
            container.classList.add('hidden');
          }
        });

        // Showing the corresponding "Activity Container"
        for (let i = 0; i < activitiesContainers.length; i++) {
          if (navbarOption.id.split('-')[0] === activitiesContainers[i].id.split('-')[0]) {
            activitiesContainers[i].classList.remove('hidden');
          }
        }
      }

      // Moving the scrollbar according to the navbar element
      if (navbarOption.id.split('-')[0] === 'cdt') {
        activitiesNavbarContainer.scrollLeft = 100;
      } else if (navbarOption.id.split('-')[0] === 'geometry') {
        activitiesNavbarContainer.scrollLeft = 0;
      }
    });
  });
}

// ------------------------- Procedure -------------------------
const mainContainer = document.getElementById('main-container');

// --------------- Activities Choices ---------------
// Creating the "Activities Choices" container
createActivitiesChoices(mainContainer);

// Activities Navbar
const activitiesNavbarContainer = document.getElementById('activities-navbar-container');
const activitiesNavbar = document.getElementById('activites-navbar');
// Adding the Navbar Options information
const activitiesNavbarOptionsInfo = [];
addActivitiesNavbarOptionsInfo(activitiesNavbarOptionsInfo);
// Creating and Storing the Navbar Options
const activitiesNavbarOptionsElements = [];
createActivitiesNavbarOptions(activitiesNavbarOptionsInfo, activitiesNavbar, activitiesNavbarOptionsElements);

// Activities Cards
const activitiesCardsContainer = document.getElementById('activities-cards-container');
// Adding the Cards Container Options information
const activitiesCardsOptionsInfo = [];
addActivitiesCardsOptionsInfo(activitiesCardsOptionsInfo);
// Creating and Storing the Activity cards 
const activitiesCardsOptionsElements = [];
createActivitiesCardsOptions(activitiesCardsOptionsInfo, activitiesCardsContainer, activitiesCardsOptionsElements);

// --------------- Activities Containers ---------------
const activitiesContainer = document.getElementById('activities-container');

// Adding the Activities Containers information
const activitiesContainersInfo = [];
addActivitiesContainersInfo(activitiesContainersInfo);
// Creating and Storing the Activities Containers
const activitiesContainersElements = [];
createActivitiesContainers(activitiesContainersInfo, activitiesContainer, activitiesContainersElements);


const geometryContainer = document.getElementById('geometry-container');
const percentagesContainer = document.getElementById('percentages-container');
const averagesContainer = document.getElementById('averages-container');
const salariesContainer = document.getElementById('salaries-container');
const cdtContainer = document.getElementById('cdt-container');
const activitiesContainers = [geometryContainer, percentagesContainer, averagesContainer, salariesContainer, cdtContainer]

// Adding an eventlistener to every Activity Card
addEventsToActivitiesCardsOptions(activitiesCardsOptionsElements, activitiesNavbarOptionsElements);

// Adding an eventlistener to every Activity Navbar Option
addEventsToActivitiesNavbarOptions(activitiesNavbarOptionsElements, activitiesContainers);