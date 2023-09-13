
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAoEWtw9pPrneWB6OQbD9PQtXV90fn85iw",
  authDomain: "react-movix.firebaseapp.com",
  projectId: "react-movix",
  storageBucket: "react-movix.appspot.com",
  messagingSenderId: "716151101004",
  appId: "1:716151101004:web:6986976e5ff766eda8c6e9",
  measurementId: "G-W28V56G7ZX"
};


const app = initializeApp(firebaseConfig);
export const  firebaseAuth = getAuth(app);


// ye jo hai firebase naam ka app aur uski api use kri hai taaki ham jo bhi login / signin kre to vo email yha save hojae ek baar mai to fir vhi email baad mai login mai easily accessible ho