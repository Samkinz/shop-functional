import React from "react";
import "./header.css";
import CartItem from "../Order/CartItem";

export default function Header({order, deleteOrder}) {
  let [cartOpen, setCartOpen] = React.useState(false);

  return (
    <>
    <header className="navigation">
      <nav>
        <img
          className="logo"
          src="../../public/img/logo, icons/shop logo.jpeg"
          alt="shop logo"
        />
        <span className="name">House furniture</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>My page</li>
          <li>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className={`shopping-cart-button ${cartOpen && "active"}`}
            >
              <img
                className="shopping-cart-image"
                src="../../public/img/logo, icons/shopping cartpng.png"
                alt="shopping-cart"
              />
            </button>
          </li>
        </ul>
        {cartOpen && <aside className="shopping-list">{order.map(el =>
          <CartItem deleteOrder={deleteOrder} item = {el}>   </CartItem>
        )}</aside>}
      </nav>
    </header>
    <aside>
            <div className="banner"></div>
    </aside>
    </>
  );
}
