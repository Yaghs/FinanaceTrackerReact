import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAaF7E062hK-ZZvBdfk7xQoI3pmHDZ3B9g",
    authDomain: "mymoney-55a52.firebaseapp.com",
    projectId: "mymoney-55a52",
    storageBucket: "mymoney-55a52.appspot.com",
    messagingSenderId: "996033148004",
    appId: "1:996033148004:web:65297dbd8ce0f344b49b71"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }