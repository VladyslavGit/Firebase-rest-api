import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCO0LOzQSp6gLHiwmwLEu7nzLosaWmhrDQ",
  authDomain: "my-project-test-a86a8.firebaseapp.com",
  databaseURL: "https://my-project-test-a86a8.firebaseio.com",
  projectId: "my-project-test-a86a8",
  storageBucket: "my-project-test-a86a8.appspot.com",
  messagingSenderId: "353202447946",
  appId: "1:353202447946:web:282a76ba2d46479ae228b3",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
