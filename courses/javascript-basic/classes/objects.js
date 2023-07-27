let car = {
  brand: "Audi",
  model: "Spyder",
  year: 2023,
  
  carDetails: function () {
    console.log(`Model ${this.model} ${this.year}`);
  }
};

// Constructor
function computer(cpu, ram, graphics, storage) {
  this.cpu = cpu;
  this.ram = ram;
  this.graphics = graphics;
  this.storage = storage;
}

// Creating an object from the Constructor Function
let newComputer = new computer("Ryzen 7", "16GB", "RTX 3080", "2 TB");
let newLaptot = new computer("Intel i5", "8GB", "Radeon Vega 2020", "1 TB");