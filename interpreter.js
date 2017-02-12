// Problem 1:
console.log("PROBLEM 1: ");
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

// Answer:
// declarations get hoisted
var first_variable;
function firstFunc(){
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

// assigments and invocations maintain order
console.log(first_variable); // prints undefined
first_variable = "Yippe I was first!";
console.log(first_variable); // prints "Yippe I was first!"

// ***********************************************************
console.log("PROBLEM 2:");
// Problem 2:

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

// Answer:
// declarations get hoisted
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}

// assigments and invocations
food = "Chicken";
eat(); // inside the function food is reassigned to "half-chicken"
       // console.log() prints "half-chicken"
       // than a new var with same name is declared
       // than it's assigned to "gone" than "gone" is printed
console.log(food); // here "Chicken" is printed since global scope doesn't know
                   // about the new variable and it's reassignement

 // ***********************************************************
 console.log("PROBLEM 3: ");
 // Problem 3:
 var new_word = "NEW!";
 function lastFunc() {
   new_word = "old";
 }
 console.log(new_word);

 // declarations and hoisted
 var new_word;
 function lastFunc(){
   new_word = "old"
 }

 // assigments and invocations
new_word = "NEW!" // new_word is assigned to "NEW!"
console.log(new_word); // than "NEW!" is printed since lastFunc() is never called
