import React from 'react';

import './custom-button.scss';

const CustomButton = ({
                         children, isGoogleSign, inverted, ...otherProps}) => (
   <button className={
      `${inverted ? 'inverted' : ''} 
      ${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
   </button>
);

export default CustomButton;