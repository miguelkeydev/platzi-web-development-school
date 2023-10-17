// --------------------- Functions ---------------------
function startGame() {
  setCanvasSize();
  showPlayerLives();
  showTimeSpent();
  showRecordTime();
}

function setCanvasSize() {
  // Validating if the device's width is larger or shorter than the height
  if (window.innerHeight < window.innerWidth) {
    canvasSize = window.innerHeight * 0.85;
  } else {
    canvasSize = window.innerWidth * 0.75;
  }
  
  // Setting the Canvas size
  canvas.setAttribute('width', canvasSize)
  canvas.setAttribute('height', canvasSize)

  // Setting the Canvas Square size
  canvasSquareSize = canvasSize / 10;
  // Setting the Canvas Element size
  canvasElementSize = canvasSquareSize / 1.2;
          
  // Resetting the playerPosition
  playerPosition.x = 0;
  playerPosition.y = 0;

  // Rendering the Canvas
  renderCanvasMap();
}

function renderCanvasMap() {
  // Resetting the Bombs array in case there was previous information stored
  bombsPositions = [];

  // Setting the Level message
  levelMessage.innerText = `Level ${currentLevel + 1}`;

  // Setting the Font Styles for the Canvas
  game.font = `${canvasElementSize}px Verdana`;
  game.textAlign = 'end';
  
  // Getting the Rows of the Map
  const mapRows = maps[currentLevel].trim().split('\n');
  // Getting the Columns of the Map using the Map Rows
  const mapRowColumns = mapRows.map(row => row.trim().split(''));

  // Rendering the Map
  mapRowColumns.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const emoji = emojies[column];
      const x = canvasSquareSize * (columnIndex + 1);
      const y = (canvasSquareSize * (rowIndex + 1));

      // Filling the Canvas Square with the correspondind emoji
      switch (true) {
        // Bomb collision
        case bombCollisionPosition.x.toFixed(2) === x.toFixed(2) && bombCollisionPosition.y.toFixed(2) === y.toFixed(2):
          game.fillText(emojies['COLLISION'], x, y);
          break;
      
        // Emoji given by the map
        default:
          game.fillText(emoji, x, y);
          break;
      }

      switch (true) {
        // Validating if the emoji is a Door ('O') and the playerPosition hasn't been defined yet
        case column === 'O' && playerPosition.x === 0 && playerPosition.y === 0:
          // Defining the doorPosition
          doorPosition.x = x;
          doorPosition.y = y;
          
          // Defining the playerPosition
          playerPosition.x = x;
          playerPosition.y = y;

          // Rendering the Player Emoji
          renderPlayer();
          break;

        // Validating if the emoji is a Prize ('I') to define the prizePosition
        case column === "I":
          prizePosition.x = x;
          prizePosition.y = y;
          break;
        
        // Validating if the emoji is a Bomb ('X') to save it in an array
        case column === "X":
          bombsPositions.push({ x: x, y: y });
          break;
      }
    });
  });

  // Showing a broken life whenever the player fails a level
  if (brokenLifePosition.x !== 0) {
    game.font = `${canvasElementSize * 6}px Verdana`;
    game.fillText(emojies['LIFE_BROKEN'], canvasSquareSize * 8.5, canvasSquareSize * 7)
    game.font = `${canvasElementSize}px Verdana`;
  }
}

function renderPlayer() {
  // Rendering the Player Emoji according to it's 
  game.fillText(emojies['PLAYER'], playerPosition.x, playerPosition.y);
  
  switch (true) {
    // Validating if the playerPosition and the prizePosition is the same
    case playerPosition.x.toFixed(2) === prizePosition.x.toFixed(2) && playerPosition.y.toFixed(2) === prizePosition.y.toFixed(2):
      levelWin();
      break;
  
    // Validating if the playerPosition is the same of any bomb
    default:
      bombsPositions.forEach(bomb => {
        if (playerPosition.x.toFixed(2) === bomb.x.toFixed(2) && playerPosition.y.toFixed(2) === bomb.y.toFixed(2)) {
          levelFail();
        }
      });
      break;
  }
}

