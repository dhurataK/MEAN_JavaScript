function personConstructor(name){
  var person = {
  name:name,
  distance_traveled:0,
  say_name:function(){
    console.log(person.name);
  },
  say_something:function(someWord){
    console.log(person.name+" says "+someWord);
  },
  walk:function(){
    console.log(person.name+" is walking");
    person.distance_traveled += 3;
  },
  run:function(){
    console.log(person.name+" is running!");
    person.distance_traveled += 10;
  },
  crawl:function(){
    console.log(person.name+" is crawling!");
    person.distance_traveled +=1;
  }
}
  return person
}
// var Dhurata = personConstructor("Dhurata");
// Dhurata.say_name();
// Dhurata.say_something("I am cool!");
// var Jay = personConstructor("Jay");
// Jay.say_name();
// Jay.run();

function ninjaConstructor(name,cohort){
  var ninja = {
    name:name,
    cohort:cohort,
    belt_level:"Yellow belt",
    levelUp:function(){
      ninja.belt_level = "Red Belt"
    }
  }
  return ninja;
}
var JayNinja = ninjaConstructor("Jay",2);
console.log(JayNinja.name);
JayNinja.levelUp();
console.log(JayNinja.belt_level);
