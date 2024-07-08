  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth,signOut,
     createUserWithEmailAndPassword ,signInWithEmailAndPassword 

   } from  "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


   import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js"




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
  var btn2 = document.getElementById('dll')
  btn2.addEventListener('click',logoutuser)
  btn2.addEventListener('click',jol)





  
  function creatuser(){
    
  createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user sign in')
    hjk.style.display = "block";
    nml.style.display = "none";
    pol(email.value,pass.value,name.value,dat1.value)
  
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
    console.log('u have sign up')
    // ...
    hjk.style.display = "block";
    nml.style.display = "none";
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  }
  function logoutuser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        hjk.style.display = "none";
        nml.style.display = "block";
      })
      .catch((error) => {
        console.log("logouterror", error);
      });
  }
  const db = getFirestore(app);


  var dat1 = document.getElementById('mbl')
  var credit = document.getElementById('fuc')
  
 
  var name = document.getElementById('mop')

  var pic = document.getElementById('inputfile')
  var image = document.getElementById('mnv')



async function pol(email,password,name,dat1){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      
      
      email: email,
      password: password,
      name: name,
      date: dat1
    
    
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
function jol(){
  image.src = pic.src
}