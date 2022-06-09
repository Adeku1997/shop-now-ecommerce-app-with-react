import React from "react";
import SignUpForm from "../../components/sign-up/SignUpForm";

import SignInForm from '../../components/sign-in-form/SignInForm';
import "./authentication.styles.scss";
const Authentication = () => {

  // const logGoogleUser =async()=>{
  //   const {user} = await signInWithGooglePopup();
  //   const  userDocRef = await createUserDocumentFromAuth(user); 
  // }

  
  return (
    <div className="authentication-container">
      {/* <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button> */}
      <SignInForm />
      <SignUpForm />
    
    </div>
  );
};

export default Authentication;
