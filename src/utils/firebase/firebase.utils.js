import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA1NKjpz6PcSoZs3ZsMx2bLvgYZnlc1BQ",
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

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists){
        const{displayName,email} = userAuth;
        const createdAt = newDate();
        
        try{
         await setDoc(userDocRef,{
             displayName,email,createdAt
         })
        }catch(error){
            console.log('error creating the user',error.message)
        }
    }

    return userDocRef;
}