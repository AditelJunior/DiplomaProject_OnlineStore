import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCn2eCQJCCjbSBj01syJbQGxOb5OrU_co",
  authDomain: "elektronika-cz.firebaseapp.com",
  projectId: "elektronika-cz",
  storageBucket: "elektronika-cz.firebasestorage.app",
  messagingSenderId: "306673771823",
  appId: "1:306673771823:web:d62ec2c573436c976dadda",
  measurementId: "G-SH0V4HGXTZ"
};
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
// provider.setCustomParameters({   
//     prompt : "select_account "
// });


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = initializeApp.storage;
export const db = getFirestore(app);

// if (process.env.NODE_ENV === 'development') {
//   const functions = getFunctions(app);

//   connectFunctionsEmulator(functions, 'localhost', 5001);

//   connectFirestoreEmulator(db, 'localhost', 8080)
//   console.log("flolodlsodlos");
// }

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default getFirestore();