// Initialize Firebase
    var config = {
        apiKey: "AIzaSyCNFFa-0zQ8BBsTkNM4076wMlaaEfNiMEI",
        authDomain: "mobiletest-b5fc1.firebaseapp.com",
        databaseURL: "https://mobiletest-b5fc1.firebaseio.com",
        storageBucket: "mobiletest-b5fc1.appspot.com",
        messagingSenderId: "891861159351"
    };

    firebase.initializeApp(config);
    var database = firebase.database();
        //로그인 상태인지 확인
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert("logged in")
                // 사용자 프로필 출력/
                    var userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                        var username = snapshot.val().name;
                        var email = snapshot.val().email;
                        alert(username +email);
                    });
                // User is signed in.
            } else {
                alert("logged out");
                // No user is signed in.
            }
    });
