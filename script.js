function checkPassword() {
   var password = document.getElementById("passwordBox").value;

   if(password == "CompSci24422") {
    return true;
   }
   alert("Access Denied! Please Try Again!");
   return false;
   }