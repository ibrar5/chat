var firebaseConfig = {
    apiKey: "AIzaSyBuiOWmtr_EbsB3OfQjoAX-GxwgWS2trLM",
    authDomain: "kwitternew-7f1d7.firebaseapp.com",
    databaseURL: "https://kwitternew-7f1d7-default-rtdb.firebaseio.com",
    projectId: "kwitternew-7f1d7",
    storageBucket: "kwitternew-7f1d7.appspot.com",
    messagingSenderId: "264974485724",
    appId: "1:264974485724:web:6014484d0d038057670c19"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function load(){
    user_name = localStorage.getItem("user_name")
    document.getElementById("h").innerHTML = "Welcome " + user_name + "!";
}
function addroom(){
    var room_name = document.getElementById("inp").value;
    firebase.database().ref("/").child(room_name).upadate({
        purpose : "room"
    });
} 
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();