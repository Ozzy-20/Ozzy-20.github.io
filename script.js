// This code makes the "pastriesContent" visible and hides the "drinksContent"
// when the "pastriesButton" is clicked.

document.getElementById("pastriesButton").addEventListener("click", function() {
  var pastriesContent = document.getElementById("pastriesContent");
  pastriesContent.style.display = "block"; // Show pastriesContent
  var drinksContent = document.getElementById("drinksContent");
  drinksContent.style.display = "none"; // Hide drinksContent
});


// This code makes the "drinksContent" visible and hides the "pastriesContent"
// when the "drinksButton" is clicked.

document.getElementById("drinksButton").addEventListener("click", function() {
  var drinksContent = document.getElementById("drinksContent");
  drinksContent.style.display = "block"; // Show drinksContent
  var pastriesContent = document.getElementById("pastriesContent");
  pastriesContent.style.display = "none"; // Hide pastriesContent
});
