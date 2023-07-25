// Rock, Paper & Scissors Using If Conditionals
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function game(playerOption) {
  let machineOption = getRandomInt(1, 4);

  if ((playerOption === 1 || playerOption === "Rock" || playerOption === "rock" || playerOption === "ROCK") && (machineOption === 3)) {
    console.log("You won!");
  } else if ((playerOption === 1 || playerOption === "Rock" || playerOption === "rock" || playerOption === "ROCK") && (machineOption === 2)) {
    console.log("You lost:(");
  } else if ((playerOption === 1 || playerOption === "Rock" || playerOption === "rock" || playerOption === "ROCK") && (machineOption === 1)) {
    console.log("It was a tie");
  } else if ((playerOption === 2 || playerOption === "Paper" || playerOption === "paper" || playerOption === "PAPER") && (machineOption === 1)) {
    console.log("You won!");
  } else if ((playerOption === 2 || playerOption === "Paper" || playerOption === "paper" || playerOption === "PAPER") && (machineOption === 3)) {
    console.log("You lost:(");
  } else if ((playerOption === 2 || playerOption === "Paper" || playerOption === "paper" || playerOption === "PAPER") && (machineOption === 2)) {
    console.log("It was a tie");
  } else if ((playerOption === 3 || playerOption === "Scissors" || playerOption === "scissors" || playerOption === "SCISSORS") && (machineOption === 2)) {
    console.log("You won!");
  } else if ((playerOption === 3 || playerOption === "Scissors" || playerOption === "scissors" || playerOption === "SCISSORS") && (machineOption === 1)) {
    console.log("You lost:(");
  } else if ((playerOption === 3 || playerOption === "Scissors" || playerOption === "scissors" || playerOption === "SCISSORS") && (machineOption === 3)) {
    console.log("It was a tie");
  } else {
    console.log("You didn't choose a proper option");
  }
}

function game2(playerOption) {
  let machineOption = getRandomInt(1, 4);

  if (playerOption !== machineOption) {
    if (playerOption === 1 && machineOption === 3) {
      console.log("You won!");
    } else if (playerOption === 1 && machineOption === 2) {
      console.log("You lost :c");
    } else if (playerOption === 2 && machineOption === 1) {
      console.log("You won!");
    } else if (playerOption === 2 && machineOption === 3) {
      console.log("You lost :c");
    } else if (playerOption === 3 && machineOption === 2) {
      console.log("You won!");
    } else if (playerOption === 3 &&  machineOption === 1) {
      console.log("You lost :c");
    } else {
    console.log("Error");
    }
  } else {
    console.log("It was a tie");
  }
}

function game3(playerOption) {
  let machineOption = getRandomInt(1, 4);

  if (playerOption === machineOption) {
    console.log("It's a Draw");
  } else if (playerOption === 1) {
    if (machineOption === 2) {
      console.log("You lost :c");
    } else if (machineOption === 3) {
      console.log("You won!");
    }
  } else if (playerOption === 2) {
    if (machineOption === 3) {
      console.log("You lost :c");
    } else if (machineOption === 1) {
      console.log("You won!");
    }
  } else if (playerOption === 3) {
    if (machineOption === 1) {
      console.log("You lost :c");
    } else if (machineOption === 2) {
      console.log("You won!");
    }
  } else {
    console.log("Invalid Option!!!!");
  }
}