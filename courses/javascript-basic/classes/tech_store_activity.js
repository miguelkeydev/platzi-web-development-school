// In this challenge, you must return a different message depending on the Tech Article you receive
// If you get a "computer", you must return the message: "With my computer I can code using JavaScript"
// If you get a "phone", you must return the message: "With my phone I can use the Platzi app"
// If you get a "wire", you must return the message: "There's a wire in my boot!"
// If you get a different article, you must retunr the message "Article not found"

function solution(article) {
  switch (article) {
    case "computer":
      console.log("With my computer I can code using JavaScript");
      break;
    case "phone":
      console.log("With my phone I can use the Platzi app");
      break;
    case "wire":
      console.log("There's a wire in my boot!");
      break;
    default:
      console.log("Article not found");
  }
}