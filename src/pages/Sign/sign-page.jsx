import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-page.scss';

const SignPage = () => (
   <div className='sign-layout'>
      <SignIn />
      <SignUp />
   </div>
);

export default SignPage;