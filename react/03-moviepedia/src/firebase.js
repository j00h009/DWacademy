// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVWyfjEZxsSPk5sgIQSssaGtPspIGlwUk",
  authDomain: "project0304-18813.firebaseapp.com",
  projectId: "project0304-18813",
  storageBucket: "project0304-18813.appspot.com",
  messagingSenderId: "267637060780",
  appId: "1:267637060780:web:f4b3b82b85990449aedb09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs;
  //  console.log(result[0].data());
  //  result에는 배열이(querySnapshot) 담겨있다.

  // map() 함수
  // 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후,
  // 그 실행 결과를 새로운 배열에 담아 반환한다.

  // [Snapshot1, Snapshot2, ..., Snapshot3]
  // result[0].data();

  //   result.map((doc) => {
  //     return doc.data();
  //   });
  // ↓ 위 내용을 줄인 것
  const reviews = result.map((doc) => doc.data());
  return { reviews };
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
};
