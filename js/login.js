

function validatePassword(){
  password = document.getElementById("password").value,
  confirm_password = document.getElementById("confirm_password").value;
  if(password != confirm_password){
    alert("Passwords do not match");
  }
  else{//if they're equal
    location.href='groups.html';
  }
}
