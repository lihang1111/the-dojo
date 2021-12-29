import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCcbAcV4K6En4u8w8qRuOOEKrdZyG9DrYw",
  authDomain: "thedojosite-f92fe.firebaseapp.com",
  projectId: "thedojosite-f92fe",
  storageBucket: "thedojosite-f92fe.appspot.com",
  messagingSenderId: "1087141768045",
  appId: "1:1087141768045:web:7024e4aab4f3b50ec24864"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }