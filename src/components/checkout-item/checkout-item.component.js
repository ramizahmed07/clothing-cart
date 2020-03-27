import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, clearItemFromCart, removeItem, addItem }) => {
  const { name, price, quantity, imageUrl, id } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" className="img" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: id => dispatch(clearItemFromCart(id)),
  removeItem: id => dispatch(removeItem(id)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
