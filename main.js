
  function login(){
    var user = document.getElementById("username").value;
    localStorage.setItem("user_name", user);
    window.open("room.html");
  }