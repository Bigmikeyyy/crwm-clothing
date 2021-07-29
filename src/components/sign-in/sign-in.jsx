import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import './sign-in.scss';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async event => {
      event.preventDefault();

      const{ email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);

         this.setState({
            email: '',
            password: ''
         });
      } catch(err) {
         console.log(err.message)
      }
   };

   handleChange = event => {
      const { value, name } = event.target;

      this.setState({
         [name]: value
      });
   };

   render() {
      return(
         <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name='email'
                  type='email'
                  value={this.state.email}
                  required
                  handleChange={this.handleChange}
                  label='email'
               />
               <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  required
                  handleChange={this.handleChange}
                  label='password'
               />
               <div className='sign-in-buttons'>
                  <CustomButton type='submit'> Sign in </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSign>
                     {' '} Sign in with Google {' '}
                  </CustomButton>
               </div>
            </form>
         </div>
      )
   }
}

export default SignIn;