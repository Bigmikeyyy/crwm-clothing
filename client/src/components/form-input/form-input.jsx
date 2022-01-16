import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
   <div className='form-input-group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
         label ?
            (<label className={
               `${otherProps.value ? 
                  'form-input-shrink': ''}
                   form-input-label
                `}>
               {label}
            </label>)
            : null
      }
   </div>
);

export default FormInput;
