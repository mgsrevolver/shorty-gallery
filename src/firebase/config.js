import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAx5GqBSUdxKuNpAoDnJ1ebMjeam-PO4UI',
  authDomain: 'shorty-gallery.firebaseapp.com',
  projectId: 'shorty-gallery',
  storageBucket: 'shorty-gallery.appspot.com',
  messagingSenderId: '614086498790',
  appId: '1:614086498790:web:829f34b61ec8932df1de27',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize storage
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }
