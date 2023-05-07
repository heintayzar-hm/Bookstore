import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyDFiIitfU7rQKXZOet6JXWmM9Jy7b4kp9E',
  authDomain: 'bookstore-757f6.firebaseapp.com',
  databaseURL: 'https://bookstore-757f6-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bookstore-757f6',
  storageBucket: 'bookstore-757f6.appspot.com',
  messagingSenderId: '992335130725',
  appId: '1:992335130725:web:e31f3d627b5dcfcde5168c',
  measurementId: 'G-CP89JY1X1B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
