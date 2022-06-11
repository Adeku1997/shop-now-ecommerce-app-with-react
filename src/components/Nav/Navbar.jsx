import { Outlet, Link } from "react-router-dom";
import React, { Fragment, useContext } from "react";
import "./Navbar.styles.scss";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {showCart } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            Shop<span>Now</span>
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
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
