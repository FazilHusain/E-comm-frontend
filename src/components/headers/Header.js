import React, { useContext } from "react";
import {
  MdOutlineMenu,
  MdClose,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const logoutUser = async () => {
    await axios.get("https://e-comm-backend-z6qo.onrender.com/user/logout");

    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
    window.location.href = '/login'
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <div className="menu">
        <MdOutlineMenu size={30} />
      </div>
      <div className="logo">
        <h1>
        <Link to="/">{isAdmin?'E-Commerce Site (Admin)':'E-Commerce Site'}</Link>
        </h1>
      </div>

      <ul>
      <li><Link to="/">{isAdmin?'Products':'Shop'}</Link></li>
        {isAdmin && adminRouter()}
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login or Register</Link>
          </li>
        )}
        <li>
          <MdClose size={30} className="menu" />
        </li>
      </ul>
      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <MdOutlineAddShoppingCart size={30} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
