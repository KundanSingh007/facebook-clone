import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFTEZO-I65dVo0AOuc9FxZa83I3vhK8R8",
  authDomain: "facebook-clone-bykd.firebaseapp.com",
  projectId: "facebook-clone-bykd",
  storageBucket: "facebook-clone-bykd.appspot.com",
  messagingSenderId: "320236998153",
  appId: "1:320236998153:web:0032742d699aae7b50f2d8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
