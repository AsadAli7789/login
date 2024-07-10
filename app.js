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
    getDocs
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
  





  
  function creatuser(){
    
  createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user sign in')
    hjk.style.display = "flex";
    nml.style.display = "none";
    
  
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
    hjk.style.display = "flex";
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


  var dat1 = document.getElementById('productDetail')
  var name = document.getElementById('productName')
  var pic = document.getElementById('productImage')
  var price = document.getElementById('productPrice')
  var buTTon = document.getElementById('jlk')
  var inne3 = document.getElementById('kabhi')

  // var productDetail = 
  // var picture = 
  
  // var Price = 

  
  
  
  buTTon.addEventListener('click',pol)
async function pol()
{
  jol(name.value,dat1.value,price.value,pic.value)
}


async function jol(productName,productDetail,price,picture){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      productName: productName,
      productDetail: productDetail,
      price: price,
      picture: picture,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}
async function knl(){
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
var card =`<div class="card">
            <img src="${doc.data().picture}" alt="Denim Jeans" style="width:100%" height="200px">
            <h1>${doc.data().productName}</h1>
            <p class="price">$${doc.data().price}</p>
            <p>${doc.data().productDetail}</p>
            <p><button>Add to Cart</button></p>
          </div>`
          inne3.innerHTML += card 


});
}
  knl()
  buTTon.addEventListener('click',clear)


function clear(){
  name.value = ''
  dat1.value=''
  price.value=''
  pic.value=''
  dat1.value=''
}







