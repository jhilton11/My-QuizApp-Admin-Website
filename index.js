function login() {
    var firebaseConfig = {
        apiKey: "AIzaSyDd3Atfk2oxlsoGz1Nue8npb5jk_j3lDSA",
        authDomain: "phase2challengeandroid.firebaseapp.com",
        databaseURL: "https://phase2challengeandroid.firebaseio.com",
        projectId: "phase2challengeandroid",
        storageBucket: "phase2challengeandroid.appspot.com",
        messagingSenderId: "6483909688",
        appId: "1:6483909688:web:c48a65f8550571a3645acd"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      console.log("All good");

      document.getElementById("spinner").style.display = "block";
      document.getElementById("loginBtn").classList.add("disabled");

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error: " + error);
        document.getElementById("spinner").style.display = "none";
        document.getElementById("loginBtn").classList.remove("disabled");
      });

      //Handle Account Status
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'moderator.html'; //After successful login, user will be redirected to home.html
        }
      });
}