function showPlayerLives() {
  // Creating an array with a life for every life the player has left
  const livesArray = Array(playerLives).fill(emojies['LIFE']);
  const livesGoneArray = Array(playerLivesGone).fill(emojies['LIFE_GONE']);

  // Resetting the Player Lives Shown
  playerLivesMessage.innerHTML = `&#129293;Lives: `;

  // Adding the amount of Player Lives left
  livesArray.forEach(life => {
    playerLivesMessage.innerHTML += `${life} `;
  });
  livesGoneArray.forEach(lifeGone => {
    playerLivesMessage.innerHTML += `${lifeGone} `;
  });
}

function showTimeSpent() {
  // Resetting the timeSpent
  // timeSpent = undefined;
  
  // Setting the starting time
  timeStart = Date.now();

  // Creating the time interval
  timeInterval = setInterval(() => {
    timeSpent = Date.now() - timeStart;
    timeSpentInMinutes = millisecondsToTime(timeSpent);
    timeSpentMessage.innerHTML = `&#9200;Time: ${timeSpentInMinutes}`;
  }, 75);
}

function showRecordTime() {
  const recordTime = localStorage.getItem('record-time');

  switch (true) {
    // If there wasn't a record time before and the game has just started
    case !recordTime && timeSpent === undefined:
      // Creating the Record paragraph
      recordTimeMessage.innerHTML = `&#127942;Record: `;
      break;
    
    // If there wasn't a record time before and the player has just won the game
    case !recordTime && timeSpent !== undefined:
      // Storing the first Record Time, Time Mark and Player Username
      localStorage.setItem('record-time', timeSpent);
      localStorage.setItem('mark-time-1', timeSpent);
      localStorage.setItem('player-mark-time-1', username);

      // Showing the Time Spent and Record Time when winning the game
      winScreenRecord.innerHTML = `&#9200; You won the game in ${timeSpentInMinutes} &#9200;<br>&#127937; You've set a new record &#127937;`;
      break;

    // If there was a record time before and the game has just started
    case recordTime && timeSpent === undefined:
      // Creating the record time paragraph with the actual record
      recordTimeMessage.innerHTML = `&#127942;Record: ${millisecondsToTime(recordTime)}`;
      break;
    
    // If there was a record time before and the player has just won the game
    case recordTime && timeSpent !== undefined:
      // Validating whether the player set a new Record Time
      switch (true) {
        // If the new Time Spent is shorter than the Record time
        case recordTime > timeSpent:
          // Storing the new Record Time
          localStorage.setItem('record-time', timeSpent);
  
          // Showing the Time Spent and Record Time when winning the game
          winScreenRecord.innerHTML = `&#9200; You won the game in ${millisecondsToTime(timeSpent)} &#9200;<br>&#127937; You've set a new record &#127937;`;
          break;
      
        // If the Time Spent is longer than the Record Time
        default:
          // Showing the Time Spent when winning the game
          winScreenRecord.innerHTML = `&#9200; You won the game in ${millisecondsToTime(timeSpent)} &#9200;<br>&#9876;&#65039; Try to beat the record &#9876;&#65039;<br>&#129351; Record: ${millisecondsToTime(recordTime)} &#129351;`;
          break;
      }

      // Getting the Stored Mark Times
      saveMarkTime();
      break;
  }
}

function millisecondsToTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const remainingMilliseconds = milliseconds % 10;
  
  return `${minutes}:${seconds}:${(remainingMilliseconds)}`;
}

function moveUp() {
  // Substracting one square in the Y axis to move up
  playerPosition.y -= canvasSquareSize;

  // Avoiding the Player Emoji to go out of the Canvas
  if (playerPosition.y < canvasSquareSize) {
    playerPosition.y = canvasSquareSize;
  }

  // Updating the Canvas changing the playerPosition
  updateCanvas();
}

function moveRight() {
  // Adding one square in the X axis to move right
  playerPosition.x += canvasSquareSize;

  // Avoiding the Player Emoji to go out of the Canvas
  if (playerPosition.x > canvasSize) {
    playerPosition.x = canvasSize;
  }

  // Updating the Canvas changing the playerPosition
  updateCanvas();
}

