import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getfirestore, collection, addDoc,serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaXTsaoEdTi54yZPxcP5z-3kvwq1kWKhU",
  authDomain: "fir-project-90e99.firebaseapp.com",
  projectId: "fir-project-90e99",
  storageBucket: "fir-project-90e99.firebasestorage.app",
  messagingSenderId: "931307349530",
  appId: "1:931307349530:web:f4ef0e23f8eebcad2b13a3",
  measurementId: "G-04H5RNGH8J"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db, collection, addDoc,serverTimestamp}

