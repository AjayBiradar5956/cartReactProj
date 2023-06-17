import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeozWYpLAev8QtrUVKyYNP4eO1uZahn9U",
    authDomain: "cart-50df2.firebaseapp.com",
    projectId: "cart-50df2",
    storageBucket: "cart-50df2.appspot.com",
    messagingSenderId: "468962884656",
    appId: "1:468962884656:web:e224782fb4c3c0088981f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

