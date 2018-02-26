

function validatePassword(){
  username = document.getElementById("username").value,
  confirm_username = document.getElementById("confirm_username").value,
  password = document.getElementById("password").value,
  confirm_password = document.getElementById("confirm_password").value;
  if(username != confirm_username){
    alert("Usernames do not match");
  }
  else if(password != confirm_password){
    alert("Passwords do not match");
  }
  else{//if they're equal
    //alert("Success!");
    console.log(here);
    window.location.href='../groups.html';
    //location.href = "www.yoursite.com"
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
