"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, year, status) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.status = status;
    }
    Vehicle.prototype.start = function () {
        this.status = "started";
    };
    Vehicle.prototype.stop = function () {
        this.status = "stopped";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, year, status, numDoors) {
        var _this = _super.call(this, brand, model, year, status) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    return Car;
}(Vehicle));
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(brand, model, year, status, engineSize) {
        var _this = _super.call(this, brand, model, year, status) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    console.log("The ".concat(vehicle.brand, " ").concat(vehicle.model, " is currently ").concat(vehicle.status, "."));
}
var car = new Car("Toyota", "Corolla", 2020, "stopped", 4);
var motorcycle = new MotorCycle("Honda", "CBR500R", 2021, "started", 500);
printStatus(car); // Output: The Toyota Corolla is currently stopped.
printStatus(motorcycle); // Output: The Honda CBR500R is currently started.
var NCycle = /** @class */ (function () {
    function NCycle(make, model) {
        this.make = make;
        this.model = model;
    }
    NCycle.prototype.print = function (parameter) {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log("This is a ".concat(this.make, " ").concat(this.model, " NCycle."));
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model) && parameter !== undefined &&
            parameter >= 0 && parameter < this.make.length && parameter < this.model.length) {
            console.log("This NCycle has a ".concat(this.make[parameter], " ").concat(this.model[parameter], " at ").concat(parameter, "."));
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    NCycle.prototype.printAll = function () {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            for (var i = 0; i < Math.min(this.make.length, this.model.length); i++) {
                console.log("This NCycle has a ".concat(this.make[i], " ").concat(this.model[i], " at ").concat(i, "."));
            }
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    return NCycle;
}());
// Testing
var singleCycle = new NCycle("Mountain", "Bike");
singleCycle.print(); // Output: This is a Mountain Bike NCycle.
var multipleCycles = new NCycle(["Mountain", "Road", "BMX"], ["Bike", "Bike", "Bike"]);
multipleCycles.print(); // Output: This NCycle was not created properly.
multipleCycles.print(1); // Output: This NCycle has a Road Bike at 1.
multipleCycles.printAll();
//# sourceMappingURL=index.js.map