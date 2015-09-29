(function() {

  document.addEventListener("keydown", function(event) {
    event.preventDefault();
    console.log(event.keyCode);
  });

  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    console.log(event.keyCode);
  });
})();
