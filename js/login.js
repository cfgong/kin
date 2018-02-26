

function validatePassword(){
  password = document.getElementById("password").value,
  confirm_password = document.getElementById("confirm_password").value;
  if(password != confirm_password){
    alert("Passwords do not match");
  }
<<<<<<< HEAD
  else{
    //alert("Success!") see this should bring it to a new page but it won't
    window.location.href ='groups.html';
=======
  else{//if they're equal
    location.href='groups.html';
>>>>>>> 8dc0262130a4556b6cf7253d6a6babc0e68ec5ce
  }
}
