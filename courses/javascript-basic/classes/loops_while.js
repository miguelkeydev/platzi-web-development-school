let cards = ["Hog Rider", "Mini Pekka", "Giant", "Dark Prince", "Ice Spirit", "Royal Ghost"];

function greetCards(card) {
  console.log(`Hello, ${card}`)
}

while (cards.length > 0) {
  let card = cards.shift();
  greetCards(card);
  console.log(cards);
}