class Vehicle {
  brand: string;
  model: string;
  year: number;
  status: "started" | "stopped"; // Union of literals for valid status options

  constructor(brand: string, model: string, year: number, status: "started" | "stopped") {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.status = status;
  }

  start() {
      this.status = "started";
  }

  stop() {
      this.status = "stopped";
  }
}

class Car extends Vehicle {
  numDoors: number;

  constructor(brand: string, model: string, year: number, status: "started" | "stopped", numDoors: number) {
      super(brand, model, year, status);
      this.numDoors = numDoors;
  }
}

class MotorCycle extends Vehicle {
  engineSize: number;

  constructor(brand: string, model: string, year: number, status: "started" | "stopped", engineSize: number) {
      super(brand, model, year, status);
      this.engineSize = engineSize;
  }
}

function printStatus(vehicle: Vehicle) {
  console.log(`The ${vehicle.brand} ${vehicle.model} is currently ${vehicle.status}.`);
}

const car = new Car("Toyota", "Corolla", 2020, "stopped", 4);
const motorcycle = new MotorCycle("Honda", "CBR500R", 2021, "started", 500);

printStatus(car); // Output: The Toyota Corolla is currently stopped.
printStatus(motorcycle); // Output: The Honda CBR500R is currently started.