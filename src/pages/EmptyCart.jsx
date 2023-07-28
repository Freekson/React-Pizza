import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="cart">
      <h3 className="cart-status">Cart is empty 😕</h3>
      <p>
        You probably haven't ordered pizza yet. <br />
        To order pizza, go to the main page.
      </p>
      <img src="./assets/cart-empty.png" alt="cart is empty" />
      <Link to="/" className="btn">
        Come back
      </Link>
    </section>
  );
}
