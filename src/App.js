import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from "./components/Nav/Navbar";
import Shop from "./pages/Shop/Shop";
import Authentication from './pages/authentication/Authentication';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
 