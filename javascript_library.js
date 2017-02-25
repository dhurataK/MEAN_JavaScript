function each(arr, callback) {
  // loop through the array
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
var _ = {
  map: function (arr, callback) {
    var list = [];
    for (var i = 0; i < arr.length; i++) {
      list.push(callback(arr[i]));
    }
    return list;
  },
  reduce: function (arr, callback, index) {
    var sum = 0;
    for (var i = index || 0; i < arr.length; i++) {
      sum = callback(arr[i], sum);
    }
    return sum;
  },
  find: function (arr, callback) {
    var found = 0;
    for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i])){
        found = arr[i];
        return found;
      }
    }
  },
  filter: function (arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i])){
        result.push(arr[i]);
      }
    }
    return result;
  },
  reject: function (arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i])){}
      else{
        result.push(arr[i]);
      }
    }
    return result;
  }
}
var evens = _.filter([1,2,3,4,8,5,60], function(num){return num % 2 == 0;});
// console.log(evens);
var mapped = _.map([1,2,3], function(num) {return num *3;}); // => [3,6,9]
// console.log(mapped);
var reduced = _.reduce([1,2,3], function(memo, num) { return memo+num;},0);// => 6
// console.log(reduced);
var found = _.find([1,2,3,4,5,6], function(num){ return num % 2 == 0;}); //=> 2
// console.log(found);
var odds = _.reject([1,2,3,4,5,6], function(num){return num % 2 == 0;}); // => [1,3,5]
console.log(odds);