function moveLeft() {
  // Substracting one square in the X axis to move left
  playerPosition.x -= canvasSquareSize;

  // Avoiding the Player Emoji to go out of the Canvas
  if (playerPosition.x < canvasSquareSize) {
    playerPosition.x = canvasSquareSize;
  }

  // Updating the Canvas changing the playerPosition
  updateCanvas();
}

function moveDown() {
  // Adding one square in the Y axis to move down
  playerPosition.y += canvasSquareSize;

  // Avoiding the Player Emoji to go out of the Canvas
  if (playerPosition.y > canvasSize) {
    playerPosition.y = canvasSize;
  }

  // Updating the Canvas changing the playerPosition
  updateCanvas();
}

function updateCanvas() {
  // Clearing the Canvas completely
  game.clearRect(0, 0, canvasSize, canvasSize);

  // Rendering the Canvas map again
  renderCanvasMap();
  // Rendering the Player Emoji with its new position
  renderPlayer();
}

function moveByKeys(event) {
  // Validating which key was pressed
  switch (true) {
    case event.key === 'ArrowUp':
      moveUp();
      break;
  
    case event.key === 'ArrowRight':
      moveRight();
    break;
  
    case event.key === 'ArrowLeft':
      moveLeft();
    break;
  
    case event.key === 'ArrowDown':
      moveDown();
    break;
  }
}

function levelFail() {
  // Setting the brokenLifePosition
  brokenLifePosition.x = canvasElementSize * 3;
  brokenLifePosition.y = canvasElementSize * 3;
    
  // Setting the bombCollisionPosition the same as the playerPosition
  bombCollisionPosition.x = playerPosition.x;
  bombCollisionPosition.y = playerPosition.y;

  // Substracting one life
  playerLives--;
  playerLivesGone++;

  // Validating if the player has available lives
  if (playerLives < 1) {
    // Stopping the Time Spent interval
    clearInterval(timeInterval);

    // Showing the Lose Screen
    loseScreen.classList.remove('hidden');
  } else {
    // Giving a short time to appreciate where the player moved before updating the Canvas Map
    setTimeout(() => {
      // Resetting the playerPosition
      playerPosition.x = 0;
      playerPosition.y = 0;

      // Updating the Shown Player Lives
      showPlayerLives();

      // Updating the Canvas Map
      updateCanvas();

      // Removing the broken life emoji
      setTimeout(() => {
        // Resetting the brokenLifePosition
        brokenLifePosition.x = 0;
        brokenLifePosition.y = 0;
        updateCanvas();
      }, 300);
    }, 75);
  }
}

function levelWin() {
  // Increasing the current level and updating the canvas map
  currentLevel++;

  // Setting the new doorPosition the same as the previous prizePosition
  doorPosition.x = prizePosition.x;
  doorPosition.y = prizePosition.y;

  // Resetting the bombCollisionPosition
  bombCollisionPosition.x = 0;
  bombCollisionPosition.y = 0;

  // Validating if there are available maps
  if (currentLevel === maps.length) {
    gameWin();
    return;
  }

  // Giving a short time to appreciate where the player moved before updating the Canvas Map
  setTimeout(() => {
    // Updating the Canvas Map
    updateCanvas();
  }, 75);

}

function addEventsToTryAgainButtons() {
  resetGameOptions();

  setTimeout(() => {
    // Hiding the Lose and Win Screens
    loseScreen.classList.add('hidden');
    winScreen.classList.add('hidden');

    // Starting the game
    startGame();
  }, 220);
}

function resetGameOptions() {
  // Resetting all the game options
  currentLevel = 0;
  playerLives = 3;
  playerLivesGone = 0;
  bombCollisionPosition.x = 0;
  bombCollisionPosition.y = 0;
  brokenLifePosition.x = 0;
  brokenLifePosition.y = 0;
  timeSpent = undefined;
}

function gameWin() {
  // Stopping the time interval
  clearInterval(timeInterval);

  // Showing the new record time if it's the case
  showRecordTime();
  
  // Showing the Win Screen container
  winScreen.classList.remove('hidden');
}

