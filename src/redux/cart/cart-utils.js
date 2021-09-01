export const addItemToCart = (cartItems, cartItemsToAdd) => {
   const isExists = cartItems.find(
      cartItem => cartItem.id === cartItemsToAdd.id
   );

   if (isExists) {
      return cartItems.map(cartItem =>
         cartItem.id === cartItemsToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
      )
   }

   return [ ...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
   const existingItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
   );

   if (existingItem && existingItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
   } else {
      return cartItems.map(
         cartItem =>
            cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
      )
   }
};