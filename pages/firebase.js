// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66dQ3ywDfaMCpajJ0b4gq4r_VHTBDRN8",
  authDomain: "grocery-list-64eb4.firebaseapp.com",
  projectId: "grocery-list-64eb4",
  storageBucket: "grocery-list-64eb4.appspot.com",
  messagingSenderId: "997001397466",
  appId: "1:997001397466:web:ff4a0f00e9089ac15411e3",
	databaseURL: "https://grocery-list-64eb4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

set(ref(database, 'users/'), {
	username: "justin",
	email: "justin_schwenk@yahoo.com",
});
