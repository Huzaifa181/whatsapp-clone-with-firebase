import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsQ-co6SdfcxWkZAIB24wYWoBFk3z2Luo",
  authDomain: "chatapp-ff5a3.firebaseapp.com",
  databaseURL: "https://chatapp-ff5a3.firebaseio.com",
  projectId: "chatapp-ff5a3",
  storageBucket: "chatapp-ff5a3.appspot.com",
  messagingSenderId: "427653757536",
  appId: "1:427653757536:web:946d9e0a02d61b6c06e105",
  measurementId: "G-52HJM487JG"
};

  const firebaseApp=firebase.initializaApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;