import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.scss';


const Header = ({ currentUser, hidden }) => (
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
         <CartIcon />
      </div>
      {
         hidden ? null :<CartDropdown />
      }
   </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
   currentUser,
   hidden
});

export default connect(mapStateToProps)(Header);