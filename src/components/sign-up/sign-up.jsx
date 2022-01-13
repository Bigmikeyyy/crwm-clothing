import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

import { signUpStart } from '../../redux/user/user-actions';

const SignUp = ({ signUpStart }) => {
   const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmedPassword: ''
   });

   const { displayName, email, password, confirmedPassword } = userCredentials;

   const handleSubmit = async event => {
      event.preventDefault();

      if (password !== confirmedPassword) {
         alert('passwords dont match');
         return;
      }

      signUpStart({ displayName, email, password });
   };

   const handleChange = event => {
      const { name, value } = event.target;

      setUserCredentials({
         ...userCredentials,
         [name]: value
      })
   };

   return (
      <div className='sign-up'>
         <h2 className='title'> I do not have an account</h2>
         <span>Sign up with email and password</span>
         <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='displayName'
               value={displayName}
               onChange={handleChange}
               label='Display Name'
               required>
            </FormInput>
            <FormInput
               type='email'
               name='email'
               value={email}
               onChange={handleChange}
               label='Email'
               required>
            </FormInput>
            <FormInput
               type='password'
               name='password'
               value={password}
               onChange={handleChange}
               label='Password'
               required>
            </FormInput>
            <FormInput
               type='password'
               name='confirmedPassword'
               value={confirmedPassword}
               onChange={handleChange}
               label='Confirm password'
               required>
            </FormInput>
            <CustomButton type='submit'>
               Sign Up
            </CustomButton>
         </form>
      </div>
   )
};

const mapDispatchToProps = dispatch => ({
   signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(null, mapDispatchToProps)(SignUp);