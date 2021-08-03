import firebase from "firebase";

var firebaseConfig = {
    apiKey: "Enter_ApiKey",
    authDomain: "Enter_authDomain",
    projectId: "Enter_projectId",
    storageBucket: "Enter_storageBucket",
    messagingSenderId: "Enter_messagingSenderId",
    appId: "Enter_appId"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;