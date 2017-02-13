function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed) {
  // Private
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, num_of_wheels, num_of_passengers, speed)
  }
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }
  // Public vars and methods
  this.name = name;
  this.num_of_wheels = num_of_wheels;
  this.num_of_passengers = num_of_passengers;
  this.speed = speed;

  this.makeNoise = function(){
    console.log("Tyt tyt!");
  }
  this.move = function () {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function () {
    console.log(distance_travelled);
  }

}
var Bike = new VehicleConstructor("Bike",2 ,1,20);
Bike.makeNoise = function(){
  console.log("ring ring!");
}
Bike.move();
Bike.checkMiles();

var Sedan = new VehicleConstructor("Sedan", 4, 5,60);
Sedan.makeNoise = function(){
  console.log("Honk honk!");
}
Sedan.makeNoise();
Sedan.move();
Sedan.checkMiles();

var Bus = new VehicleConstructor("Bus", 6, 52,40);
Bus.takePassenger = function(num_of_passengers){
  this.num_of_passengers += num_of_passengers
}
console.log(Bus.num_of_passengers);
Bus.takePassenger(4);
console.log(Bus.num_of_passengers);
Bus.move();
Bus.checkMiles();
