import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfTf_D-LJuclpiAffuQpgGV55Cp8G-DkI",
    authDomain: "linkedin-clone-c9486.firebaseapp.com",
    projectId: "linkedin-clone-c9486",
    storageBucket: "linkedin-clone-c9486.appspot.com",
    messagingSenderId: "52149726645",
    appId: "1:52149726645:web:6283fb41ddc7c04ce1bdfc",
    measurementId: "G-FZ792M0JTB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export {db , auth};
  