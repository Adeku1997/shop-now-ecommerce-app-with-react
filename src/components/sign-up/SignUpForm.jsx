import React, { useState } from "react";
import "./SignUpForm.styles.scss";
import FormInput from "../form-input/FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";



const defaultFormFields = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState("defaultFormFields");
  const { name, password, email, confirmPassword } = formFields;

 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

    
      await createUserDocumentFromAuth(user, { name });
      resetFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("email already exists");
      } else {
        console.log(error, "user wasnt created");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="E-mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm-Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
