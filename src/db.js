import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBy-Hfsl2MOQMRQIIcEFwWmMTytfTq_UOg",
    authDomain: "nachrichten-app.firebaseapp.com",
    databaseURL: "https://nachrichten-app.firebaseio.com",
    projectId: "nachrichten-app",
    storageBucket: "gs://nachrichten-app.appspot.com/",
    messagingSenderId: "801521000298",
    appId: "1:801521000298:web:4320b798f02e5520960f13",
    measurementId: "G-769RRZKBKV"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {
    db, auth, storage
}