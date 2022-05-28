import { Outlet ,Link} from "react-router-dom";
import react,{Fragment} from "react";
import "./Navbar.styles.scss";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <div>logo</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;