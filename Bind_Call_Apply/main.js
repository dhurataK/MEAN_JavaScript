$(document).ready(function() {
  // our test object
  // var customObject = {
  //   name:'California, Eureka',
  //   onClick: function () {
  //     console.log("I've been clicked!");
  //     console.log(this.name);
  //   }
  // }
  // our behavior click
  // $('button').click(customObject.onClick);
  // modified
  // $('button').click(customObject.onClick.bind(customObject));

//   var newObject = {
//   name:"West Virginia,  Montani semper liberi"
//   }
//   // modify the button method to this:
// $('button').click(customObject.onClick.bind(newObject));

// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick.bind(customObject));

// Call and Apply
function Ninja(name, age) {
  this.name = name;
  this.age = age;
}
function BlackBelt(name,age) {
  // Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age) {
  // Arrays
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('Dhurata',40);
var bB = new BlackBelt('Erblina',29);
console.log(bB.name);
console.log(yB.name);

function levelUp() {
  console.log(this.name+" has learned a new kata, in "+this.gender+" favourite language: "+this.language);
}
var person = {
  name:'Lisa',
  gender: 'her',
  language:'JavaScript, duh!'
}
levelUp.call(person);
});
