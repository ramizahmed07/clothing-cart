import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDRy0JyIhbLKEQSR2A92PIyyH0I-sLI0oA",
  authDomain: "crown-clothing-a6157.firebaseapp.com",
  databaseURL: "https://crown-clothing-a6157.firebaseio.com",
  projectId: "crown-clothing-a6157",
  storageBucket: "crown-clothing-a6157.appspot.com",
  messagingSenderId: "429220544974",
  appId: "1:429220544974:web:d08cfc8f615b58ef202b9f",
  measurementId: "G-8NVRH9W3J4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDoc = async (userAuth, additionalData) => {
  const { uid, displayName, email } = userAuth;

  const userRef = firestore.doc(`/users/${uid}`);
  const { exists } = await userRef.get();

  if (!exists) {
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
