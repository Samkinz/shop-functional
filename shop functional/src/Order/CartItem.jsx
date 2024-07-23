import React from "react";
import { FaTrash } from "react-icons/fa";
import "./cartItem.css";

export default function CartItem({ item, deleteOrder }) {
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={"./img/" + item.img} />
      <aside className="cart-item-info">
        <h2 className="cart-item-title">{item.title}</h2>
        <section className="cart-item-description">
          <b className="cart-item-price">{item.price}$</b>
          <FaTrash
            className="cart-delete-icon"
            onClick={() => deleteOrder(item.id)}
          />
        </section>
      </aside>
    </article>
  );
}
