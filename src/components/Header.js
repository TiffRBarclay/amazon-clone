import React from "react";
import "./Header.css";
import Logo from "../Images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header">
      <img src={Logo} alt="amazon-logo" />
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
          <div className="shopping-cart">
            <ShoppingBasketIcon style={{ fontSize: "36px" }} />
            <p>{0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
