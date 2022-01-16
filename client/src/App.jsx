import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SignPage from './pages/Sign/sign-page';
import CheckoutPage from './pages/Checkout/Checkout';

import Header from './components/header/header'
import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';

import './App.css';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession, currentUser }) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <div className="App">
         <Header />
         <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() =>
               currentUser ? (<Redirect to='/' />) : (<SignPage />)
            } />
         </Switch>
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
