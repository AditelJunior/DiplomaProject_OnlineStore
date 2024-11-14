import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFuyFdeSsGzKz9cfVBxRIdma_O_9wIta8",
  authDomain: "arsenal-center.firebaseapp.com",
  databaseURL: "https://arsenal-center-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "arsenal-center",
  storageBucket: "arsenal-center.appspot.com",
  messagingSenderId: "503474611964",
  appId: "1:503474611964:web:5b0909539c145e495e1979",
  measurementId: "G-B8878QBXG5"
};

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = initializeApp.storage;
const db = getFirestore(app);

// if (process.env.NODE_ENV === 'development') {
//   const functions = getFunctions(app);

//   connectFunctionsEmulator(functions, 'localhost', 5001);

//   connectFirestoreEmulator(db, 'localhost', 8080)
//   console.log("flolodlsodlos");
// }

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default getFirestore();