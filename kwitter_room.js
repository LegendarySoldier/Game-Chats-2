//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDDqgnSVLf75FkS9QB-epcT5lbUZq2Om4k",
      authDomain: "project-mission-impossible.firebaseapp.com",
      databaseURL: "https://project-mission-impossible-default-rtdb.firebaseio.com",
      projectId: "project-mission-impossible",
      storageBucket: "project-mission-impossible.appspot.com",
      messagingSenderId: "384303134478",
      appId: "1:384303134478:web:3745ea6c912feb0322095f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "wassup " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
});});}