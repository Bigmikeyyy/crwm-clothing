import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase';

import './header.scss';


const Header = ({ currentUser }) => (
   <div className='header'>
      <Link className='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='header-items'>
         <Link className='header-item' to='/shop'>
            SHOP
         </Link>
         <Link className='header-item' to='/shop'>
            CONTACT
         </Link>
         {
            currentUser ?
               <div
                  className='header-item'
                  onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
               :
               <Link className='header-item' to='/signin'>
                  SIGN IN
               </Link>
         }
      </div>
   </div>
);

export default Header;