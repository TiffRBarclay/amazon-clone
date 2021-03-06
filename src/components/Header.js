import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../ReactContextAPI/StateProvider";
import { auth } from "../firebase/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="amazon-logo" className="header-logo" />
      </Link>
      <div className="search">
        <input type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="navigation">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="navigation-option">
            <p style={{ color: "#bbb" }}>{`Hello${
              user ? ", " + user.email : ""
            }`}</p>
            <p>
              <b>{user ? "Sign Out" : "Sign In"}</b>
            </p>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="navigation-option">
            <p style={{ color: "#bbb" }}>Returns</p>
            <p>
              <b>& orders</b>
            </p>
          </div>
        </Link>
        <div className="navigation-option">
          <p style={{ color: "#bbb" }}>Your</p>
          <p>
            <b>Prime</b>
          </p>
        </div>
        <div className="navigation-option">
          <Link to="/checkout">
            <div className="shopping-cart">
              <ShoppingBasketIcon style={{ fontSize: "36px" }} />
              <p className="cart-quantity">{basket?.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
