import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC8KASYRvDlc_YfS9XKXfjVAxqNN4mWFok",
        authDomain: "clone-47f34.firebaseapp.com",
        databaseURL: "https://clone-47f34.firebaseio.com",
        projectId: "clone-47f34",
        storageBucket: "clone-47f34.appspot.com",
        messagingSenderId: "242234273941",
        appId: "1:242234273941:web:bfc1dc4784cb6cf1262b9c",
        measurementId: "G-656TXXP58K"
});

const auth = firebase.auth()

export { auth }