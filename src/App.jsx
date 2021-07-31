import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';


import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SignPage from './pages/Sign/sign-page';
import Header from './components/header/header'
import {auth, createUserProfileDocument} from './firebase/firebase';
import { setCurrentUser } from './redux/user/user-actions';

import './App.css';

class App extends React.Component {
   unsubscribeFromAuth = null;

   componentDidMount() {
      const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapshot => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               })
            });
         }
         setCurrentUser(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div className="App">
            <Header />
            <Switch>
               <Route exact path='/' component={Homepage} />
               <Route path='/shop' component={ShopPage} />
               <Route path='/signin' component={SignPage} />
               <Route path='/signup' component={SignPage} />
            </Switch>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
