import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { quantity, imageUrl, price, name } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} className="img" alt="img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
