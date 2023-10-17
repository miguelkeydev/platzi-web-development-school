const logoContainer = document.querySelector('.home-screen__logo');
const optionsContainer = document.querySelector('.home-screen__options');
const infoContainer = document.querySelector('.home-screen__info');

// -------------- "Play" button --------------
const playOption = document.querySelector('.options__play-option');
const typeUsernameContainer = document.querySelector('.info__type-username');

// Making the user type their username
playOption.addEventListener('click', () => {
  setTimeout(() => {
    // Hiding the Logo and the Options containers
    logoContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');

    // Showing the Info and Type Username containers
    infoContainer.classList.remove('hidden');
    typeUsernameContainer.classList.remove('hidden');
  }, 220);
});

const usernameInput = document.getElementById('username');
const usernameSubmit = document.querySelector('.info__submit-username');
const usernameWarn = document.querySelector('.username-warn');
let username;

// Starting the game
usernameSubmit.addEventListener('click', () => {
  event.preventDefault();

  // Validating if the Username is correct
  switch (true) {
    // If the username contains spaces
    case usernameInput.value.includes(' '):
      usernameWarn.innerText = `Your username can't contain spaces`;
      break;
    
    // If the username is empty
    case usernameInput.value === '':
      usernameWarn.innerText = `Type a username`;
      break;
    
    // If the username is shorter than 3 characters
    case usernameInput.value.split('').length < 3:
      usernameWarn.innerText = `Type at least three characters`;
      break;

    // Starting the game if the username is valid
    default:
      setTimeout(() => {
        // Hiding the Home Screen and the Info and Type Username containers
        homeScreen.classList.add('hidden');
        infoContainer.classList.add('hidden');
        typeUsernameContainer.classList.add('hidden');

        // Showing the Logo and the Options containers
        logoContainer.classList.remove('hidden');
        optionsContainer.classList.remove('hidden');

        // Setting the username
        username = usernameInput.value;

        // Resetting the Username Input and Warn values
        usernameInput.value = ``;
        usernameWarn.innerText = ``;
        
        // Starting the game
        startGame();
      }, 220);
      break;
  }
});

// -------------- "Instructions" button --------------
const instructionsOption = document.querySelector('.options__instructions-option');
const instructionsContainer = document.querySelector('.info__instructions');
const returnHome = document.getElementById('return-home');

// Showing the Instructions
instructionsOption.addEventListener('click', () => {
  setTimeout(() => {
    // Hiding the Logo and the Options containers
    logoContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');

    // Showing the Info and Instructions containers and the Home Button
    infoContainer.classList.remove('hidden');
    instructionsContainer.classList.remove('hidden');
    returnHome.classList.remove('hidden');
  }, 220);
});

// -------------- "Customization" button --------------
const customizationOption = document.querySelector('.options__customization-option');
const customizationContainer = document.querySelector('.info__customization');
const customizationOptions = document.querySelector('.customization__options');

// Showing the Customization Options
customizationOption.addEventListener('click', () => {
  setTimeout(() => {
    // Hiding the Logo and the Options containers and the Home Button
    logoContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');

    // Showing the Info and Customization containers
    infoContainer.classList.remove('hidden');
    customizationContainer.classList.remove('hidden');
  }, 220);
});

// Options Elements
const customizationOptionsElements = [document.getElementById('customization-original'), document.getElementById('customization-monkey'), document.getElementById('customization-developer'), document.getElementById('customization-scientist')]

// Adding eventListeners to every Customization Option
customizationOptionsElements.forEach((option, i) => {
  option.addEventListener('click', () => {
    setTimeout(() => {
      // Assigning the corresponding emojies
      switch (true) {
        case i === 0:
          // Setting and Storing the game emojies in the localStorage
          emojies['PLAYER'] = '💀';
          localStorage.setItem('player', '💀');
          emojies['X'] = '💣';
          localStorage.setItem('obstacle', '💣');
          emojies['I'] = '🎁';
          localStorage.setItem('goal', '🎁');
          emojies['COLLISION'] = '💥';
          localStorage.setItem('collision', '💥');
          break;
        
        case i === 1:
          // Setting and Storing the game emojies in the localStorage
          emojies['PLAYER'] = '🐒';
          localStorage.setItem('player', '🐒');
          emojies['X'] = '🌳';
          localStorage.setItem('obstacle', '🌳');
          emojies['I'] = '🍌';
          localStorage.setItem('goal', '🍌');
          emojies['COLLISION'] = '🙊';
          localStorage.setItem('collision', '🙊');
          break;
        
        case i === 2:
          // Setting and Storing the game emojies in the localStorage
          emojies['PLAYER'] = '🤓';
          localStorage.setItem('player', '🤓');
          emojies['X'] = '👾';
          localStorage.setItem('obstacle', '👾');
          emojies['I'] = '💻';
          localStorage.setItem('goal', '💻');
          emojies['COLLISION'] = '👨‍💻';
          localStorage.setItem('collision', '👨‍💻');
          break;
        
        case i === 3:
          // Setting and Storing the game emojies in the localStorage
          emojies['PLAYER'] = '👩‍🔬';
          localStorage.setItem('player', '👩‍🔬');
          emojies['X'] = '🦠';
          localStorage.setItem('obstacle', '🦠');
          emojies['I'] = '💉';
          localStorage.setItem('goal', '💉');
          emojies['COLLISION'] = '🧟‍♂️';
          localStorage.setItem('collision', '🧟‍♂️');
          break;
      }
      // Closing the Options container
      logoContainer.classList.remove('hidden');
      optionsContainer.classList.remove('hidden');

      // Showing the Info and Instructions containers
      infoContainer.classList.add('hidden');
      customizationContainer.classList.add('hidden');
    }, 220);
  });
} )

