import React from 'react';

import './cart-item.scss';

const CartItem = ({item: { imageUrl, price, name, quantity} }) => (
   <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='cart-item-details'>
         <span className='cart-item-name'>{name}</span>
         <span className='cart-item-price'>{quantity} x ${price}</span>
      </div>
   </div>
);

export default CartItem;