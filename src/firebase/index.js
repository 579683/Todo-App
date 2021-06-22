import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvp9pRnRg7hinWw3EHSC9NTMg0FytE5bs",
    authDomain: "todo-app-72e91.firebaseapp.com",
    projectId: "todo-app-72e91",
    storageBucket: "todo-app-72e91.appspot.com",
    messagingSenderId: "461541659679",
    appId: "1:461541659679:web:6b736f3b38a64682dff12a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase