import { useRef } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase with your config
const app = initializeApp({
  apiKey: "AIzaSyB66dQ3ywDfaMCpajJ0b4gq4r_VHTBDRN8",
  authDomain: "grocery-list-64eb4.firebaseapp.com",
  projectId: "grocery-list-64eb4",
  storageBucket: "grocery-list-64eb4.appspot.com",
  messagingSenderId: "997001397466",
  appId: "1:997001397466:web:ff4a0f00e9089ac15411e3",
	databaseURL: "https://grocery-list-64eb4-default-rtdb.firebaseio.com/"
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set, onValue } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const users = ref(database, 'users/');

onValue(users, (snapshot) => {
  console.log(snapshot.val());
});


export default function Home() {
  const inputRef = useRef(null);

  const addData = () => {
    set(ref(database, 'users/'), {
      username: "honky",
      email: "email@yahoo.com",
    });
  }

  return (
    <>
      <input ref={inputRef} type="text"></input>
      <button onClick="addData()">Add</button>
    </>
  )
}
