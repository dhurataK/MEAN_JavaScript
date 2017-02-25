$(document).ready(function () {
  var count = 1;
  $('button').on("click", function() {
    if( count == 0){
      this.style.backgroundColor = "#2196F3"
      count = 1;
    }else {
      this.style.backgroundColor = "#dc2214"
      count = 0;
    }
    console.log(count);
    console.log("Button is clicked!");
  });
  $('button').hover(function() {
    this.style.backgroundColor = "#4caf50"
  }, function() {
    this.style.backgroundColor = "#d8d8d8"
  });
});
