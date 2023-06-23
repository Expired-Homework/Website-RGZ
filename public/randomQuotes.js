const quoteText = document.getElementById("random-quote");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcc4T3_RRJnLZcXvk26QAh5Qb1marucoM",
  authDomain: "personal-website-516b6.firebaseapp.com",
  databaseURL: "https://personal-website-516b6-default-rtdb.firebaseio.com",
  projectId: "personal-website-516b6",
  storageBucket: "personal-website-516b6.appspot.com",
  messagingSenderId: "863068134792",
  appId: "1:863068134792:web:029b122ffbda8a9e41ae3d",
  measurementId: "G-8KMZSJB948"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let quoteCount;
const quoteCountRef = ref(db, 'count');
onValue(quoteCountRef, (snapshot) => {
  const data = snapshot.val();
  quoteCount = data;
})

function NewQuote() {
  let randNum = Math.floor(Math.random() * quoteCount);
  // console.log(randNum);
  const referenceForData = ref(db, '/' + randNum);
  onValue(referenceForData, (snapshot) => {
      const data = snapshot.val()
      let quote = data["Quote"];
      let source = data["Source"];
      if(source != "") {
        quoteText.innerHTML = (quote + ' - ' + source);
      } else {
        quoteText.innerHTML = quote;
      }
  });
}

window.NewQuote = NewQuote;

// async function NewQuote() {
//   let response = await fetch("http://192.168.1.113:3000/random-quote");
//   if (response.ok) {
//     let textOut = await response.text();
//     quoteText.innerHTML = textOut;
//     //console.log(textOut);
//   } else {
//     alert("HTTP-Error: " + response.status);
//   }
// }