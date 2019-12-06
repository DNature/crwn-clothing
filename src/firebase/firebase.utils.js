import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFzQR9T4OiWd5OrUaagXx0ww-H5XTwr38",
  authDomain: "crwn-db-11234565.firebaseapp.com",
  databaseURL: "https://crwn-db-11234565.firebaseio.com",
  projectId: "crwn-db-11234565",
  storageBucket: "crwn-db-11234565.appspot.com",
  messagingSenderId: "129794590541",
  appId: "1:129794590541:web:6a10337fbfef1f838e1904",
  measurementId: "G-LF7R4L53WQ"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
