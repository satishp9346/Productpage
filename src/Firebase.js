import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBi4knaEfuLJV1YYTn_2F1W0d6Z7tP7B00",
  authDomain: "cart-a3019.firebaseapp.com",
  databaseURL: "https://cart-a3019-default-rtdb.firebaseio.com",
  projectId: "cart-a3019",
  storageBucket: "cart-a3019.appspot.com",
  messagingSenderId: "957668693551",
  appId: "1:957668693551:web:455e1dbf3b23158b8fd8da"
};
  
  // Initialize Firebase
var dataRef= firebase.initializeApp(firebaseConfig);
export default dataRef.database().ref();