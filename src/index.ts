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


class NCycle<T> {
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[]) {
      this.make = make;
      this.model = model;
  }

  print(parameter?: number): void {
      if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
          console.log(`This is a ${this.make} ${this.model} NCycle.`);
      } else if (Array.isArray(this.make) && Array.isArray(this.model) && parameter !== undefined &&
          parameter >= 0 && parameter < this.make.length && parameter < this.model.length) {
          console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
      } else {
          console.log("This NCycle was not created properly.");
      }
  }

  printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
          for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
              console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
          }
      } else {
          console.log("This NCycle was not created properly.");
      }
  }
}

// Testing
const singleCycle = new NCycle<string>("Mountain", "Bike");
singleCycle.print(); // Output: This is a Mountain Bike NCycle.

const multipleCycles = new NCycle<string[]>(["Mountain", "Road", "BMX"], ["Bike", "Bike", "Bike"]);
multipleCycles.print(); // Output: This NCycle was not created properly.
multipleCycles.print(1); // Output: This NCycle has a Road Bike at 1.

multipleCycles.printAll();