// ------------ Leaderboard ------------

const leaderboardOption = document.querySelector('.options__leaderboard-option');
const leaderboardContainer = document.querySelector('.info__leaderboard');
const leaderboardMarkTimesContainer = document.querySelector('.leaderboard__mark-times');
const leaderboardNoRecords = document.querySelector('.leaderboard__no-records');

let markTimesLeaderboard = [];

// Showing the Leaderboard
leaderboardOption.addEventListener('click', () => {
  setTimeout(() => {
    // Hiding the Logo and the Options containers and the Home Button
    logoContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');

    // Showing the Info and Leaderboard containers and the Home Button
    infoContainer.classList.remove('hidden');
    leaderboardContainer.classList.remove('hidden');
    returnHome.classList.remove('hidden');

    // Getting previous mark times
    getMarkTimes();

    // Validating whether there are previous mark times
    switch (true) {
      // If there are no previous mark times
      case markTimesLeaderboard.length === 0:
        // Showing the No Records paragraph
        leaderboardNoRecords.classList.remove('hidden');
        break;
           
      // If there are previous mark times
      default:
        // Hiding the No Records paragraph
        leaderboardNoRecords.classList.add('hidden');

        // Showing the Mark Times container and Deleting any previous info
        leaderboardMarkTimesContainer.classList.remove('hidden');
        leaderboardMarkTimesContainer.innerHTML = ``;

        // Creating the leaderboard mark times
        markTimesLeaderboard.forEach((markTime, i) => {
          // Mark Time Container
          const markTimeContainer = document.createElement('div');
          markTimeContainer.classList.add('leaderboard__player-mark-time');
          // Position
          const markTimePosition = document.createElement('p');
          // Validating if it's a podium position
          switch (true) {
            // First mark time
            case i === 0:
              markTimePosition.innerHTML = `&#129351;`;
              markTimeContainer.classList.add('leaderboard__player-mark-time--1');
              break;
          
            // Second mark time
            case i === 1:
              markTimePosition.innerHTML = `&#129352;`; 
              markTimeContainer.classList.add('leaderboard__player-mark-time--2');
              break;
          
            // Third mark time
            case i === 2:
              markTimePosition.innerHTML = `&#129353;`;
              markTimeContainer.classList.add('leaderboard__player-mark-time--3');
              break;

            // Other mark times
            default:
              markTimePosition.innerHTML = i + 1;
              break;
          }
          // Username
          const markTimeUsername = document.createElement('p');
          markTimeUsername.innerText = markTime.username;
          // Mark Time
          const markTimeScore = document.createElement('p');
          markTimeScore.innerText = millisecondsToTime(markTime.markTime);

          // Adding the Mark Time in HTML
          leaderboardMarkTimesContainer.appendChild(markTimeContainer)
          markTimeContainer.append(markTimePosition, markTimeUsername, markTimeScore);
        });
        break;
    }
  }, 220);
});

// ------------ Returning to Home Screen ------------
returnHome.addEventListener('click', () => {
  setTimeout(() => {
    // Showing the Logo and the Options containers
    logoContainer.classList.remove('hidden');
    optionsContainer.classList.remove('hidden');

    // Hiding the Info, Instructions, Customization and Leaderboard containers and the Home Button
    infoContainer.classList.add('hidden');
    instructionsContainer.classList.add('hidden');
    customizationContainer.classList.add('hidden');
    leaderboardContainer.classList.add('hidden');
    returnHome.classList.add('hidden');
  }, 220);
});