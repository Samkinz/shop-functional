import { UseState } from "react";
import React from "react";
import "./items.css";
import "../FurnitureList";
import { FurnitureList } from "../FurnitureList";

export default function Item({ item, addToOrder }) {
  return (
    <div className="item">
      <img src={"../../public/" + item.img} alt="furniture item picture" />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-card" onClick={() => addToOrder(item)}>
        +
      </div>
    </div>
  );
}
