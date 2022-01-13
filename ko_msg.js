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



  username = localStorage.getItem("username");
  roomname = localStorage.getItem("roomname");
  
  function send(){
        msg = document.getElementById("message").value;
        firebase.database().ref(roomname).push({
              name: username,
              message: msg,
              like: 0
        });
        document.getElementById("message").innerHTML = "";
  }



  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();

function logout(){
 localStorage.removeItem(roomname);
 localStorage.removeItem(username);
 window.location ="index.html";
}
