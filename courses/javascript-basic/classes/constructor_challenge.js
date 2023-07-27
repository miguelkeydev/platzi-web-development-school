// Constructor Function Challenge

// Cellphones Array; Where the new 'cellphone' objects will be stored
let cellphonesBox = [];

// Constructor Function
function cellphone(brand, ram, storage, color, price) {
	this.brand = brand;
	this.ram = ram;
	this.storage = storage;
	this.color = color;
	this.price = price;
}

// Asking for how many cellphones will be registered
function addingCellphones() {
  let cellphones = prompt("How many cellphones do you want to register?");

  while (isNaN(cellphones) || cellphones === '') {
    cellphones = prompt("You typed wrong, try again");
  }

  return cellphones;
}

// Creating the Cellphones
function creatingCellphones() {
  let cellphoneCount = 1;
  
  while (numberOfCellphones !== 0) {
    let brand = prompt(`Type the brand of the cellphone ${cellphoneCount}`);
    let ram = Number(prompt(`Type the ram of the cellphone ${cellphoneCount} in GB`));
    let storage = Number(prompt(`Type the storage of the cellphone ${cellphoneCount} in GB`));
    let color = prompt(`Type the color of the cellphone ${cellphoneCount}`);
    let price = Number(prompt(`Type the price of the cellphone ${cellphoneCount} in dollars`));

    let newCellphone = new cellphone(brand, ram, storage, color, price);
    cellphonesBox.push(newCellphone);
    
    cellphoneCount++; numberOfCellphones--;
  }
}

// Saving the user's choice
let numberOfCellphones = Number(addingCellphones());

creatingCellphones();