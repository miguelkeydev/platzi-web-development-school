// ===== Rock, Paper & Scissors Game Using Switch Conditionals =====

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