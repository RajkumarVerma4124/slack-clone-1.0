import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD0GnzEApYDSiW66nNgixm9rn9EhJ9zcIo",
    authDomain: "slack-clone-ba200.firebaseapp.com",
    projectId: "slack-clone-ba200",
    storageBucket: "slack-clone-ba200.appspot.com",
    messagingSenderId: "805072757788",
    appId: "1:805072757788:web:4e1d7ab700cfabec0d2bd9",
    measurementId: "G-CX1DYL569G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;