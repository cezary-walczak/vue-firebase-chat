import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyAQREO6JrtgbvEVm1Fm6QwtRgzYIMHMR0k",
  authDomain: "vue-firebase-chat-180bd.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-180bd.firebaseio.com",
  projectId: "vue-firebase-chat-180bd",
  storageBucket: "vue-firebase-chat-180bd.appspot.com",
  messagingSenderId: "158168223992"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()