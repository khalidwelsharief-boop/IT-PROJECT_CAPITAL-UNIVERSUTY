function check(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if(email === "" || pass === ""){
    msg.style.color = "red";
    msg.innerHTML = "Please fill all fields";
    return false;
  }

  if(!email.includes("@")){
    msg.style.color = "red";
    msg.innerHTML = "Invalid email";
    return false;
  }

  // Save user in LocalStorage
  localStorage.setItem("user", email);

  msg.style.color = "lightgreen";
  msg.innerHTML = "Login successful";
}