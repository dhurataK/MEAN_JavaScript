function fib() {
  // Some variables here
  var curr = 1, prev = 0, temp;
  function nacci() {
    // do something to those variables here
    temp = curr;
    curr = curr+prev;
    prev = temp;
    console.log(prev);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
