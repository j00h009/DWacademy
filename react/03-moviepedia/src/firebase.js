// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  // 문서아이디 수기(직접)등록
  addDoc,
  // 문서아이디 자동등록
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  exists,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

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

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니라 기능입니다.");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      // 정렬
      orderBy(options.order, "desc"),
      // 가져올 수(제한갯수)
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      // 정렬
      orderBy(options.order, "desc"),
      // 가져올 수(제한갯수)
      startAfter(options.lq),
      limit(options.limit)
    );
  }

  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // order(한,두개가 들어갈 수 있음), limit, startAfter
  // ASC(오름차순), DESC(내림차순)
  // console.log(result[0].data());
  // result에는 배열이(querySnapshot) 담겨있다.

  // map() 함수
  // 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후,
  // 그 실행 결과를 새로운 배열에 담아 반환한다.

  // [Snapshot1, Snapshot2, ..., Snapshot3]
  // result[0].data();

  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  // console.log(lastQuery);
  //   result.map((doc) => {
  //     return doc.data();
  //   });
  // ↓ 위 내용을 줄인 것
  // const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // ↓ 위 내용을 줄인 것
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // {
  //   reviews:[]
  // }
  // return은 하나만 할 수 있다.

  return { reviews, lastQuery };
}

async function deleteDatas(collectionName, docId, imgUrl) {
  const storage = getStorage();

  try {
    const deleteRef = ref(storage, imgUrl);
    await deleteObject(deleteRef);
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    return false;
  }
  return true;
}

async function addDatas(collectionName, formData) {
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime();
  // 파일을 저장하고 url 을 받아온다.
  const url = await uploadImage(path, formData.imgUrl);

  formData.id = lastId;
  formData.createdAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;

  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function updateDatas(collectionName, formData, docId, imgUrl) {
  const docRef = await doc(db, collectionName, docId);
  const time = new Date().getTime();

  const updateFormData = {
    title: formData.title,
    content: formData.content,
    rating: formData.rating,
    updatedAt: time,
  };

  // 사진 파일을 변경했을 때
  if (formData.imgUrl !== null) {
    // 사진파일 업로드 및 업로드한 파일 경로 가져오기
    const uuid = crypto.randomUUID();
    const path = `movie/${uuid}`;
    const url = await uploadImage(path, formData.imgUrl);

    // 기존사진 삭제하기
    const storage = getStorage();
    try {
      const deleteRef = ref(storage, imgUrl);
      await deleteObject(deleteRef);
    } catch {
      return null;
    }

    // 가져온 사진 경로 updateInfoObj의 imgUrl 에 셋팅하기
    formData.imgUrl = url;
  }

  // 문서 필드 데이터 수정
  await updateDoc(docRef, formData);
  const docData = await getDoc(docRef);
  const review = { docId: docData.id, ...docData.data() };
  return { review };
}

async function uploadImage(path, imgFile) {
  const storage = getStorage();
  const imageRef = ref(storage, path);

  // File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File의 url 을 받아온다.
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName) {
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
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
  addDatas,
  deleteDatas,
  updateDatas,
};
