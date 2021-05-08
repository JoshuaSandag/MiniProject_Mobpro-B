import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDG5OCbTQlyVnzBfUZ44wAhnz-rZoieYec",
    authDomain: "moneytracker-c360e.firebaseapp.com",
    databaseURL: "https://moneytracker-c360e-default-rtdb.firebaseio.com",
    projectId: "moneytracker-c360e",
    storageBucket: "moneytracker-c360e.appspot.com",
    messagingSenderId: "513273421281",
    appId: "1:513273421281:web:04d554b9239c24ca3286a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 
  