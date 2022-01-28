//document.write outputs test to the browser
//document.write("<strong> This is bold</strong>");
//document.write("<br>This is a new line</br>"); //creates new line

function writename() {
  var nameValue = document.getElementById("name").value;

  var addressValue = document.getElementById("address").value;

  var ageValue = document.getElementById("age").value;

  alert("You are " +nameValue + ". Age is " +ageValue + " years old. Your Address is " +addressValue + ".");


}