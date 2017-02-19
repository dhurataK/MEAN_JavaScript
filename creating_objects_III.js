function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed) {
  // A check if user hasn't called new while calling the constructor of a class
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, num_of_wheels, num_of_passengers, speed)
  }
  var chars = "0123456789abcdefghijklmnopqrstuvxyz";
  // Public vars and methods
  this.distance_traveled = 0;
  this.name = name;
  this.num_of_wheels = num_of_wheels;
  this.num_of_passengers = num_of_passengers;
  this.speed = speed;
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 15; i++) {
      vin += chars[Math.floor(Math.random()*chars.length)];
    }
    return vin;
  }
}
VehicleConstructor.prototype.makeNoise = function (noise) {
  var noise = noise || "Honk Honk!";
  console.log(noise);
  return this;
};
VehicleConstructor.prototype.move = function () {
  this.updateDistanceTraveled();
  this.makeNoise();
  return this;
}
VehicleConstructor.prototype.checkMiles = function () {
  console.log('distance traveled: ', this.distance_traveled);
  return this;
}
VehicleConstructor.prototype.updateDistanceTraveled = function () {
  this.distance_traveled += this.speed;
}
var bike = new VehicleConstructor("Bike",2,1,30);
bike.makeNoise("Ring ring").move().checkMiles();
console.log("Bike VIN: ",bike.vin);

var sedan = new VehicleConstructor("Sedan",4,5,60);
sedan.makeNoise().move().checkMiles();
console.log("Sedan VIN: ", sedan.vin);

var bus = new VehicleConstructor("Bus",6,52,40);
console.log(bus.num_of_passengers);
bus.takePassenger = function (num_of_taken_passengers) {
  this.num_of_passengers += num_of_taken_passengers
};
bus.takePassenger(10);
console.log(bus.num_of_passengers);
bus.makeNoise().move().move().checkMiles();
