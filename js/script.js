$(document).ready(function(){
    var title = document.getElementById("target");

    setInterval(function() {
      target.classList.add("show");
      setTimeout(function() {
        target.classList.remove("show");
      }, 1000);
    }, 2000);
});
