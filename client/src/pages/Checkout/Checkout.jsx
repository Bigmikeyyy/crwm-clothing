import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector';

import './Checkout.scss';

const CheckoutPage = ({ cartItems, total }) => (
   <div className='checkout-page'>
      <div className='checkout-header'>
         <div className='checkout-header-block'>
            <span>Product</span>
         </div>
         <div className='checkout-header-block'>
            <span>Description</span>
         </div>
         <div className='checkout-header-block'>
            <span>Quantity</span>
         </div>
         <div className='checkout-header-block'>
            <span>Price</span>
         </div>
         <div className='checkout-header-block'>
            <span>Remove</span>
         </div>
      </div>
      {
         cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         )
      }

      <div className='total'>
         <span>Total: ${total}</span>
      </div>
      <div className='text-warning'>
         *Please use the following test credits for card*
         <br />
         4242 4242 4242 4242 Exp: 01/23 CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
   </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
