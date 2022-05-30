import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from "./components/Nav/Navbar";
import SignIn from './pages/sign-in/SignIn';


 

 const Shop=()=>{
   return( 
     <h1>a shop page</h1>
   )
 }
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
 