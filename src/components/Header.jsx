import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

function Header({ searchValue, setSearchValue }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo-section logo-section">
          <img
            src="assets/logo.png"
            alt="not found :("
            className="logo-section__img"
          />

          <div className="logo-section__text">
            <b>REACT PIZZA</b>
            <p>The most delicious pizza in the universe</p>
          </div>
        </Link>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="header__cart-section cart-section">
          <span>52 $</span>
          <div className="cart-section__vl" />
          <span>
            <img src="assets/cart.svg" alt="cart" />
            <p>3</p>
          </span>
        </div>
      </div>
      <div className="header__vl" />
    </header>
  );
}

export default Header;
