// PART ONE
/*
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
*/
class Vehicle {
   constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
   }
   honk() {
      console.log(
         `This ${this.year} ${this.make} ${this.model} says "HONKY TONK!"`
      );
   }
   toString() {
      console.log(`This vehicle is a ${this.year} ${this.make} ${this.model}.`);
   }
}

// PART TWO
/*
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4
*/
class Car extends Vehicle {
   numWheels() {
      console.log(`${this.year} ${this.make} ${this.model}s have 4 wheels.`);
   }
}

// PART THREE
/*
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2
*/
class Motorcycle extends Vehicle {
   numWheels() {
      console.log(
         `${this.make} ${this.model}s from the year ${this.year} have 2 wheels.`
      );
   }
   revEngine() {
      console.log('VROOOOOOOOOOOOOOOOOOM!');
   }
}

// PART FOUR
/*
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
*/

class Garage {
   constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
   }
   add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
         return "You don't belong up in here!";
      }
      if (this.vehicles.length >= this.capacity) {
         return 'We full up in here!';
      }
      this.vehicles.push(newVehicle);
      return 'New car who dis 8)';
   }
}

const garage = new Garage(2);
const car1 = new Car('Ford', 'Fusion', 2008);
const vehicle1 = new Vehicle('John', 'Deer', 2020);
const motorcycle1 = new Motorcycle('Harley', 'Davidson', 2012);
const taco = 'taco';
