let cards = ["Hog Rider", "Mini Pekka", "Giant", "Dark Prince", "Ice Spirit", "Royal Ghost"];

function greetCards(card) {
  console.log(`Hello, ${card}`)
}

for (let i = 0; i < cards.length; i++) {
  greetCards(cards[i]);
}

for (card of cards) {
  greetCards(card);
}