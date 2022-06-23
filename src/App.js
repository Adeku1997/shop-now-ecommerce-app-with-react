import React ,{useEffect} from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from "./components/Nav/Navbar";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import Authentication from './pages/authentication/Authentication';
import  {setCurrentUser}  from "./store/user/userActions";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "./store/category/categoryActions";

import { onAuthStateChangedListener ,createUserDocumentFromAuth} from './utils/firebase/firebase.utils';



const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
      });

      return unsubscribe;
    }, []);


   

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
 