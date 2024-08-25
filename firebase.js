// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth'; // You can import other Firebase services as needed

// Initialize Firebase with your config

const apiKey = process.env.apiKey;
const authDomain = process.env.authDomain;
const projectId = process.env.projectId;
const storageBucket = process.env.storageBucket;
const messagingSenderId = process.env.messagingSenderId;
const appId = process.env.appId;
const measurementId = process.env.measurementId;

const firebaseConfig = {
  // apiKey: "AIzaSyAHTly3YJDEfgw4-LjpOGLdbsK43iCodec",
  // authDomain: "sevenstarttambola.firebaseapp.com",
  // projectId: "sevenstarttambola",
  // storageBucket: "sevenstarttambola.appspot.com",
  // messagingSenderId: "58410367493",
  // appId: "1:58410367493:web:5f11a4d6d5a5922ed27a6c",
  // measurementId: "G-BS4T9F2MK2"
  
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,

};

firebase.initializeApp(firebaseConfig);
