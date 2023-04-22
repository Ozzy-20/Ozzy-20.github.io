document.getElementById("pastriesButton").addEventListener("click", function() {
  var pastriesContent = document.getElementById("pastriesContent");
  pastriesContent.style.display = "block";
  var drinksContent = document.getElementById("drinksContent");
  drinksContent.style.display = "none";
});

document.getElementById("drinksButton").addEventListener("click", function() {
  var drinksContent = document.getElementById("drinksContent");
  drinksContent.style.display = "block";
  var pastriesContent = document.getElementById("pastriesContent");
  pastriesContent.style.display = "none";
});
