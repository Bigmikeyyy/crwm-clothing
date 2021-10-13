import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishKey = 'pk_test_51JkAvkBlGZCuuqYqAusOLaclF7oGPMnyRXFiCtmaicxEwK3K1geu5vyLZvJpwlB8dbuxLRikAVmEWGJZ4x8LhINP004Acemhcr';

   const onToken = token => {
      console.log(token);
      alert('payment success');
   };

   return (
      <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishKey}
      />
   )
};

export default StripeCheckoutButton;
