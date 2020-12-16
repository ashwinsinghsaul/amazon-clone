import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoBccvu89nxkM3S7UC-yvusTR0CW9LWU8",
    authDomain: "clone-ddd17.firebaseapp.com",
    databaseURL: "https://clone-ddd17.firebaseio.com",
    projectId: "clone-ddd17",
    storageBucket: "clone-ddd17.appspot.com",
    messagingSenderId: "337753559990",
    appId: "1:337753559990:web:cc2f6f26861124dd89e717",
    measurementId: "G-T0942RJFKK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };