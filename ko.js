// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-V06kY-BdNYJRZeelivVccVlFW-24OEc",
    authDomain: "texting-story-8381a.firebaseapp.com",
    databaseURL: "https://texting-story-8381a-default-rtdb.firebaseio.com",
    projectId: "texting-story-8381a",
    storageBucket: "texting-story-8381a.appspot.com",
    messagingSenderId: "227475360500",
    appId: "1:227475360500:web:a37201dd6a04f321592ca1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);








var username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome" + username + "You big bestieeee";

function addroom(){
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            actual_braincells : "in_ur_dreams"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "ko_msg.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  row = "<div class='room_name' id="+Room_names+" onclick = 'redirect(this.id)'>#"+Room_names+"</div>";
  document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirect(name){
localStorage.setItem("roomname", name);
window.location = "ko_msg.html";
}
function logout(){
 localStorage.removeItem("roomname");
 localStorage.removeItem("username");
 window.location = "index.html";
}
