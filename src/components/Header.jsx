import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Search from "./Search";

function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
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
        <Search />
        <Link to="/cart" className="header__cart-section cart-section">
          <span>{totalPrice} $</span>
          <div className="cart-section__vl" />
          <span>
            <img src="assets/cart.svg" alt="cart" />
            <p>{totalCount}</p>
          </span>
        </Link>
      </div>
      <div className="header__vl" />
    </header>
  );
}

export default Header;
