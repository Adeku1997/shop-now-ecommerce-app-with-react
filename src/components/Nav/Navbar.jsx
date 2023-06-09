import { Outlet, Link } from "react-router-dom";
import React, { Fragment, useContext } from "react";
import "./Navbar.styles.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { isCartOpen } from "../../store/cart/cartSelector";
import { selectUser } from '../../store/user/userSelector';

const Navbar = () => {
  const currentUser = useSelector(selectUser);
  const showCart  = useSelector(isCartOpen);

  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="title">
            Shop<span>Now</span>
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}
          <CartIcon  />
        </div>
         {showCart && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
