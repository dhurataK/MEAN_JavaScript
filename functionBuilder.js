function runningLogger() {
    console.log("I'm running!");
}
runningLogger()

function multiplyByTen(num){
  var result = num *10;
  return result;
}

console.log(multiplyByTen(5));

function stringReturnOne(){
  return "This is string one!"
}
function stringReturnTwo(){
  console.log("Thiss string");
  return "This is string two!"
}
 // console.log(stringReturnOne());
 // console.log(stringReturnTwo());

function caller(param){
    if(typeof param === 'function'){
      console.log(param());
    }
}

// caller("Three");
// caller(stringReturnTwo)

function myDoubleConsoleLog(p1, p2){
  if (typeof p1 === 'function'){
    console.log(p1());}
  if(typeof p2 ==='function'){
    console.log(p2());
  }
}

// myDoubleConsoleLog(stringReturnTwo, stringReturnOne);

function caller2(param){
  console.log('Starting');
  setTimeout(function(){
    if(typeof param === 'function'){
      param(stringReturnOne,stringReturnTwo);
    }
  },2000);
  console.log('Ending');
  return "interesting"
}
caller2(myDoubleConsoleLog);
