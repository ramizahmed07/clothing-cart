import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((a, c) => {
      return a + c.quantity;
    }, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
);
