function VehicleConstructor(name,num_of_wheels, num_of_passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.num_of_wheels = num_of_wheels;
  vehicle.num_of_passengers = num_of_passengers;

  vehicle.makeNoise = function(){
    console.log("Tyt tyyt!");
  }
  return vehicle;
}

var Bike = VehicleConstructor("Bike",2,1);
Bike.makeNoise = function(){
  console.log("ring ring!");
}
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise = function(){
  console.log("Honk honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 6, 52);
Bus.takePassenger = function(num_of_passengers){
  Bus.num_of_passengers += num_of_passengers
}
console.log(Bus.num_of_passengers);
Bus.takePassenger(4);
console.log(Bus.num_of_passengers);
