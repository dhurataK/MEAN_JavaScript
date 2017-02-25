var func = x => x * x;
console.log(func(5));

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
console.log(p.age);

setTimeout( _ => {
  console.log('I happen sooner');
  setTimeout( _ => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]

let max = (a, b) => a > b ? a : b;
