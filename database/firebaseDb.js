import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiguSZ_STXI67v4Em8d_19e40I2sVveug",
    authDomain: "reactfire-cce95.firebaseapp.com",
    databaseURL: "https://reactfire-cce95-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reactfire-cce95",
    storageBucket: "reactfire-cce95.appspot.com",
    messagingSenderId: "1045049216035",
    appId: "1:1045049216035:web:226dda017e061b6d63f596",
    measurementId: "G-5WQB5TM8BF"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;