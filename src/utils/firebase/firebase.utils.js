import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc ,collection,writeBatch,query,getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA1NKjpz6PcSoZs3ZsMx2bLvgYZnlc1BQ",
  // apiKey:process.env.REACT_APP_FIREBASE_KEY, 
  authDomain: "shop-now-db.firebaseapp.com",
  projectId: "shop-now-db",
  storageBucket: "shop-now-db.appspot.com",
  messagingSenderId: "216261254163",
  appId: "1:216261254163:web:f9b0b6ef6692fa27c2f3e6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInwithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=> {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc (collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  })
  await batch.commit();
  console.log('done');
}

 export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnaphot=> docSnaphot.data())
    
    // .reduce((acc,docSnapshot)=>{
    //   const {title,items} = docSnapshot.data();
    //   acc[title.toLowerCase()] = items;
    //   return acc;
    // },{})


    // return categoryMap;
 }


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
 ) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback );