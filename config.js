import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCQzXp20ME-jHLdQ24Pb-hwW0jRamhJWGE",
  authDomain: "book-santa-47136.firebaseapp.com",
  databaseURL: "https://book-santa-47136.firebaseio.com",
  projectId: "book-santa-47136",
  storageBucket: "book-santa-47136.appspot.com",
  messagingSenderId: "483820902956",
  appId: "1:483820902956:web:75eedd7bb15e144a4bcf89"
};
firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();