// Creating an Array with some objects
let articles = [
  { name: "Bicycle", price: 150 },
  { name: "TV", price: 700 },
  { name: "Book", price: 10 },
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 800 },
  { name: "Keyboard", price: 50 },
  { name: "Headphones", price: 30 },
  { name: "Keyboard", price: 90 },
];

// With 'Filter' we won't modify the array 'articles', we'll create another array with the objects filtered
let articlesFilteredByPrice = articles.filter(function (article) {
  return article.price <= 250;
});

// With 'Map' we'll create another array only with the property mapped
let articlesMappedByName = articles.map(function (article) {
  return article.name;
});

// With 'Find' we'll create another array with the first element that fulfills the condition. Only with the first one, once the first element has been found, it won't look for more
let articlesFound = articles.find(function (article) {
  return article.name === "Keyboard";
});

// With 'Some' we'll only validate a condition and receive a 'true' or 'false' value
let articlesExpensive = articles.some(function (article) {
  return article.price >= 500;
})

// With 'ForEach' we won't create another array, this method only returns values
articles.forEach(function (article) {
  console.log(article.name);
})