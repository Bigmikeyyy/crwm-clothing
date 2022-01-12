import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';

import { HeaderContainer, LogoContainer, HeaderItemsContainer, HeaderLink} from './header.styles';


const Header = ({ currentUser, hidden, signOutStart }) => (
   <HeaderContainer>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <HeaderItemsContainer>
         <HeaderLink to='/shop'>
            SHOP
         </HeaderLink>
         <HeaderLink to='/shop'>
            CONTACT
         </HeaderLink>
         {
            currentUser ?
               <HeaderLink
                  as='div'
                  className='header-item'
                  onClick={signOutStart}>
                  SIGN OUT
               </HeaderLink>
               :
               <HeaderLink className='header-item' to='/signin'>
                  SIGN IN
               </HeaderLink>
         }
         <CartIcon />
      </HeaderItemsContainer>
      {
         hidden ? null :<CartDropdown />
      }
   </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);