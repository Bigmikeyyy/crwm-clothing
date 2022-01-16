import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishKey = 'pk_test_51JkAvkBlGZCuuqYqAusOLaclF7oGPMnyRXFiCtmaicxEwK3K1geu5vyLZvJpwlB8dbuxLRikAVmEWGJZ4x8LhINP004Acemhcr';

   const onToken = token => {
      axios({
         url: 'payment',
         method: 'post',
         data: {
            amount: priceForStripe,
            token
         }
      })
         .then(response => {
            alert('Payment successful')
         })
         .catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
               'There was an error with your payment'
            );
         })
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
