export function decreaseItem(cartItems, id) {
  const itemToRemove = cartItems.find(item => item.id === id);

  if (itemToRemove.quantity === 1) {
    return cartItems.filter(item => item.id !== id);
  }

  return cartItems.map(item =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
}

// export const decreaseItem = (cartItems, id) => {
//   const existingCartItem = cartItems.find(cartItem => cartItem.id === id);

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter(cartItem => cartItem.id !== id);
//   }

//   return cartItems.map(cartItem =>
//     cartItem.id === id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };
