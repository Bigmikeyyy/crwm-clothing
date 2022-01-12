import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

import { signUpStart } from '../../redux/user/user-actions';

class SignUp extends React.Component {
   constructor() {
      super();

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmedPassword: ''
      }
   }

   handleSubmit = async event => {
      event.preventDefault();
      const { signUpStart } = this.props;
      const {displayName, email, password, confirmedPassword} = this.state;

      if (password !== confirmedPassword) {
         alert('passwords dont match');
         return;
      }

      signUpStart({ displayName, email, password });
   };

   handleChange = event => {
      const { name, value } = event.target;

      this.setState({
         [name]: value
      })
   };

   render() {
      const {displayName, email, password, confirmedPassword} = this.state;
      return (
         <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='Display Name'
                  required>
               </FormInput>
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  label='Password'
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='confirmedPassword'
                  value={confirmedPassword}
                  onChange={this.handleChange}
                  label='Confirm password'
                  required>
               </FormInput>
               <CustomButton type='submit'>
                  Sign Up
               </CustomButton>
            </form>
         </div>
      )

   }
}

const mapDispatchToProps = dispatch => ({
   signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(null, mapDispatchToProps)(SignUp);