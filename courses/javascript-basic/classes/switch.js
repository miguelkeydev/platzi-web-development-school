switch (number) {
  case 1:
    console.log("Number One");
    break;
  case 2:
    console.log("Number Two");
    break;
  case 3:
    console.log("Number Three");
  break;
  case 4:
    console.log("Number Four");
    break;
  case 5:
    console.log("Number Five");
    break;
  case 6:
    console.log("Number Six");
    break;
  default:
    console.log ("Not a number between one and six")
}

// ================== Rock, Paper & Scissors Game ==================

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomOption(cpuOption) {
  switch (cpuOption) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return false
  }
}

function game(playerOption) {
  let randomChoice = getRandomInt(1, 4);
  let cpuOption = randomOption(randomChoice);
  
  switch (true) {
    case (playerOption === cpuOption):
      console.log("It's a tie!");
      break;
    case (playerOption === "rock"):
      switch (cpuOption) {
        case "scissors":
          console.log("You won!");
          break;
        default:
          console.log("You lost :(");
      }
      break;
    case (playerOption === "paper"):
      switch (cpuOption) {
        case "rock":
          console.log("You won!");
          break;
        default:
          console.log("You lost :(");
      }
      break;
    case (playerOption === "scissors"):
      switch (cpuOption) {
        case "paper":
          console.log("You won!");
          break;
        default:
          console.log("You lost :(");
      }
      break;
    default:
      console.log("Somebody chose a wrong option!!!");
  }
}