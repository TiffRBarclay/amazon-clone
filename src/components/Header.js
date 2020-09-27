import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../ReactContextAPI/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

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
        <div className="navigation-option">
          <p style={{ color: "#bbb" }}>Hello</p>
          <p>
            <b>Sign in</b>
          </p>
        </div>
        <div className="navigation-option">
          <p style={{ color: "#bbb" }}>Returns</p>
          <p>
            <b>& orders</b>
          </p>
        </div>
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
