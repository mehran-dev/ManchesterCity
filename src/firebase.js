import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';





// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOFtf4FU8Gw4_wEXP8aXLX8keSdrx0PJU",
    authDomain: "m-city-b4fc3.firebaseapp.com",
    databaseURL: "https://m-city-b4fc3.firebaseio.com",
    projectId: "m-city-b4fc3",
    storageBucket: "m-city-b4fc3.appspot.com",
    messagingSenderId: "725146734933",
    appId: "1:725146734933:web:70bce96b126df5438e9fdc",
    measurementId: "G-JXSCN2PMF3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();



const myDB = firebase.database();
/*
myDB.ref('teams').once('value').then(snapShot =>
    console.log(snapShot.val())
)
 */
const dbMathces = myDB.ref('matches');

export {
    firebase,
    dbMathces
};