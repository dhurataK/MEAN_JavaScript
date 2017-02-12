var array_sum = function(x,y){
  var sum = 0;
  for(var i = x; i<= y; i++){
    sum += i;

  }
  console.log("Total sum: "+sum);
}
// array_sum(1,3);

var array_min = function(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
// console.log(array_min([1,-3,0,6]));

var array_avg = function(arr){
  var sum = 0;
  var len = arr.length;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/len;
}
// console.log(array_avg([1,3,5,6]));

var object = {
  sum:function(x,y){var sum = 0;for(var i = x; i<= y; i++){sum += i;}console.log("Total sum: "+sum);},
  min:function(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  },
  avg:function(arr){
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/len;
  }
}

var person = {
  name:"Dhurata",
  distance_traveled:0,
  say_name:function(){console.log(this.name);},
  say_something:function(param){console.log(this.name+" says "+param);},
  walk:function(){console.log(this.name+" is walking"); this.distance_traveled += 3;},
  run:function(){console.log(this.name+" is running "); this.distance_traveled += 10;},
  crawl:function(){console.log(this.name+" is crawling"); this.distance_traveled +=1;}
}
person.say_name(); // Dhurata
person.say_something("I am cool"); // Dhurata says I am cool
person.walk();
console.log("Distance traveled: "+person.distance_traveled);
person.run();
console.log("Distance traveled: "+person.distance_traveled);
person.crawl();
console.log("Distance traveled: "+person.distance_traveled);
