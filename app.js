  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth,
     createUserWithEmailAndPassword ,signInWithEmailAndPassword 

   } from  "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBI0kAXAZRig7GEjZuvuDEVJT97Mmq7ZIA",
    authDomain: "my-1st-projects-6730c.firebaseapp.com",
    projectId: "my-1st-projects-6730c",
    storageBucket: "my-1st-projects-6730c.appspot.com",
    messagingSenderId: "202066845750",
    appId: "1:202066845750:web:aa65933b26f7e7b71db897",
    measurementId: "G-Y0M7ZYMNYP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  var pass = document.getElementById('llp')
  var email = document.getElementById('lop')
  var btn = document.getElementById('kol')
  btn.addEventListener('click',creatuser)

  var pass1 = document.getElementById('pol')
  var email1 = document.getElementById('olp')
  var btn1 = document.getElementById('dcl')
  btn1.addEventListener('click',user1)




  
  function creatuser(){
    
  createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user in')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });


  }
  function user1(){

    signInWithEmailAndPassword(auth, email1.value, pass1.value)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  }