function saveMarkTime() {
  // Storing the current Mark Time and Player Username
  for (let i = 1; i <= 11; i++) {
    // If the Mark Time hasn't been stored
    if (localStorage.getItem(`mark-time-${i}`) === null) {
      // Saving the Mark Time and Player Username
      localStorage.setItem(`mark-time-${i}`, timeSpent);
      localStorage.setItem(`player-mark-time-${i}`, username);
      // Finishing the loop
      i = 12;
    }
  }

  // Getting and Sorting the Mark Times
  getMarkTimes();
}

function getMarkTimes() {
  // Resetting the Mark Times List
  markTimesLeaderboard = [];

  // Getting the Stored Mark Times
  for (let i = 1; i <= 11; i++) {
    // Validating whether the Mark Time is stored
    if (localStorage.getItem(`mark-time-${i}`) !== null) {
      markTimesLeaderboard.push({
        "markTime": localStorage.getItem(`mark-time-${i}`),
        "username": localStorage.getItem(`player-mark-time-${i}`)
      });
    } // Finishing the loop if there are no more stored Mark Times
    else {
      i = 12;
    }
  }

  // Sorting the Mark Times
  markTimesLeaderboard.sort((a, b) => a.markTime - b.markTime);

  // Removing the last Stored Mark Time if there are 11
  if (markTimesLeaderboard.length === 11) {
    markTimesLeaderboard.pop();
    localStorage.removeItem('mark-time-11');
    localStorage.removeItem('player-mark-time-11');
  }

  // Sorting the Stored Mark Times
  markTimesLeaderboard.forEach((markTime, i) => {
    localStorage.setItem(`mark-time-${i + 1}`, markTime.markTime);
    localStorage.setItem(`player-mark-time-${i + 1}`, markTime.username);
  });
}

// -------------------- Procedure --------------------
const homeScreen = document.querySelector('.home-screen');

// Creating the canvas Elements
const levelMessage = document.getElementById('level');
const canvas = document.getElementById('canvas');
const game = canvas.getContext('2d');

let canvasSize
let canvasSquareSize
let canvasElementSize

// Creating the Current Level and Current Lives variable
let currentLevel = 0;
let playerLives = 3;
let playerLivesGone = 0;

// Creating the Door, Player, Prize, Bomb Collision, and Trophy position Objects
const doorPosition = {
  x: 0,
  y: 0
};
const playerPosition = {
  x: 0,
  y: 0
};
const prizePosition = {
  x: 0,
  y: 0
};
const bombCollisionPosition = {
  x: 0,
  y: 0
};
const brokenLifePosition = {
  x: 0,
  y: 0
};
// Creating the Bombs positions array
let bombsPositions = [];

// Setting the size of the canvas once the browser has been resized
window.addEventListener('resize', setCanvasSize);

// Getting the Buttons Elements
const buttonUp = document.getElementById('button-up');
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');
const buttonDown = document.getElementById('button-down');

// Adding eventListeners to every button
buttonUp.addEventListener('click', moveUp);
buttonRight.addEventListener('click', moveRight);
buttonLeft.addEventListener('click', moveLeft);
buttonDown.addEventListener('click', moveDown);

// Getting the keyboard keys
window.addEventListener('keydown', moveByKeys);

// Game Information Elements
const playerLivesMessage = document.getElementById('player-lives');
const timeSpentMessage = document.getElementById('time-spent');
const recordTimeMessage = document.getElementById('record-time');

let timeStart;
let timeSpent;
let timeSpentInMinutes;
let timeInterval;

const loseScreen = document.querySelector('#lose-screen');
const winScreen = document.querySelector('#win-screen');
const winScreenRecord = document.querySelector('.final-screen__record');

const tryAgainButtons = document.querySelectorAll('#try-again');

// Adding eventListener to the Try Again buttons
tryAgainButtons.forEach(button => {
  button.addEventListener('click', addEventsToTryAgainButtons);
})

const goHomeButtons = document.querySelectorAll('#go-home');

// Adding eventListener to the Go Home button
goHomeButtons.forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(() => {
      // Resetting the game options
      resetGameOptions();

      // Hiding the Lose and Win Screens
      loseScreen.classList.add('hidden');
      winScreen.classList.add('hidden');

      // Showing the Home Screen
      homeScreen.classList.remove('hidden');
    }, 220);
  });
})